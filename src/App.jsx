
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Suspense } from 'react'
import Portada from './components/Portada'
import LoginButton from './components/LoginButton'
import Profile from './components/Profile'
import LogoutButton from './components/LogoutButton'

// import { useAuth0 } from '@auth0/auth0-react'
import Nav from './components/Nav'
import Search from './components/Search'
import Detalle from './components/Detalle'



function App() {
  // const [count, setCount] = useState(0)
	
	// const { isAuthenticated } = useAuth0();

  return (
		<div className='container'>
			<Router>
				<Nav />
				<Suspense>
					<Routes>
						<Route path="/" element={<Portada/>}/>
						<Route path="/search" element={<Search />}/>
						<Route path="/profile" element={<Profile/>}/>
						<Route path="/detalle/:id" element={<Detalle />}/>
					</Routes>
				</Suspense>
			</Router>			
		</div>
  )
}

export default App
