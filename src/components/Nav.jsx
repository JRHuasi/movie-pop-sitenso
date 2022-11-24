import { useAuth0 } from '@auth0/auth0-react'
import { useNavigate, NavLink} from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faHome, faLock, faMoon, faSearch, faSignIn, faSignOut, faUser } from '@fortawesome/free-solid-svg-icons'
import LoginButton from './LoginButton'
import LogoutButton from './LogoutButton'

const home = <FontAwesomeIcon icon={faHome} />
const search = <FontAwesomeIcon icon={faSearch} />
const userProfile = <FontAwesomeIcon icon={faUser} />

function Nav() {

	const { isAuthenticated } = useAuth0();
	const navigate = useNavigate();
	
	return (
		<div className='nav'>
			<div></div>
			<div>
				<NavLink 
					style={({isActive}) => ({color: isActive ? '#b78206':'white'})}
					to='/'>{home}
				</NavLink>
			</div>
			<div>
				<NavLink 
					style={({isActive}) => ({color: isActive ? '#b78206':'white'})}
					to='/search'>{search}
				</NavLink>
			</div>
			<div>
				{isAuthenticated 
					&& <NavLink 
						style={({isActive}) => ({color: isActive ? '#b78206':'white'})}
						to='/profile'>{userProfile}
					</NavLink>
				}
			</div>
			<div className='options boton'>
				{isAuthenticated 
					? <LogoutButton /> 
					: <LoginButton />}
			</div>			
		</div>
		)
	}

export default Nav