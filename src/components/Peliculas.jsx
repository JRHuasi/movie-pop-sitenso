import Pelicula from "./Pelicula"


function Peliculas({lista}) {
	return (
		<>
		<div className="peliculas-titulo">Películas</div>
		<div className="peliculas-contenedor">
		
			<div className="peliculas">
				{lista.length != 0  
					&& lista.map((pelicula, key) => (
						<Pelicula pelicula={pelicula} key={key}/>
						))
				}
			</div>
			{lista.length == 0  
				&& <p className="sin-resultados">SIN RESULTADOS</p>
			}
		</div>
		</>
	)
}

export default Peliculas