import React from "react"

const LoginContext = React.createContext({
	isLogged: false,
	dateUser: {},
	login: () => {},
	logout: () => {},
})

LoginContext.displayName = "LoginContext"

export default LoginContext
