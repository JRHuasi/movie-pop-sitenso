import { useEffect, useState } from 'react'
import { searchMovie } from '../api/axios'
import useSWR from 'swr'
import Peliculas from './Peliculas'

function Search() {
	const [listaPeliculas, setListaPeliculas] = useState([])
	const [buscar, setBuscar] = useState("star war")
	
	const buscarPeliculas = (texto) => {
		searchMovie(texto)
			.then(data => {
				setListaPeliculas(data)
			}
		)
	}
	
	useEffect(() => {
		buscarPeliculas("star war");
	}, [ ])

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log({buscar})
		buscarPeliculas(buscar);
	}

	return (
		<div className="search">
			<div className="form">				
				<form onSubmit={handleSubmit}>
					<input type="text" placeholder='buscar' onChange={(e) => setBuscar(e.target.value)}/>				
				</form>
			</div>
			<Peliculas lista={listaPeliculas} />
		</div>
	)
}

export default Search