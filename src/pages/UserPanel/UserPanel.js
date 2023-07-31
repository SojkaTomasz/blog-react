import { useContext, useEffect } from "react"
import { Route, Routes, useNavigate, NavLink } from "react-router-dom"
import LoginContext from "../../context/loginContext"
import Settings from "./Settings"
import AddArticle from "./AddArticle"
import "../../styles/userPanel.css"

function UserPanel() {
	const loginContext = useContext(LoginContext)
	const navigate = useNavigate()

	const handleLogin = e => {
		e.preventDefault()
		loginContext.logout()
		navigate("/login")
	}

	useEffect(() => navigate("/panel-uzytkownika/ustawienia"), [])

	return (
		<div>
			<h1 className='title-section'>Panel Użytkownika</h1>
			<ul className='box-pagination-user-panel'>
				<li className='items-link-user-panel'>
					<NavLink
						className={({ isActive }) =>
							isActive ? "active-link-user-panel link-user-panel" : "link-user-panel"
						}
						to='ustawienia'
					>
						Edytuj profil
					</NavLink>
				</li>
				<li className='items-link-user-panel'>
					<NavLink
						className={({ isActive }) =>
							isActive ? "active-link-user-panel link-user-panel" : "link-user-panel"
						}
						to='dodaj-artykul'
					>
						Dodaj Artykuł
					</NavLink>
				</li>
				<li className='items-link-user-panel'>
					<a className='link-user-panel' onClick={handleLogin}>
						Wyloguj
					</a>
				</li>
			</ul>
			<Routes>
				<Route path='ustawienia' element={<Settings />} />
				<Route path='dodaj-artykul' element={<AddArticle />} />
			</Routes>
		</div>
	)
}

export default UserPanel
