import axios from 'axios'
import { apiURL, apiURLTV } from '../tools/definiciones'

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

// acceso a la web de la API
/* 
export const apiTVMaze = axios.create({
	baseURL: 'http://api.tvmaze.com'
})

export const searchMovie = async (texto) => {
	const response = await apiTVMaze.get(`/search/shows?q=${texto}`)
	return response.data
}

export const searchMovieDetail = async (id) => {
	const response = await apiTVMaze.get(`/shows/${id}?embed=cast`)
	return response.data
} */

export const apiTVMaze = axios.create({
	baseURL: apiURLTV
})

export const searchMovie = async (texto) => {
	const response = await apiTVMaze.get(`movies/${texto}`)
	return response.data
}

export const searchMovieDetail = async (id) => {
	const response = await apiTVMaze.get(`movie-detail/${id}`)
	return response.data
}


