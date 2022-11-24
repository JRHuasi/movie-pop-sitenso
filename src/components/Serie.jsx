import { useNavigate } from 'react-router-dom'

function Serie({serie}) {
	// console.log({pelicula})
	const navigate = useNavigate()
	const id = serie.id
	const afiche = serie.afiche !== null 
		? <img src={serie.afiche} alt={serie.nombre}/> 
		: <img src='/assets/imagenes/comodin.jpg' />

	return (
		<div className="pelicula">
			<div className="imagen boton" onClick={() => navigate(`/detalle/${id}`)}>
				{afiche}
			</div>
			<div className="nombre">{serie.nombre}</div>
		</div>
	)
}

export default Serie