
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import { Suspense } from 'react'
import Portada from './components/Portada'
import Profile from './components/Profile'
import LogoutButton from './components/LogoutButton'

import Nav from './components/Nav'
import Search from './components/Search'
import Detalle from './components/Detalle'

function App() {
  return (
		<div className='container'>
			<Router>
				<Nav />
				<Routes>
					<Route path="/" element={<Portada/>}/>
					<Route path="/search" element={<Search />}/>
					<Route path="/profile" element={<Profile/>}/>
					<Route path="/detalle/:id" element={<Detalle />}/>
				</Routes>
			</Router>			
		</div>
  )
}

export default App
