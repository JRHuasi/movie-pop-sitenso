import { useState } from 'react'
import axios from 'axios'
import { useAuth0 } from '@auth0/auth0-react'
import { useNavigate } from "react-router-dom";
import { apiURL } from '../tools/definiciones'



function ComentariosForm({peliID, getComentarios}) {
	const [texto, setTexto] = useState("")
	const { user, isAuthenticated, loginWithRedirect } = useAuth0();
	const navigate = useNavigate();
	
	const handlesubmit = async (e) => {
		e.preventDefault();
		const uri = `${apiURL}/?accion=add-comentario`;
		const datos = {
			userID: user.sub,
			peliID: peliID,
			texto: texto, 
			usuario: user.nickname,
			nombre: user.name,
			email: user.email
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
			{isAuthenticated 
				? 
				<>
					<div className='titulo'>¿La viste?<br/>Brindanos tu evaluación o sinopsis</div>
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
						<span className="link" onClick={() => loginWithRedirect()}>Ingresá</span> para poder dejar tus comentarios				
					</div>
				}
			
		</div>
	)
}

export default ComentariosForm