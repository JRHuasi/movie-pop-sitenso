import useSWR from 'swr'
import { useEffect, useState } from 'react'
import { getListaComentarios } from '../api/axios'
import { apiURL } from '../tools/definiciones'
import { tomarFechaFormatoArg } from '../tools/functions'

function ComentariosLista({peliID}) {
	const uri = `${apiURL}?accion=lista-comentarios&peli-id=${peliID}`;
	console.log(uri)
	let {data} = useSWR(uri)
	console.log({data})

	const [datos, setDatos] = useState([])
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		getListaComentarios(peliID)
			.then(data => {
				console.log("second", data)
				setDatos(data)
				console.log("first", datos)
				setLoading(false)
			}
		)
	}, [])

	return (
		<div className='comentarios-lista'>
			<div className='titulo'>
				<strong>Comentarios</strong><br/>
				{datos.length === 0 && <><i>No hay comentarios aún</i></>}
			</div>

			{!loading && (
				datos.length !== 0 
				&& datos.map((coment, key) => (
				<div key={key} className="comentario">
					<div className='fecha'>{tomarFechaFormatoArg(coment.fechaAlta)}</div>
					<div className='texto'>
						{coment.texto}
					</div>
				</div>)
				))
			}		
		</div>
	)
}

export default ComentariosLista