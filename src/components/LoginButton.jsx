import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useAuth0 } from '@auth0/auth0-react'
import { faSignIn } from '@fortawesome/free-solid-svg-icons';

const login = <FontAwesomeIcon icon={faSignIn} />

function LoginButton() {
	const { loginWithRedirect } = useAuth0();
	return (
		<div className='boton' title='LOGIN' onClick={() => loginWithRedirect()}>
			{login}
		</div>
	)
}

export default LoginButton