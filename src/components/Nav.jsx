import { useAuth0 } from '@auth0/auth0-react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faHome, faLock, faMoon, faSearch, faSignIn, faSignOut } from '@fortawesome/free-solid-svg-icons'
import LoginButton from './LoginButton'
import LogoutButton from './LogoutButton'

const home = <FontAwesomeIcon icon={faHome} />
const search = <FontAwesomeIcon icon={faSearch} />

function Nav() {
	const { isAuthenticated } = useAuth0();
	return (
		<div className='nav'>
			<div></div>
			<div className='naranja'>
				{home}
			</div>
			<div className='options'>
				{isAuthenticated && search}
				{isAuthenticated 
					? <LogoutButton /> 
					: <LoginButton />}
			</div>
		</div>
		)
	}

export default Nav