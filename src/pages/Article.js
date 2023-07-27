import { Link, useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import Preloader from "../UI/Preloader"
import noFoto from "../images/no-image-available.png"
import data from "../data"
import axios from "axios"
import "../styles/article.css"

const API_KEY = process.env.REACT_APP_API_KEY
const HTTPS_URL = `https://newsapi.org/v2/everything?q=bitcoin&from=2023-06-26&sortBy=publishedAt&apiKey=${API_KEY}`

function Article() {
	const [dateArticle, setDateArticle] = useState(null)
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
		const article = data.find(article => article.title === id)
		setDateArticle(article)
	}, [id])

	if (!dateArticle) {
		return <Preloader />
	}

	const { title, author, description, source, urlToImage, url, publishedAt } =
		dateArticle
	const date = new Date(publishedAt).toLocaleString()

	return (
		<article className='article'>
			<h1 className='title-section title-section-article'>Artykuł</h1>
			<Link to='/'>Home</Link> / <Link to='/blog'>blog</Link> / <span>{title}</span>
			<div className='img'>
				{urlToImage ? (
					<img src={urlToImage} alt={title} />
				) : (
					<img src={noFoto} alt='brak zdjęcia' />
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
			<a href={url}>{`>> Zobacz cały artykuł`}</a>
		</article>
	)
}

export default Article
