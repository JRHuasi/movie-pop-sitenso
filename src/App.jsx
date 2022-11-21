// import { useState } from 'react'
import Portada from './components/Portada'
import LoginButton from './components/LoginButton'
// import Profile from './components/Profile'
import LogoutButton from './components/LogoutButton'

// import { useAuth0 } from '@auth0/auth0-react'
import Nav from './components/Nav'



function App() {
  // const [count, setCount] = useState(0)
	
	// const { isAuthenticated } = useAuth0();

  return (
    <div className='container'>
			<Nav />
			<Portada/>
		</div>
  )
}

export default App
