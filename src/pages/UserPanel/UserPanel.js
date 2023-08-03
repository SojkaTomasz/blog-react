import { useContext, useEffect } from "react"
import { Route, Routes, useNavigate, NavLink, Link } from "react-router-dom"
import LoginContext from "../../context/loginContext"
import Settings from "./Settings"
import AddArticle from "./AddArticle"
import AllArticles from "./AllArticles"
import "../../styles/userPanel.css"

const navigationItems = [
	{ name: "Wszystkie artykuły", to: "wszystkie-artykuły" },
	{ name: "Dodaj artykuł", to: "dodaj-artykul" },
	{ name: "Edytuj profil", to: "ustawienia" },
]

function UserPanel() {
	const loginContext = useContext(LoginContext)
	const navigate = useNavigate()

	const handleLogin = e => {
		e.preventDefault()
		loginContext.logout()
		navigate("/login")
	}

	useEffect(() => {
		navigate("/panel-uzytkownika/wszystkie-artykuły")
		if (!loginContext.isLogged) {
			navigate("/login")
		}
	}, [loginContext.isLogged])

	return (
		<div>
			<h1 id='pagination' className='title-section'>
				Panel Użytkownika
			</h1>
			<ul className='box-nav-user-panel'>
				{navigationItems.map((item, id) => (
					<li key={id} className='item-nav-user-panel'>
						<NavLink
							className={({ isActive }) =>
								isActive ? "active-link-user-panel link-user-panel" : "link-user-panel"
							}
							to={item.to}
						>
							{item.name}
						</NavLink>
					</li>
				))}
				<li className='item-nav-user-panel'>
					<Link className='link-user-panel' onClick={handleLogin}>
						Wyloguj
					</Link>
				</li>
			</ul>
			<Routes>
				<Route path='ustawienia' element={<Settings />} />
				<Route path='wszystkie-artykuły' element={<AllArticles />} />
				<Route path='dodaj-artykul' element={<AddArticle />} />
			</Routes>
		</div>
	)
}

export default UserPanel
