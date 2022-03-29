import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { AuthContextProvider } from './store/authContext'
import './index.css'
import App from './App'
// import Provider 
ReactDOM.render(
	<AuthContextProvider>
		<BrowserRouter>
			<App />
		</BrowserRouter>,
	</AuthContextProvider>,

	document.getElementById('root'),
)
