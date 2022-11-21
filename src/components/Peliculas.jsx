import Pelicula from "./Pelicula"


function Peliculas({lista}) {
	console.log({lista})
	// console.log("TAMAÑO", lista.length)
	return (
		<div className="peliculas-contenedor">
			<div className="titulo">Películas</div>
			
			<div className="peliculas">
			{lista.length != 0  
				&& lista.map((pelicula, key) => (
					<Pelicula pelicula={pelicula} key={key}/>
					))
			}
			{lista.length == 0  
				&& <p className="sin-resultados">SIN RESULTADOS</p>
			}

		</div>
		</div>
	)
}

export default Peliculas