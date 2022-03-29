import React,{ useState } from 'react'
import { useEffect } from 'react'

const authContext = React.createContext({
	// email: '',
	token: '',
	isLoggedIn: false,
	login: (token) => {},
	logout: () => {},
})

export const AuthContextProvider = (props) => {

	const [token, setToken] = useState(null)

    useEffect(()=> {
        const initialToken = localStorage.getItem('@token-online-store')
        setToken(initialToken)
    },[])
	const userIsLoggedIn = !!token
	const loginHandler = (token) => {
		setToken(token)
        localStorage.setItem('@token-online-store',token)
	}

	const logoutHandler = () => {
		setToken(null)
        localStorage.removeItem('@token-online-store')
	}

	const contextValue = {
		token: token,
		isLoggedIn: userIsLoggedIn,
		login: loginHandler,
		logout: logoutHandler,
	}

    return(
        <authContext.Provider value={contextValue}>
            {props.children}
        </authContext.Provider>
    )
}
export default authContext