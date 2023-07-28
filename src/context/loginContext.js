import React from "react"

const LoginContext = React.createContext({
	isLogged: false,
	login: () => {},
	logout: () => {},
})

LoginContext.displayName = "LoginContext"

export default LoginContext
