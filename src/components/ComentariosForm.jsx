import { useState } from 'react'
import axios from 'axios'
import { apiURL } from '../tools/definiciones'

function ComentariosForm({peliID}) {
	const [texto, setTexto] = useState("")
	const handlesubmit = async (e) => {
		e.preventDefault();
		const uri = `${apiURL}/?accion=add-comentario`;
		const datos = {
			userID: "1",
			peliID: peliID,
			texto: texto, 
		}
		const headers = {
			'Content-Type': 'application/x-www-form-urlencoded'
		};
		// console.log("DATOS", datos)
		await axios.post(uri, {
				userID: "1",
				peliID: peliID,
				texto: texto, 
			}, {headers}
		).then(response => {
			console.log("Success ========>", response);
		})
		.catch(error => {
				console.log("Error ========>", error);
		})
	}
	return (
		<div className='comentario-form'>
			<div className='titulo'>¿La viste?<br/>Brindanos tu evaluación o sinopsis</div>
			<form onSubmit={handlesubmit}>
			<div className='textarea'>
				<textarea name="" id="" rows="10" onChange={(e) => {
					setTexto(e.target.value)
				}}></textarea>
			</div>
			<div>
				<button type='sumbit' className='boton button'>Enviar mi aporte</button>
			</div>
			</form>
		</div>
	)
}

export default ComentariosForm