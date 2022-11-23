import { tomarFechaFormatoArg } from '../tools/functions'

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
					<div className='fecha'>{tomarFechaFormatoArg(coment.fechaAlta)}</div>
					<div className='texto'>{coment.texto}</div>
				</div>)
				)
			}		
		</div>
	)
}

export default ComentariosLista