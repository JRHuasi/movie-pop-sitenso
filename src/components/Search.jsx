import { useEffect, useState, useContext } from 'react'
import { SearchContext } from '../context/SearchContext'
import { searchMovie } from '../api/axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Peliculas from './Peliculas'
import { faSpinner, faTimes } from '@fortawesome/free-solid-svg-icons'
import Nav from './Nav'

const spinner = <FontAwesomeIcon icon={faSpinner} />
const times = <FontAwesomeIcon icon={faTimes} />

function Search() {
	const [listaPeliculas, setListaPeliculas] = useState([])
	const [spinnerShow, setSpinnerShow] = useState(false)
	
	const {buscar, setBuscar} = useContext(SearchContext)
	
	const buscarPeliculas = (agregar = false) => {
		!agregar && setListaPeliculas([])
		buscar != "" && setSpinnerShow(true)
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
		const posicion = e.target.documentElement.scrollHeight
		if(window.innerHeight + e.target.documentElement.scrollTop + 1 >= posicion){
			buscarPeliculas(true)
		}
	}
	
	useEffect(() => {
		buscarPeliculas();
		window.addEventListener('scroll', handlScroll)
	}, [])

	const handleSubmit = (e) => {
		e.preventDefault();
		buscarPeliculas();
	}

	const borrarTexto = () => {
		setBuscar('');
		document.getElementById('buscador').focus();
	}

	return (
		<>
			<Nav/>
			<div className="search">
				<div className="form">				
					<form onSubmit={handleSubmit}>
						<div className="input-search">
							<input
								id="buscador" 
								type="text" 
								placeholder='buscar' 
								onChange={(e) => setBuscar(e.target.value)}
								value={buscar}
							/>
							<div className="borrar" onClick={borrarTexto}>
								{times}
							</div>
						</div>
					</form>
				</div>
				{spinnerShow &&	<div className="spinner">{spinner}</div>}
				<Peliculas lista={listaPeliculas} />
			</div>
		</>
	)
}

export default Search