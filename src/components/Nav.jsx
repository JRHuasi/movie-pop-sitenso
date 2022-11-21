import { useAuth0 } from '@auth0/auth0-react'
import { useNavigate} from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faHome, faLock, faMoon, faSearch, faSignIn, faSignOut } from '@fortawesome/free-solid-svg-icons'
import LoginButton from './LoginButton'
import LogoutButton from './LogoutButton'
import SearchButton from './SearchButton'
import ProfileButton from './ProfileButton'

const home = <FontAwesomeIcon icon={faHome} />
const search = <FontAwesomeIcon icon={faSearch} />

function Nav() {

	const { isAuthenticated } = useAuth0();
	const navigate = useNavigate();
	
	return (
		<div className='nav'>
			<div></div>
			<div className='naranja boton' onClick={() => navigate("/")}>
				{home}
			</div>
			<div className='options boton'>
				{isAuthenticated && <SearchButton/>}
				{isAuthenticated && <ProfileButton/>}
				{isAuthenticated 
					? <LogoutButton /> 
					: <LoginButton />}
			</div>
			
		</div>
		)
	}

export default Nav