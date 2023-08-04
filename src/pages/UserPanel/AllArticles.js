import { useReducer, useState, useEffect } from "react"
import { initialState, reducer } from "../../reducer/reducerBlog"
import { firebaseConfig } from "../../firebase"
import DelateArticleContext from "../../context/delateArticleContext"
import EditArticleContext from "../../context/editArticleContext"
import UserPanelArticles from "../../components/UserPanel/AllArticles/UserPanelArticles"
import PopUpDeleteArticle from "../../components/UserPanel/AllArticles/PopUpDeleteArticle"
import PopUpEditArticle from "../../components/UserPanel/AllArticles/PopUpEditArticle"
import Pagination from "../../components/Blog/Pagination"
import Filter from "../../components/Blog/Filter"
import Preloader from "../../UI/Preloader"
import axios from "axios"

const HTTPS_URL = `${firebaseConfig.databaseURL}/articles.json`

function AllArticles() {
	const [state, dispatch] = useReducer(reducer, initialState)
	const [showPopUpDelete, setShowPopUpDelete] = useState(false)
	const [acceptDelate, setAcceptDelate] = useState(false)
	const [idArticleDelate, setIdArticleDelate] = useState("")
	const [showPopUpEdit, setShowPopUpEdit] = useState(false)
	const [articleDataEdit, setArticleDataEdit] = useState({})
	const [idArticleEdit, setIdArticleEdit] = useState("")
	const toPage = state.currentPage * state.blogsPerPage
	const fromPage = toPage - state.blogsPerPage

	useEffect(() => {
		dispatch({ type: "setCurrentPage", currentPage: 1 })
	}, [state.blogsPerPage, state.valueSearch, state.sort])

	useEffect(() => {
		fetchArticles()
	}, [])

	const fetchArticles = async () => {
		try {
			const res = await axios.get(HTTPS_URL)
			let allArticles = []
			for (const key in res.data) {
				allArticles.push({ ...res.data[key], id: key })
			}
			allArticles.sort((a, b) => b.datePublication.localeCompare(a.datePublication))
			dispatch({ type: "setState", state: allArticles })
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

	const allArticle = state.searchState.map(article => (
		<UserPanelArticles
			key={article.id}
			{...article}
			valueSearch={state.valueSearch}
		/>
	))

	return (
		<DelateArticleContext.Provider
			value={{
				showPopUpDelete: showPopUpDelete,
				acceptDelate: acceptDelate,
				idArticleDelate: idArticleDelate,
				showPopUpFunction: id => {
					setIdArticleDelate(id)
					setShowPopUpDelete(!showPopUpDelete)
				},
			}}
		>
			<EditArticleContext.Provider
				value={{
					showPopUpEdit: showPopUpEdit,
					articleDataEdit: articleDataEdit,
					idArticleEdit: idArticleEdit,
					showPopUpEditFunction: id => {
						setIdArticleEdit(id)
						setShowPopUpEdit(!showPopUpEdit)
					},
				}}
			>
				{state.getData ? (
					<div>
						<Filter
							dispatch={dispatch}
							blogsPerPage={state.blogsPerPage}
							valueSearch={state.valueSearch}
							sort={state.sort}
						/>
						{pagination}
						<div>{allArticle.slice(fromPage, toPage)}</div>
						{pagination}
						{showPopUpDelete && <PopUpDeleteArticle />}
						{showPopUpEdit && <PopUpEditArticle />}
					</div>
				) : (
					<Preloader />
				)}
			</EditArticleContext.Provider>
		</DelateArticleContext.Provider>
	)
}

export default AllArticles
