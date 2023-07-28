import { NavLink, Link } from "react-router-dom"
import { useContext, useState } from "react"
import LoginContext from "../context/loginContext"
import "../styles/navigation.css"

const list = [
	{ name: "Start", path: "/" },
	{ name: "Blog", path: "/blog" },
	{ name: "Kontakt", path: "/kontakt" },
]

function Navigation() {
	const [activeNav, setActiveNav] = useState(false)
	const isLogged = useContext(LoginContext)

	const menu = list.map(link => (
		<li key={link.name}>
			<NavLink className='linkNav' to={link.path} onClick={() => setActiveNav(false)}>
				{link.name}
			</NavLink>
		</li>
	))

	return (
		<nav className='nav'>
			<div className='headerNav'>
				<h2>
					<Link onClick={() => setActiveNav(false)} className='logo' to='/'>
						Loo<span>Go</span>
					</Link>
				</h2>
				<div>
					{activeNav ? (
						<i
							className='fa-solid fa-xmark activeIcon '
							onClick={() => setActiveNav(!activeNav)}
						></i>
					) : (
						<i
							className='fa-solid fa-bars activeIcon'
							onClick={() => setActiveNav(!activeNav)}
						></i>
					)}
				</div>
			</div>
			<ul className={`ulListNav ${activeNav ? "ulListNavActive" : null}`}>
				{menu}
				<li>
					<NavLink
						onClick={() => setActiveNav(false)}
						className='linkNav'
						to={isLogged.isLogged ? "/panel-uzytkownika" : "/login"}
					>
						{isLogged.isLogged ? "Panel" : "Logowanie"}
					</NavLink>
				</li>
				{isLogged.isLogged || (
					<li>
						<NavLink
							onClick={() => setActiveNav(false)}
							className='linkNav'
							to='/rejestracja'
						>
							Rejestracja
						</NavLink>
					</li>
				)}
			</ul>
		</nav>
	)
}

export default Navigation
