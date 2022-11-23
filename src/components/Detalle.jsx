import { useEffect, useState } from "react";
import useSWR from 'swr'
import { useParams, useNavigate } from "react-router-dom";
import Spinner from "./Spinner";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faBackward, faHeart, faHeartPulse, faStar, faStarHalf } from "@fortawesome/free-solid-svg-icons";
import Rating from "./Rating";
import DetalleCard from "./DetalleCard";
import ComentariosLista from "./ComentariosLista";
import ComentariosForm from "./ComentariosForm";


function Detalle() {
	const navigate = useNavigate();

	const [datos, setDatos] = useState([])
	const { id } = useParams();
	const uri =  `http://api.tvmaze.com/shows/${id}?embed=cast`
	console.log(uri)
	
	let {data} = useSWR(uri)
	console.log(data)
	return (
		<div>
			<DetalleCard datos={data} />
			<hr/>
			<ComentariosLista peliID={data.id} />
			<ComentariosForm peliID={data.id} />
		</div>
	)
}

export default Detalle