import React from "react"

const LoginContext = React.createContext({
	isLogged: false,
	dataUser: {},
	login: () => {},
	logout: () => {},
})

LoginContext.displayName = "LoginContext"

export default LoginContext
