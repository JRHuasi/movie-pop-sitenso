// import { useAuth0 } from '@auth0/auth0-react'
import { useNavigate, NavLink, useLocation} from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'
import { useContext } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faCoffee, faHome, faLock, faMoon, faSearch, faSignIn, faSignOut, faUser } from '@fortawesome/free-solid-svg-icons'
import LoginButton from './LoginButton'
import LogoutButton from './LogoutButton'

const home = <FontAwesomeIcon icon={faHome} />
const search = <FontAwesomeIcon icon={faSearch} />
const userProfile = <FontAwesomeIcon icon={faUser} />
const back = <FontAwesomeIcon icon={faArrowLeft} />

function Nav() {
	const {autenticated, isActive} = useContext(AuthContext)
	isActive();
	console.log({autenticated})

	// const { isAuthenticated } = useAuth0()
	const navigate = useNavigate()
	let location = useLocation()
	let aqui = location.pathname.split("/")[1];
	
	return (
		<div className='nav'>
			<div>
				{ aqui === 'detalle' 
				&& <>
						<div className="boton" onClick={() => navigate(-1)}>
							{back}
						</div>
					</>
			}
			</div>
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
				{autenticated 
					&& <NavLink 
						style={({isActive}) => ({color: isActive ? '#b78206':'white'})}
						to='/profile'>{userProfile}
					</NavLink>
				}
			</div>
			<div className='options boton'>
				{autenticated 
					? <LogoutButton /> 
					: <LoginButton />}
			</div>			
		</div>
		)
	}

export default Nav