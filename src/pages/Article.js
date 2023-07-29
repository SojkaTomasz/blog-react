import { Link, useParams } from "react-router-dom"
import { useContext, useEffect, useState } from "react"
import LoginContext from "../context/loginContext"
import Preloader from "../UI/Preloader"
import noPhoto from "../images/no-image-available.jpg"
import articleData from "../data/articleData"
// import axios from "axios"
import "../styles/article.css"

const API_KEY = process.env.REACT_APP_API_KEY
const HTTPS_URL = `https://newsapi.org/v2/everything?q=bitcoin&from=2023-06-26&sortBy=publishedAt&apiKey=${API_KEY}`

function Article() {
	const [dateArticle, setDateArticle] = useState(null)
	const loginContext = useContext(LoginContext)
	const { id } = useParams()

	useEffect(() => {
		// axios
		// 	.get(HTTPS_URL)
		// 	.then(res => {
		// 		const article = res.data.articles.find(article => article.title === id)
		// 		setDateArticle(article)
		// 	})
		// 	.catch(error => {
		// 		console.error("Error fetching data:", error)
		// 	})
		const article = articleData.find(article => article.title === id)
		setDateArticle(article)
	}, [id])

	if (!dateArticle) {
		return <Preloader />
	}

	const { title, author, description, source, urlToImage, url, publishedAt } =
		dateArticle
	const date = new Date(publishedAt).toLocaleString()

	if (!loginContext.isLogged) {
		return (
			<>
				<h1 className='title-section'>Blog</h1>
				<p>Musisz się zalogować aby zobaczyć treść</p> <br />
				<Link className='link-article' to='/login'>{`>> Logowanie`}</Link>
				<Link className='link-article' to='/rejestracja'>{`>> Rejestracja`}</Link>
			</>
		)
	} else {
		return (
			<article className='box-article'>
				<h1 className='title-section title-section-article'>Artykuł</h1>
				<Link className='link-article' to='/blog'>{`<< Powrót do bloga`}</Link>
				<div className='box-img'>
					{urlToImage ? (
						<img className='img-article' src={urlToImage} alt={title} />
					) : (
						<img className='img-article' src={noPhoto} alt='brak zdjęcia' />
					)}
				</div>
				<h2 className='title-article'>{title}</h2>
				<p>
					<strong>Autor:</strong> <em>{author}</em>
				</p>
				<p>
					<strong> Data publikacji:</strong> {date}
				</p>
				<p>
					<strong> Żródło:</strong> {source.name}
				</p>
				<p>{description}</p>
				<a
					className='link-article'
					style={{ textAlign: "end" }}
					href={url}
				>{`Zobacz cały artykuł >> `}</a>
			</article>
		)
	}
}

export default Article
