import { Link } from "react-router-dom"
import "../styles/navigation.css"

function Footer() {
	const currentYear = new Date().getFullYear()
	return (
		<div>
			<h2>
				&copy; {currentYear}
				<Link style={{fontSize: 24}} className='logo-nav' to='/'>Blog<span>Goo</span>
				</Link>
			</h2>
		</div>
	)
}

export default Footer
