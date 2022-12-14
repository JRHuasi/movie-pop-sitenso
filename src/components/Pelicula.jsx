import { useNavigate } from 'react-router-dom'

function Pelicula({pelicula}) {
	// console.log({pelicula})
	const navigate = useNavigate()
	const id = pelicula.show.id
	const afiche = pelicula.show.image !== null 
		? <img src={pelicula.show.image.medium} alt={pelicula.show.name}/> 
		: <img src='/assets/imagenes/comodin.jpg' />

	return (
		<div className="pelicula">
			<div className="imagen boton" onClick={() => navigate(`/detalle/${id}`)}>
				{afiche}
			</div>
			<div className="nombre">{pelicula.show.name}</div>
		</div>
	)
}

export default Pelicula