import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

function Detalle() {
	const [datos, setDatos] = useState([])
	const { id } = useParams();
	const navigate = useNavigate();

	useEffect(() => {
		const uri =  `http://api.tvmaze.com/shows/${id}`
		console.log(uri);
		fetch(uri)
			.then(response => response.json())
			.then(data => {
				setDatos(data);
		})
		console.log({datos})
	}, [])

	
	return (
		<div className="detalle">
			<div className="imagen">
				<img src={datos.image.original} alt="datos.name"/>
			</div>
			<div className="nombre">{datos.name}</div>
			<div className="datos">
				<div className="dato">
					<span>Lenguaje:</span>
					{datos.language}
				</div>
				<div className="dato">
					<span>Género:</span>				
					{datos.genres.length && datos.genres.map((gen, key) => (
						(<span key={key}>{gen}</span>)
					))}
				</div>
				<div className="dato">
					<span>Fecha de Estreno</span>
					<span>{datos.premiered}</span>
				</div>
			</div>
			<div className="nombre">Sinopsis</div>
			<div className="sinopsis" dangerouslySetInnerHTML={{ __html: datos.summary }} />
		</div>
	)
}

export default Detalle