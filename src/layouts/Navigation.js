import { NavLink, Link } from "react-router-dom"
import { useContext, useState } from "react"
import LoginContext from "../context/loginContext"
import "../styles/navigation.css"

const navigationItems = [
	{ name: "Start", to: "/" },
	{ name: "Blog", to: "/blog" },
	{ name: "Kontakt", to: "/kontakt" },
]

function Navigation() {
	const [activeNav, setActiveNav] = useState(false)
	const isLogged = useContext(LoginContext)

	const menu = navigationItems.map(link => (
		<li className='li-nav' key={link.name}>
			<NavLink className='link-nav' to={link.to} onClick={() => setActiveNav(false)}>
				{link.name}
			</NavLink>
		</li>
	))

	return (
		<nav className='box-nav'>
			<div className='header-nav'>
				<h2>
					<Link onClick={() => setActiveNav(false)} className='logo-nav' to='/'>
						Loo<span>Go</span>
					</Link>
				</h2>
				<div>
					{activeNav ? (
						<i
							className='fa-solid icon-nav fa-xmark activeIcon '
							onClick={() => setActiveNav(!activeNav)}
						></i>
					) : (
						<i
							className='fa-solid icon-nav fa-bars activeIcon'
							onClick={() => setActiveNav(!activeNav)}
						></i>
					)}
				</div>
			</div>
			<ul className={`list-nav ${activeNav ? "list-nav-active" : null}`}>
				{menu}
				<li className='li-nav'>
					<NavLink
						onClick={() => setActiveNav(false)}
						className='link-nav'
						to={isLogged.isLogged ? "/panel-uzytkownika" : "/login"}
					>
						{isLogged.isLogged ? "Panel" : "Logowanie"}
					</NavLink>
				</li>
				{isLogged.isLogged || (
					<li className='li-nav'>
						<NavLink
							onClick={() => setActiveNav(false)}
							className='link-nav'
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
