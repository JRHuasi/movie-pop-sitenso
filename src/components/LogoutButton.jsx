import { useAuth0 } from '@auth0/auth0-react'
import { faPowerOff, faSignOut } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const loginOut = <FontAwesomeIcon icon={faSignOut} />
const salir = <FontAwesomeIcon icon={faPowerOff} />


function LogoutButton() {
	const { logout } = useAuth0();
	return (
		<div onClick={() => logout()} className="boton" title='SALIR'>
			{salir}
		</div>
	)
}

export default LogoutButton