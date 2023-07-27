import React from "react"

const LoginContext = React.createContext({
	logged: false,
	login: () => {},
	logout: () => {},
})

LoginContext.displayName = "LoginContext"

export default LoginContext
