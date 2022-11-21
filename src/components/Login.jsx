
import {useState} from 'react'

function Login() {

	const [textoAuxiliar, setTextoAuxiliar] = useState("")

  return (
    <div id="login">
			<div className="titulo">
				<img src="/assets/imagenes/logo.png" alt=""/>
				<span>Bienvendio a MoviePop!</span>			
			</div>
			<h2 className="active"> ingresar </h2>
			<h2 className="nonactive"> registrate </h2>
			<form>
				<label>Usuario</label>
				<input type="text" className="text" name="username" />
				<label>Contraseña</label>
				<input type="password" className="text" name="password"/>
				<input type="checkbox" id="checkbox-1-1" className="custom-checkbox" />
				<label htmlFor="checkbox-1-1">Mantenerme conectado</label>
				<p>{textoAuxiliar}</p>
				<button className="signin" type="submit">
					Entrar
				</button>
				<hr/>
				<a href=".">¿Olvidaste tu contraseña?</a>
				<div className="contacto">
					Si tenés problemas para ingresar escribinos a:<br/>
					administrador@moviepop.com
				</div>
			</form>
    </div>
  )
}

export default Login
