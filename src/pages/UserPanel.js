import { useNavigate } from "react-router-dom"
import { useContext } from "react"
import LoginContext from "../context/loginContext"

function UserPanel() {
	const logged = useContext(LoginContext)
	const navigate = useNavigate()

	const handleLogin = e => {
		e.preventDefault()
		logged.logout()
		navigate("/login")
	}
	return (
		<div>
			<h1 className='title-section'>Panel Użytkownika</h1>

			<button onClick={handleLogin}>Wyloguj</button>
		</div>
	)
}

export default UserPanel
