import { useEffect, useState, useContext } from 'react'
import { SearchContext } from '../context/SearchContext'
import { searchMovie } from '../api/axios'
import { Spinner } from './Spinner'

import Peliculas from './Peliculas'

function Search() {
	const [listaPeliculas, setListaPeliculas] = useState([])
	const [spinnerShow, setSpinnerShow] = useState(false)
	
	const {buscar, setBuscar} = useContext(SearchContext)
	
	const buscarPeliculas = (agregar = false) => {
		!agregar && setListaPeliculas([])
		setSpinnerShow(true)
		// buscarCtx = buscar
		searchMovie(buscar)
		.then(data => {
			agregar 
			? setListaPeliculas(listaActual => [...listaActual, ...data])
			: setListaPeliculas(data)
			setSpinnerShow(false)
			}
		)
	}

	const handlScroll = (e) => {
		if(window.innerHeight + e.target.documentElement.scrollTop + 1 >= e.target.documentElement.scrollHeight){
			buscarPeliculas(true)
		}
	}
	
	useEffect(() => {
		buscarPeliculas();
		window.addEventListener('scroll', handlScroll)
	}, [ ])

	const handleSubmit = (e) => {
		e.preventDefault();
		buscarPeliculas();
	}

	return (
		<div className="search">
			<div className="form">				
				<form onSubmit={handleSubmit}>
					<input type="text" placeholder='buscar' onChange={(e) => setBuscar(e.target.value)}/>				
				</form>
			</div>
			{spinnerShow 
				?	<Spinner />
				:	<Peliculas lista={listaPeliculas} />
			}
		</div>
	)
}

export default Search