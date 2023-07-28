import { BrowserRouter as Router } from "react-router-dom"
import { useEffect, useState } from "react"
import LoginContext from "../context/loginContext"
import Header from "./Header"
import Navigation from "./Navigation"
import Page from "./Page"
import Footer from "./Footer"
import "../styles/App.css"

function App() {
	const [isLogged, setIsLogged] = useState(false)
	useEffect(() => {
		const checkUser = () => {
			const tokenData = JSON.parse(window.localStorage.getItem("token-data"))

			// const tokenData = window.localStorage.getItem("token-data")
			if (tokenData) {
				setIsLogged(true)
			} else {
				setIsLogged(false)
			}
		}
		checkUser()
	}, [])

	return (
		<LoginContext.Provider
			value={{
				isLogged: isLogged,
				login: tokenData => {
					setIsLogged(true)
					window.localStorage.setItem("token-data", JSON.stringify(tokenData))
				},
				logout: () => {
					setIsLogged(false)
					window.localStorage.removeItem("token-data")
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
