import { useNavigate } from 'react-router-dom'

import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const search = <FontAwesomeIcon icon={faSearch} />

function LoginButton() {
	const navigate = useNavigate();

	return (
		<div className='buscador' onClick={() => navigate("/search")}>
			{search}
		</div>
		
	)
}

export default LoginButton