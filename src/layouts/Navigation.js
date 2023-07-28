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
		<li className='li-nav' key={link.name}>
			<NavLink
				className='link-nav'
				to={link.path}
				onClick={() => setActiveNav(false)}
			>
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
					<li>
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
