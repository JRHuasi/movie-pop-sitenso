import { useEffect, useState } from 'react'
import { searchMovie } from '../api/axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Peliculas from './Peliculas'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'

const spinner = <FontAwesomeIcon icon={faSpinner} />

function Search() {
	const [listaPeliculas, setListaPeliculas] = useState([])
	const [buscar, setBuscar] = useState("star war")
	const [spinnerShow, setSpinnerShow] = useState(false)

	
	const buscarPeliculas = (agregar = false) => {
		!agregar && setListaPeliculas([])
		setSpinnerShow(true)
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
				?	<div className="spinner">{spinner}</div>
				:	<Peliculas lista={listaPeliculas} />
			}
		</div>
	)
}

export default Search