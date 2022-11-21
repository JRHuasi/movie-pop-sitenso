import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const search = <FontAwesomeIcon icon={faSearch} />

function LoginButton() {
	return (
		<div className='boton' title='BUSCADOR'>
			{search}
		</div>
	)
}

export default LoginButton