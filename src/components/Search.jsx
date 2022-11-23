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
	
	const buscarPeliculas = (texto) => {
		setListaPeliculas([])
		setSpinnerShow(true)
		searchMovie(texto)
		.then(data => {
			setListaPeliculas(data)
			setSpinnerShow(false)
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
			{spinnerShow 
				?	<div className="spinner">{spinner}</div>
				:	<Peliculas lista={listaPeliculas} />
			}
		</div>
	)
}

export default Search