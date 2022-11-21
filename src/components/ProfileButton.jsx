import { useNavigate } from 'react-router-dom'

import { faSearch, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const search = <FontAwesomeIcon icon={faSearch} />
const userProfile = <FontAwesomeIcon icon={faUser} />

function PrifileButton() {
	const navigate = useNavigate();

	return (
		<div className='buscador' onClick={() => navigate("/profile")}>
			{userProfile}
		</div>
		
	)
}

export default PrifileButton