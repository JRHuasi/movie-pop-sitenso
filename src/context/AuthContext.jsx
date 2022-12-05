import { createContext, useState } from "react";

export const AuthContext = createContext()

export function AuthContextProvider(props) {
	const [autenticated, setAutenticated] = useState(false)
	const [token, setToken] = useState("")

	const authStatus = (tok) => {
		setAutenticated(tok!==undefined?true:false)		
		localStorage.setItem('token', tok);
	}

	const isActive = () => {
		if(localStorage.getItem('token') === null || localStorage.getItem('token') === ""){
			setAutenticated(false)
			setToken("")
		}else {
			setAutenticated(true)
			setToken(localStorage.getItem('token'))
		}
	}

	return (
		<AuthContext.Provider value={
			{authStatus, autenticated, isActive}
		}>
			{props.children}
		</AuthContext.Provider>
	)
}
