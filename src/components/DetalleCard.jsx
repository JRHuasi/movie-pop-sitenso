import Rating from "./Rating";
import { useParams, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faHeart } from "@fortawesome/free-solid-svg-icons";
import { tomarFechaFormatoArg } from '../tools/functions'

const heart = <FontAwesomeIcon icon={faHeart} />
const back = <FontAwesomeIcon icon={faArrowLeft} />

function DetalleCard({ datos }) {
	console.log("CARD", datos);
	const navigate = useNavigate();

	return (
		<div className="detalle">
			<div className="imagen">
				<img
					src={datos.image !== null && datos.image.original}
					alt="datos.name"
				/>
				<div className="rating">
					<div className="calificacion">
						{datos.rating.average !== null	&& <Rating valor={datos.rating.average} />}						
					</div>
					<div className="favorito elegido">{heart}</div>
				</div>
			</div>
			<div className="titulo">
			<div className="boton" onClick={() => navigate(-1)}>
				{back}
			</div>
			<div>
				{datos.name}
			</div>
			<div></div>
		</div>
		<div className="datos">
			<div className="dato">
				<span>Lenguaje:</span>
				{datos.language}
			</div>
			<div className="dato">
				<span>Género:</span>				
				{datos.genres.length !== 0 
					? datos.genres.map((gen, key) => (
						(
							<span key={key}>{gen}</span>
						)
					))
					: <>No definido</>
				}
			</div>
			<div className="dato">
				<span>Fecha de Estreno</span>
				<span>{tomarFechaFormatoArg(datos.premiered)}</span>
			</div>
		</div>
		<div className="nombre">Sinopsis</div>
		<div className="sinopsis" dangerouslySetInnerHTML={{ __html: datos.summary }} /> 
		</div>
	);
}

export default DetalleCard;
