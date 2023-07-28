import { useNavigate } from "react-router-dom"
import { useContext, useState } from "react"
import LoginContext from "../context/loginContext"

function UserPanel() {
	const data = JSON.parse(window.localStorage.getItem("token-data"))
	const emailData = data.email
	const isLogged = useContext(LoginContext)
	const [email, setEmail] = useState(emailData)
	const navigate = useNavigate()

	const handleLogin = e => {
		e.preventDefault()
		isLogged.logout()
		navigate("/login")
	}

	return (
		<div>
			<h1 className='title-section'>Panel Użytkownika</h1>
			<input
				type='text'
				name=''
				id=''
				value={email}
				onChange={e => setEmail(e.target.value)}
			/>
			<br />
			<br />
			<button className="btn-form" onClick={handleLogin}>Wyloguj</button>
		</div>
	)
}

export default UserPanel
