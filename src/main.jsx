import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { Auth0Provider } from '@auth0/auth0-react'
import './styles/sytles.scss'
import { SearchContextProvider } from './context/SearchContext'
import { AuthContextProvider } from './context/AuthContext'

const clientID = import.meta.env.VITE_AUTH0_CLIENT_ID
const domain = import.meta.env.VITE_AUTH0_DOMAIN

console.log(clientID, {domain})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
		<Auth0Provider
			clientId={clientID}
			domain={domain}
			redirectUri={window.location.origin}
		>
			<AuthContextProvider>
				<SearchContextProvider>
					<App />
				</SearchContextProvider>
			</AuthContextProvider>
		</Auth0Provider>
  </React.StrictMode>
)
