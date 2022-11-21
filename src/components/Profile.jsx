import { useAuth0 } from '@auth0/auth0-react'
import JSONPretty from 'react-json-pretty'

function Profile() {
	const { user, isAuthenticated} = useAuth0();
	return (
		isAuthenticated && (
			<div className='profile'>
				<img src={user.picture} alt={user.name}/>
				<div className='datos'>
					<div className="nombre">{user.name}</div>
					<div className="email">{user.email}</div>
					<pre>
						<JSONPretty data={user}/>
					</pre>
				</div>
			</div>
		)
	)
}

export default Profile