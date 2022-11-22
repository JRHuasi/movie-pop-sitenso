import { Suspense, useEffect, useState } from "react";
import useSWR from 'swr'
import { useParams, useNavigate } from "react-router-dom";
import Comentarios from "./Comentarios";
import Spinner from "./Spinner";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faBackward, faHeart, faHeartPulse, faStar, faStarHalf } from "@fortawesome/free-solid-svg-icons";
import Rating from "./Rating";
import DetalleCard from "./DetalleCard";


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
			<Comentarios />
		</div>
	)

}

export default Detalle