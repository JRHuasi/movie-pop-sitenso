import { useEffect, useState } from 'react'
import Peliculas from './Peliculas'



function Search() {
	const [listaPeliculas, setListaPeliculas] = useState([])
	const [buscar, setBuscar] = useState("star war")
	
	const buscarPeliculas = (texto) => {
		const uri = `http://api.tvmaze.com/search/shows?q=${texto}`
		console.log({uri})
		fetch(uri)
				.then(response => response.json())
				.then(data => {
					setListaPeliculas(data);
				})
	}

	useEffect(() => {
		buscarPeliculas("star war");
	}, [ ])

	const handleSubmit = (e) => {
		e.preventDefault();
		buscarPeliculas(buscar);
	}

	return (
		<div className="search">
			<div className="form">				
			<form onSubmit={handleSubmit}>
				<input type="text" placeholder='buscar' onChange={(e) => setBuscar(e.target.value)}/>				
			</form>
				<hr/>
			</div>
			<Peliculas lista={listaPeliculas} />
		</div>
	)
}

export default Search