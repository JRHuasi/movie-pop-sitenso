import useSWR from 'swr'
import { apiURL } from '../tools/definiciones'
import { tomarFechaFormatoArg } from '../tools/functions'

function ComentariosLista({peliID}) {
	const uri = `${apiURL}?accion=lista-comentarios&peli-id=${peliID}`;
	console.log(uri)
	let {data} = useSWR(uri)
	console.log({data})

	return (
		<div className='comentarios-lista'>
			<div className='titulo'>Comentarios<br/>de nuestros usuarios</div>
			{data.length !== 0 
				&& data.map((coment, key) => (
				<div key={key} className="comentario">
					<div className='fecha'>{tomarFechaFormatoArg(coment.fechaAlta)}</div>
					<div className='texto'>
						{coment.texto}
					</div>
				</div>)
				)
			}		
		</div>
		
		// {data.length === 0 && (<div className="titulo">Sé el primero en comentar</div>)}
	)
}

export default ComentariosLista