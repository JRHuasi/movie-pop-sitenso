import { useAuth0 } from '@auth0/auth0-react'
import { useNavigate, NavLink} from 'react-router-dom'
import JSONPretty from 'react-json-pretty'
import { getPelisFavoritas } from '../api/axios'
import { useState, useEffect } from 'react';

function Profile() {
	const { user, isAuthenticated, loginWithRedirect } = useAuth0();
	const navigate = useNavigate();

	!isAuthenticated && navigate('/')

	const [listaPeliculas, setListaPeliculas] = useState([])

	const userID = isAuthenticated ? user.sub : "";

	useEffect(() => {
		getPelisFavoritas(userID)
			.then(data => {
				setListaPeliculas(data)
				console.log(data, userID)
			}
		)
	}, [])

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