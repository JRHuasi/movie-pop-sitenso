import { AuthContext } from '../context/AuthContext'
import { useState, useContext } from 'react'
import axios from 'axios'
import { useAuth0 } from '@auth0/auth0-react'
import { useNavigate } from "react-router-dom";
import { apiURL } from '../tools/definiciones'



function ComentariosForm({peliID, getComentarios}) {
	const [texto, setTexto] = useState("")
	const { user, isAuthenticated, loginWithRedirect } = useAuth0();
	const navigate = useNavigate();
	const {autenticated} = useContext(AuthContext)

	const userID = localStorage.getItem('id');
	const userName = localStorage.getItem('name');
	const userEmail = localStorage.getItem('email');
	
	const handlesubmit = async (e) => {
		e.preventDefault();
		const uri = `${apiURL}/?accion=add-comentario`;
		const datos = {
			userID: userID,
			peliID: peliID,
			texto: texto, 
			usuario: userName,
			nombre: userName,
			email: userEmail
		}

		const headers = {
			'Content-Type': 'application/x-www-form-urlencoded'
		};
		await axios.post(uri, datos, {headers}
		).then(response => {
			console.log("Success C =>", response);
			document.getElementById('aporte').value = ''
			getComentarios(peliID);
		})
		.catch(error => {
				console.log("Error C =>", error);
		})
	}
	return (
		<div className='comentario-form'>
			{autenticated 
				? 
				<>
					<div className='tituloInput'>¿La viste?<br/>Brindanos tu evaluación o sinopsis</div>
					<form onSubmit={handlesubmit}>
						<div className='textarea'>
							<textarea id="aporte" rows="10" onChange={(e) => {
								setTexto(e.target.value)
							}}></textarea>
						</div>
						<div>
							<button type='sumbit' className='boton button'>Enviar mi aporte</button>
						</div>
					</form> 
				</>
				: <div className='registrate'>
						<span className="link" onClick={() => navigate('/login')}>Ingresá</span> para poder dejar tus comentarios				
					</div>
				}
			
		</div>
	)
}

export default ComentariosForm