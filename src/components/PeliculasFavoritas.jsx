import Pelicula from "./Pelicula"
import { getPelisFavoritas } from '../api/axios'
import { useState, useEffect } from 'react';
import Serie from "./Serie";

function PeliculasFavoritas({userID}) {	
	const [listaPeliculas, setListaPeliculas] = useState([])

	useEffect(() => {
		getPelisFavoritas(userID)
			.then(data => {
				setListaPeliculas(data)
				console.log("FAVORITAS", data)
			}
		)
	}, [])

	return (
		<>
		<div className="peliculas-titulo">Tus series favoritas</div>
		<div className="peliculas-contenedor">
			<div className="peliculas">
			{listaPeliculas.length != 0  
				&& listaPeliculas.map((serie, key) => (
					<Serie serie={serie}/>
				))
			}
			</div>
			{listaPeliculas.length == 0  
				&& <p className="sin-resultados">NO MARCASTE NINGUNA AÚN</p>
			}
		
		</div>
		</>
	)
}

export default PeliculasFavoritas