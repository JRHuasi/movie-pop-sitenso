import axios from 'axios'
import { apiURL, apiURLLara } from '../tools/definiciones'

export const apiLocal = axios.create({
	baseURL: apiURL
})

export const getListaComentarios = async (peliID) => {
	const response = await apiLocal.get(`?accion=lista-comentarios&peli-id=${peliID}`)
	return response.data
}

export const getPelisFavoritas = async (userID) => {
	const response = await apiLocal.get(`?accion=pelis-favoritas&userID=${userID}`)
	return response.data
}

export const isFavorita = async (peliID, userID) => {
	const argument = `?accion=get-favorito&peliID=${peliID}=&userID=${userID}`
	const response = await apiLocal.get(argument)
	console.log("DATADATADTA", response.data)
	return response.data
	// return apiURL+argument;
}

export const apiLara = axios.create({
	baseURL: apiURLLara
})

// Auth
export const login = async (email, password) => {
	console.log({email}, {email, password})
	const response = await apiLara.post('auth/login', { 
		email: email, 
		password: password
	});
	return response.data
}

export const register = async (name, email, password) => {
	const response = await apiLara.post('auth/register', { 
		name: name, 
		email: email, 
		password: password
	});
	return response.data
}

export const logout = async () => {
	const token = localStorage.getItem('token');
	console.log({token})
	const response = await apiLara.post('auth/logout', [],  { 
		headers: {
			"Content-Type": "application/json",
			"Authorization" : `Bearer ${token}`
		} 
	});
	return response.data
}

export const profile = async () => {
	const token = localStorage.getItem('token');
	const response = await apiLara.post('auth/me', [],  { 
		headers: {
			"Content-Type": "application/json",
			"Authorization" : `Bearer ${token}`
		} 
	});
	return response.data
}

// fin Auth

// TVMovie
export const searchMovie = async (texto) => {
	const response = await apiLara.get(`movies/${texto}`)
	return response.data
}

export const searchMovieDetail = async (id) => {
	const response = await apiLara.get(`movie-detail/${id}`)
	return response.data
}

// fin TVMovie

