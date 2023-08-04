import { Route, Routes } from "react-router-dom"
import Home from "../pages/Home"
import Blog from "../pages/Blog"
import Article from "../pages/Article"
import Contact from "../pages/Contact"
import Login from "../pages/Login"
import PasswordReset from "../pages/PasswordReset"
import UserPanel from "../pages/UserPanel/UserPanel"
import Registration from "../pages/Registration"
import ErrorPage from "../pages/ErrorPage"

function Page() {
	return (
		<Routes>
			<Route path='/' element={<Home />} />
			<Route path='/blog' element={<Blog />} />
			<Route path='/blog/:id' element={<Article />} />
			<Route path='/kontakt' element={<Contact />} />
			<Route path='/login' element={<Login />} />
			<Route path='/reset-hasla' element={<PasswordReset />} />
			<Route path='/panel-uzytkownika/*' element={<UserPanel />} />
			<Route path='/rejestracja' element={<Registration />} />
			<Route path='*' element={<ErrorPage />} />
		</Routes>
	)
}

export default Page
