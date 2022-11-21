import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const search = <FontAwesomeIcon icon={faSearch} />

function LoginButton() {
	return (
		<div className='buscador'>
			{search}
		</div>
	)
}

export default LoginButton