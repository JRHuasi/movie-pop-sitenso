import axios from 'axios'
import { apiURL } from '../tools/definiciones'
import { useState, useEffect } from 'react';
import useSWR from 'swr';

import Rating from "./Rating";
import { useParams, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faHeart } from "@fortawesome/free-solid-svg-icons";
import { tomarFechaFormatoArg } from '../tools/functions'

const heart = <FontAwesomeIcon icon={faHeart} />
const back = <FontAwesomeIcon icon={faArrowLeft} />


function DetalleCard({ datos }) {
	// console.log("CARD", datos);
	const navigate = useNavigate();
	const [favorito, setFavorito] = useState(false)
	const setFarovito = async () => {
		const uri = `${apiURL}/?accion=set-favorito`;
		const data = {
			userID: "1",
			peliID: datos.id 
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

	// const uri = `${apiURL}/?accion=get-favorito&peliID=${datos.id}=&userID=1`;
	// console.log("URIIUR",uri)
	
	// let {fav} = useSWR(uri)
	// console.log("favorito", fav)
	// setFarovito(fav.length > 0 && true)



	const getFarovito = async () => {
		const uri = `${apiURL}/?accion=get-favorito&peliID=${datos.id}=&userID=1`;
		const headers = {
			'Content-Type': 'application/x-www-form-urlencoded'
		};
		// console.log("DATOS", datos)
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
				<div className="rating">
					<div className="calificacion">
						{datos.rating.average !== null	&& <Rating valor={datos.rating.average} />}						
					</div>
					<div className={"favorito " + (favorito ? 'elegido' : '') + " boton"}>
						<div onClick={setFarovito}>
							{heart}
						</div>
					</div>
				</div>
			</div>
			<div className="titulo">
				<div className="boton" onClick={() => navigate(-1)}>
					{back}
				</div>
				<div>
					{datos.name}
				</div>
				<div>
			</div>
		</div>
		<div className="datos">
			<div className="dato">
				<span>Lenguaje:</span>
				{datos.language}
			</div>
			<div className="dato">
				<span>Género:</span>				
				{datos.genres.length !== 0 
					? datos.genres.map((gen, key) => ((<span key={key}>{gen}</span>)))
					: <>No definido</>
				}
			</div>
			<div className="dato">
				<span>Fecha de Estreno:</span>
				<div>{datos.premiered ? tomarFechaFormatoArg(datos.premiered) : 'No especificada'}</div>
			</div>
			<div className="dato">
				<span>Cast:</span>
				<div className="cast">{datos._embedded.cast.map((person, key) => (
					<span className="persona" key={key}>&#65517; {person.person.name}</span>
				))}</div>
			</div>
		</div>
		<div className="nombre">Sinopsis</div>
		<div className="sinopsis" dangerouslySetInnerHTML={{ __html: datos.summary }} /> 
		</div>
	);
}

export default DetalleCard;
