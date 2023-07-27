import { BrowserRouter as Router } from "react-router-dom"
import { useState } from "react"
import LoginContext from "../context/loginContext"
import Header from "./Header"
import Navigation from "./Navigation"
import Page from "./Page"
import Footer from "./Footer"
import "../styles/App.css"

function App() {
	const [logged, setLogged] = useState(false)

	return (
		<LoginContext.Provider
			value={{
				logged: logged,
				login: () => {
					setLogged(true)
				},
				logout: () => {
					setLogged(false)
				},
			}}
		>
			<Router>
				<div className='app'>
					<header className='header'>{<Header />}</header>
					<main className='main'>
						<aside className='aside'>{<Navigation />}</aside>
						<section className='section'>{<Page />}</section>
					</main>
					<footer className='footer'>{<Footer />}</footer>
				</div>
			</Router>
		</LoginContext.Provider>
	)
}

export default App
