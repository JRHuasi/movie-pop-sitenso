import { AuthContext } from '../context/AuthContext'
import { login, register, profile } from '../api/axios'
import { useState, useContext } from 'react'
import { useNavigate} from 'react-router-dom'


function Login() {

	const {authStatus} = useContext(AuthContext)

	const [textoAuxiliar, setTextoAuxiliar] = useState("")
	const [isLogin, setIsLogin] = useState(true)
	const [name, setName] = useState("")
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")
	const navigate = useNavigate()

	const handleLogin = (e) => {
		e.preventDefault()
		login(email, password)
			.then((res) =>{
				authStatus(res.access_token)
				const datos = profile()
				.then(data => {
					console.log({data})
					localStorage.setItem('id', data.id)
					localStorage.setItem('name', data.name)
					localStorage.setItem('email', data.email)
				})
				navigate("/")
			})
			.then(error => {
				console.log({error})
			})
	}

	const handleRegister = (e) => {
		e.preventDefault()
		register(name, email, password)
			.then((data) =>{
				console.log("REGISTER", data)
			})
	}

  return (
    <div id="login">
			<div className="titulo">
				<img src="/assets/imagenes/logo.png" alt=""/>
				<span>Bienvendio a MoviePop!</span>			
			</div>
			<h2 className={isLogin?'active':'nonactive'} onClick={() => setIsLogin(true)}> ingresar </h2>
			<h2 className={!isLogin?'active':'nonactive'}  onClick={() => setIsLogin(false)}> registrate </h2>
			{isLogin 
				?
				(
					<form onSubmit={handleLogin}>
						<label>Email</label>
						<input 
							type="email" 
							className="text" 
							name="email" 
							onChange={(e) => setEmail(e.target.value)}
						/>
						<label>Contraseña</label>
						<input 
							type="password" 
							className="text" 
							name="password"
							onChange={(e) => setPassword(e.target.value)}
						/>
						<p>{textoAuxiliar}</p>
						<button className="signin" type="submit">
							Entrar
						</button>
						<hr/>
						<a href=".">¿Olvidaste tu contraseña?</a>
						<div className="contacto">
							¿Problemas para ingresar? Escribinos a:<br/>
							administrador@moviepop.com
						</div>
					</form>
				)
				: 
				(
					<form onSubmit={handleRegister}>
						<label>Nombre</label>
						<input 
							type="text" 
							className="text" 
							name="name" 
							onChange={(e) => setName(e.target.value)}
						/>
						<label>Email</label>
						<input 
							type="email" 
							className="text" 
							name="email" 
							onChange={(e) => setEmail(e.target.value)}
						/>
						<label>Contraseña</label>
						<input 
							type="password" 
							className="text" 
							name="password"
							onChange={(e) => setPassword(e.target.value)}
						/>
						<p>{textoAuxiliar}</p>
						<button className="signin" type="submit">
							Entrar
						</button>
					</form>
				)
			}
    </div>
  )
}

export default Login
