import { useNavigate } from "react-router-dom"
import { useContext, useState } from "react"
import LoginContext from "../context/loginContext"
import "../styles/form.css"

function Login() {
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")
	const [messageSent, setMessageSent] = useState(false)
	const [errorEmail, setErrorEmail] = useState("")
	const [errorPassword, setErrorPassword] = useState("")
	const [errorRepeatPassword, setErrorRepeatPassword] = useState("")
	const logged = useContext(LoginContext)
	const navigate = useNavigate()

	const handleLogin = e => {
		e.preventDefault()
		navigate("/blog")
		logged.login()
	}

	return (
		<div>
			<h1 className='title-section'>Zaloguj się</h1>
			<form className='login-form' action=''>
				<label htmlFor='email'>Email </label>
				<input id='email' className='form-input' type='email' />
				<p className='error'>{errorEmail}</p>
				<label htmlFor='password'>Hasło </label>
				<input id='password' className='form-input' type='text' />
				<p className='error'>{errorPassword}</p>
				<input className='submit' onClick={handleLogin} type='submit' value='Zaloguj' />
			</form>
		</div>
	)
}

export default Login
