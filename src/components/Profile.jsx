import { useAuth0 } from '@auth0/auth0-react'
import { useNavigate} from 'react-router-dom'
import { useState, useEffect } from 'react';
import PeliculasFavoritas from './PeliculasFavoritas';

function Profile() {
	const { user, isAuthenticated, loginWithRedirect } = useAuth0();
	const navigate = useNavigate();

	!isAuthenticated && navigate('/')

	const userID = isAuthenticated ? user.sub : "";
	console.log("USER USER", userID)

	return (
		isAuthenticated && (
			<>
			<div className='profile'>
				<img src={user.picture} alt={user.name}/>
				<div className='datos'>
					<div className="nombre">{user.name}</div>
					<div className="email">{user.email}</div>
				</div>
			</div>
			<div className='favoritas'>					
				<PeliculasFavoritas userID={userID}/>
			</div>
			</>
		)
	)
}

export default Profile