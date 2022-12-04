import axios from 'axios'
import { useAuth0 } from '@auth0/auth0-react'
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faHeart } from "@fortawesome/free-solid-svg-icons";

import { tomarFechaFormatoArg } from '../tools/functions'
import { apiURL } from '../tools/definiciones'

import Rating from "./Rating";

const back = <FontAwesomeIcon icon={faArrowLeft} />

function DetalleCard({ datos }) {
	console.log("CARD", datos);
	const navigate = useNavigate();
	const [favorito, setFavorito] = useState(false)

	const { user, isAuthenticated, loginWithRedirect } = useAuth0();

	const userID = isAuthenticated ? user.sub : "";
	
	const setFarovito = async () => {
		if(isAuthenticated){
			if(!favorito){
				const uri = `${apiURL}/?accion=set-favorito`;
				const data = {
					userID: userID,
					peliID: datos.id, 
					afiche: datos.image.medium,
					nombre: datos.name 
				}
				const headers = {
					'Content-Type': 'application/x-www-form-urlencoded'
				};
				// console.log("DATOS", datos)
				await axios.post(uri, data, {headers}
				).then(response => {
					console.log("Success ========>", response);
					setFavorito(true);
				})
				.catch(error => {
						console.log("Error ========>", error);
				})
			}
		}else{
			loginWithRedirect();
		}

	}

	const getFarovito = async () => {
		const uri = `${apiURL}/?accion=get-favorito&peliID=${datos.id}=&userID=${userID}`;
		const headers = {
			'Content-Type': 'application/x-www-form-urlencoded'
		};
		await axios.get(uri, {headers}
		).then(response => {
			console.log("Success F =>", response );
			setFavorito(response.data.id !== undefined ? true : false);
			console.log({favorito})
			console.log(typeof response.data.id)
		})
		.catch(error => {
				console.log("Error F =>", error);
		})
	}

	useEffect(() => {
		getFarovito();
	}, [])

	const afiche = datos.image !== null 
	? datos.image.original 
	: '/assets/imagenes/comodin.jpg'

	return (
		<div className="detalle">
			<div className="imagen">
				<img
					src={afiche}
					alt="datos.name"
				/>
				{/* rating - favoritos */}
				<Rating 
					valor={datos.rating.average} 
					setFarovito={setFarovito} 
					favorito={favorito}
				/>
			</div>
			<div className="datos">
				{/* título */}
				<div className="titulo">
					{datos.name}
				</div>
				{/* Lenguaje */}
				<div className="dato">
					<span>Lenguaje:</span>
					{datos.language}
				</div>
				{/* Género */}
				<div className="dato">
					<span>Género:</span>				
					{datos.genres.length !== 0 
						? datos.genres.map((gen, key) => (<span key={key}>{gen}</span>))
						: <>No definido</>
					}
				</div>
				{/* Estreno */}
				<div className="dato">
					<span>Fecha de Estreno:</span>
					<div>{datos.premiered ? tomarFechaFormatoArg(datos.premiered) : 'No especificada'}</div>
				</div>
				{/* Cast */}
				<div className="dato">
					<span>Actores:</span>
					<div className="cast">{
						datos._embedded.cast.map((person, key) => (
							<span className="persona" key={key}>&#65517; {person.person.name}</span>
						))}
						{datos._embedded.cast.length === 0 && <>Sin información</>}
					</div>
				</div>
				<div className='sinopsis'>
					<div className="titulo">Sinopsis</div>
					<div className="cuerpo" dangerouslySetInnerHTML={{ __html: datos.summary }}></div>
				</div>
			</div>
		</div>

	);
}

export default DetalleCard;
