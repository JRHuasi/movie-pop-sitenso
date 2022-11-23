import useSWR from 'swr'
import { searchMovieDetail } from '../api/axios'
import { Suspense } from 'react'
import { useState, useEffect } from "react";
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
	const [loading, setLoading] = useState(true)
	const { id } = useParams();

	useEffect(() => {
		searchMovieDetail(id)
			.then(data => {
				setDatos(data)
				setLoading(false)
			}
		)
	}, [])

	return (
		<div>
			{ !loading 
				&& 
				<>
				<DetalleCard datos={datos} />
				<hr/>
				<ComentariosLista peliID={datos.id} />
				<ComentariosForm peliID={datos.id} />
				</>				
			}
		</div>		
	)
}

export default Detalle