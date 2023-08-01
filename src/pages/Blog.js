import { useEffect, useReducer, useContext } from "react"
import { initialState, reducer } from "../reducer/reducerBlog"
import { firebaseConfig } from "../firebase"
import { Link } from "react-router-dom"
import BlogArticles from "../components/Blog/BlogArticles"
import Pagination from "../components/Blog/Pagination"
import Filter from "../components/Blog/Filter"
import LoginContext from "../context/loginContext"
import Preloader from "../UI/Preloader"
import axios from "axios"
import "../styles/blog.css"

const HTTPS_URL = `${firebaseConfig.databaseURL}/articles.json`

const Blog = () => {
	const [state, dispatch] = useReducer(reducer, initialState)
	const toPage = state.currentPage * state.blogsPerPage
	const fromPage = toPage - state.blogsPerPage
	const isLogged = useContext(LoginContext)

	useEffect(() => {
		dispatch({ type: "setCurrentPage", currentPage: 1 })
	}, [state.blogsPerPage, state.valueSearch, state.sort])

	useEffect(() => {
		fetchArticles()
	}, [])

	const fetchArticles = async () => {
		try {
			const res = await axios.get(`${HTTPS_URL}`)
			const newArticles = []
			for (const key in res.data) {
				newArticles.push({ ...res.data[key], id: key })
			}
			const sortedData = newArticles.sort((a, b) =>
				b.datePublication.localeCompare(a.datePublication)
			)
			dispatch({ type: "setState", state: sortedData })
			dispatch({ type: "setGetData" })
		} catch (ex) {
			console.log(ex)
		}
	}

	const changePage = (number, operator) => {
		operator === "+"
			? dispatch({ type: "setCurrentPage", currentPage: state.currentPage + number })
			: dispatch({ type: "setCurrentPage", currentPage: state.currentPage - number })
	}

	useEffect(() => {
		let sortedState = [...state.searchState]
		sortedState.map(item => Date.parse(item.datePublication))
		if (state.sort === "a-z") {
			sortedState.sort((a, b) => a.title.localeCompare(b.title))
		} else if (state.sort === "z-a") {
			sortedState.sort((a, b) => b.title.localeCompare(a.title))
		} else if (state.sort === "latest") {
			sortedState.sort((a, b) => b.datePublication.localeCompare(a.datePublication))
		} else if (state.sort === "oldest") {
			sortedState.sort((a, b) => a.datePublication.localeCompare(b.datePublication))
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
	const blogArticles = state.searchState.map(blog => (
		<BlogArticles key={blog.id} {...blog} valueSearch={state.valueSearch} />
	))

	if (!isLogged.isLogged) {
		return (
			<>
				<h1 className='title-section'>Blog</h1>
				<p>Musisz się zalogować aby zobaczyć treść</p> <br />
				<Link className='link-blog' to='/login'>{`>> Logowanie`}</Link>
				<Link className='link-blog' to='/rejestracja'>{`>> Rejestracja`}</Link>
			</>
		)
	} else {
		return (
			<>
				<h1 id='pagination' className='title-section'>
					Blog
				</h1>
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
								blogArticles.slice(fromPage, toPage)
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
