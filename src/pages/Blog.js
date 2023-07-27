import { useEffect, useReducer, useContext } from "react"
import { initialState, reducer } from "../reducer/reducerBlog"
import { Link } from "react-router-dom"
import LoginContext from "../context/loginContext"
import Pagination from "../components/Blogs/Pagination"
import Filter from "../components/Blogs/Filter"
import Preloader from "../UI/Preloader"
import data from "../data"
import axios from "axios"
import Articles from "./Articles"
import "../styles/blog.css"

const API_KEY = process.env.REACT_APP_API_KEY
const HTTPS_URL = `https://newsapi.org/v2/everything?q=bitcoin&from=2023-06-26&sortBy=publishedAt&apiKey=${API_KEY}`

const Blog = () => {
	const [state, dispatch] = useReducer(reducer, initialState)
	const toPage = state.currentPage * state.blogsPerPage
	const fromPage = toPage - state.blogsPerPage
	const logged = useContext(LoginContext)

	useEffect(() => {
		dispatch({ type: "setCurrentPage", currentPage: 1 })
	}, [state.blogsPerPage, state.valueSearch, state.sort])

	useEffect(() => {
		// axios
		// 	.get(HTTPS_URL)
		// 	.then(res => {
		// 		dispatch({ type: "setState", state: res.data.articles })
		// 		dispatch({ type: "setGetData" })
		// 	})
		// 	.catch(error => {
		// 		console.error("Error fetching data:", error)
		// 	})
		dispatch({ type: "setState", state: data })
		dispatch({ type: "setGetData" })
	}, [])

	const changePage = (number, operator) => {
		operator === "+"
			? dispatch({ type: "setCurrentPage", currentPage: state.currentPage + number })
			: dispatch({ type: "setCurrentPage", currentPage: state.currentPage - number })
	}

	useEffect(() => {
		let sortedState = [...state.searchState]
		sortedState.map(item => Date.parse(item.publishedAt))
		if (state.sort === "a-z") {
			sortedState.sort((a, b) => a.title.localeCompare(b.title))
		} else if (state.sort === "z-a") {
			sortedState.sort((a, b) => b.title.localeCompare(a.title))
		} else if (state.sort === "latest") {
			sortedState.sort((a, b) => b.publishedAt.localeCompare(a.publishedAt))
		} else if (state.sort === "oldest") {
			sortedState.sort((a, b) => a.publishedAt.localeCompare(b.publishedAt))
		}
		dispatch({ type: "setSearchState", searchState: sortedState })
	}, [state.sort])

	useEffect(() => {
		const filterResults = () => {
			const filteredItems = state.state.filter(item =>
				item.title.toLowerCase().includes(state.valueSearch.toLowerCase())
			)
			dispatch({ type: "setSearchState", searchState: filteredItems })
		}
		filterResults()
	}, [state.valueSearch, state.state])

	const pagination = (
		<Pagination
			click={changePage}
			lengthPage={state.searchState.length}
			fromPage={fromPage}
			toPage={toPage}
		/>
	)
	const articles = state.searchState.map((blog, id) => (
		<Articles key={id} id={id} {...blog} valueSearch={state.valueSearch} />
	))

	if (!logged.logged) {
		return (
			<>
				<h1 className='title-section'>Blog</h1>
				<p>Musisz się zalogować aby zobaczyć treść</p> <br />
				<Link className='link' to='/login'>{`>> Logowanie`}</Link>
				<br />
				<Link className='link' to='/rejestracja'>{`>> Rejestracja`}</Link>
			</>
		)
	} else {
		return (
			<>
				<Link to='/'>Home</Link> / <span>blog</span>
				<h1 className='title-section'>Blog</h1>
				{state.getData ? (
					<div>
						<Filter
							dispatch={dispatch}
							blogsPerPage={state.blogsPerPage}
							valueSearch={state.valueSearch}
							sort={state.sort}
						/>
						{pagination}
						<div>
							{state.searchState.length ? (
								articles.slice(fromPage, toPage)
							) : (
								<p style={{ textAlign: "center", color: "tomato" }}>
									Nie znaleziono żandego wpisu!
								</p>
							)}
						</div>
						{pagination}
					</div>
				) : (
					<Preloader />
				)}
			</>
		)
	}
}

export default Blog
