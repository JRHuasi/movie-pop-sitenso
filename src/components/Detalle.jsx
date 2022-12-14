import { searchMovieDetail, getListaComentarios } from '../api/axios'
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

import DetalleCard from "./DetalleCard";
import ComentariosLista from "./ComentariosLista";
import ComentariosForm from "./ComentariosForm";
import Nav from './Nav';

function Detalle() {
	const navigate = useNavigate();

	const [datos, setDatos] = useState([])
	const [comentarios, setComentarios] = useState([])
	const [loading, setLoading] = useState(true)
	const { id } = useParams();
	
	const getComentarios = (peliID) => {
		getListaComentarios(peliID)
			.then(data => {
				setComentarios(data)
			}
		)
	}

	useEffect(() => {
		searchMovieDetail(id)
			.then(data => {
				setDatos(data)
				setLoading(false)
				getComentarios(data.id)
			}
		)
	}, [])

	return (
		<div>
			<Nav/>
			{ !loading 
				&& 
				<>
				<DetalleCard datos={datos} />
				<hr/>
				<ComentariosLista comentarios={comentarios} />
				<ComentariosForm peliID={datos.id} getComentarios={getComentarios} />
				</>				
			}
		</div>		
	)
}

export default Detalle