import axios from 'axios';

const usuarioAPI = axios.create({
	baseURL: 'http://localhost:3001'
})

export const getUsuarios = async () => {
	const res = await usuarioAPI.get('/usuarios')
}

