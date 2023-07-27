import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import LoginContext from "../context/loginContext"
import "../styles/form.css"

function Registration() {
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")
	const [repeatPassword, setRepeatPassword] = useState("")
	const [messageSent, setMessageSent] = useState(false)
	const [errorEmail, setErrorEmail] = useState("")
	const [errorPassword, setErrorPassword] = useState("")
	const [errorRepeatPassword, setErrorRepeatPassword] = useState("")
	const logged = useContext(LoginContext)
	const navigate = useNavigate()

	const handleLogin = e => {
		e.preventDefault()
		navigate("/login")
	}
	return (
		<div>
			<h1 className='title-section'>Rejestracja</h1>
			<form className='login-form' action=''>
				<label htmlFor='email'>Email </label>
				<input id='email' className='form-input' type='email' />
				<p className='error'>{errorEmail}</p>
				<label htmlFor='password'>Hasło </label>
				<input id='password' className='form-input' type='text' />
				<p className='error'>{errorPassword}</p>
				<label htmlFor='repeatPassword'>Powtrz Hasło </label>
				<input className='form-input' type='text' id='repeatPassword' />
				<p className='error'>{errorRepeatPassword}</p>
				<input
					className={`submit `}
					onClick={handleLogin}
					type='submit'
					value='Rejestruj'
				/>
			</form>
		</div>
	)
}

export default Registration
