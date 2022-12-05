import Nav from "./Nav"

function Portada() {
	return (
		<>
			<Nav/>
			<div className="portada">
				<img src="/assets/imagenes/logo.png" alt=""/>
				<div>MoviePop!</div>
			</div>
		</>
	)
}

export default Portada