import { useNavigate} from 'react-router-dom'
// import { useAuth0 } from '@auth0/auth0-react'
import { logout } from '../api/axios'
import { faPowerOff, faSignOut } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const loginOut = <FontAwesomeIcon icon={faSignOut} />
const salir = <FontAwesomeIcon icon={faPowerOff} />

function LogoutButton() {
	// const { logout } = useAuth0();
	const navigate = useNavigate()

	const handleLogout = async () => {
		
		const response = await logout()
		.then(resp => {
			console.log({resp})
			localStorage.setItem('token', "")
		})
		navigate('/')
	}

	return (
		<div onClick={handleLogout} className="boton" title='SALIR'>
			{salir}
		</div>
	)
}

export default LogoutButton