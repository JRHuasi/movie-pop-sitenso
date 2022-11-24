import { tomarFechaFormatoArg } from '../tools/functions'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComment } from '@fortawesome/free-solid-svg-icons'

const comment = <FontAwesomeIcon icon={faComment} />

function ComentariosLista({comentarios}) {

	return (
		<div className='comentarios-lista'>
			<div className='titulo'>
				<strong>Comentarios</strong><br/>
				{comentarios.length === 0 && <><i>No hay comentarios aún</i></>}
			</div>

			{comentarios.length !== 0 
				&& comentarios.map((coment, key) => (
				<div key={key} className="comentario">
					<div className='texto'>{comment} {coment.texto}</div>
					<div className='fecha'>{`${tomarFechaFormatoArg(coment.fechaAlta)} ${coment.nombre} [${coment.usuario}]`}</div>
				</div>)
				)
			}		
		</div>
	)
}

export default ComentariosLista