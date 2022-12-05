import { AuthContext } from '../context/AuthContext'
import { useAuth0 } from '@auth0/auth0-react'
import { useNavigate} from 'react-router-dom'
import { useState, useEffect, useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import PeliculasFavoritas from './PeliculasFavoritas';
import Nav from './Nav';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const perfil = <FontAwesomeIcon icon={faUser} />

function Profile() {
	// const { user, isAuthenticated, loginWithRedirect } = useAuth0();
	const {autenticated, isActive} = useContext(AuthContext)
	const navigate = useNavigate();

	!autenticated && navigate('/')

	const userID = localStorage.getItem('id');
	const userName = localStorage.getItem('name');
	const userEmail = localStorage.getItem('email');
	console.log("USER USER", userID)

	return (
		autenticated && (
			<>
			<Nav/>
			<div className='profile'>
				<div class="perfil">
				{perfil}
				</div>
				<div className='datos'>
					<div className="nombre">{userName}</div>
					<div className="email">{userEmail}</div>
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