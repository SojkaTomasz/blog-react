import { useContext, useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import LoginContext from "../context/loginContext"
import { firebaseConfig } from "../firebase"
import { slugify } from "transliteration"
import Preloader from "../UI/Preloader"
import Comments from "../components/Blog/Comments/Comments"
import axios from "axios"
import noPhoto from "../images/no-image-available.jpg"
import user from "../images/user.png"
import "../styles/article.css"

const HTTPS_URL = `${firebaseConfig.databaseURL}/articles.json`

function Article() {
	const [dataArticle, setDateArticle] = useState(null)
	const loginContext = useContext(LoginContext)
	const { id } = useParams()

	useEffect(() => {
		likArticle()
	}, [])

	const likArticle = async () => {
		try {
			const res = await axios.get(`${HTTPS_URL}`)
			const allArticles = []
			for (const key in res.data) {
				allArticles.push({ ...res.data[key], id: key })
			}
			const article = allArticles.find(
				article =>
					slugify(article.title.replaceAll(" ", "-") + article.id.toLowerCase()) === id
			)
			setDateArticle(article)
		} catch (ex) {
			console.log(ex.response)
		}
	}

	if (!dataArticle) {
		return <Preloader />
	}

	const { title, author, description, image, datePublication, photoUserUrl } =
		dataArticle
	const date = new Date(datePublication).toLocaleString()

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
			<>
				<article className='box-article'>
					<h1 className='title-section title-section-article'>Artykuł</h1>
					<Link className='link-article' to='/blog'>{`<< Powrót do bloga`}</Link>
					<div className='box-img'>
						{image ? (
							<img className='img-article' src={image} alt={title} />
						) : (
							<img className='img-article' src={noPhoto} alt='brak zdjęcia' />
						)}
					</div>
					<h2 className='title-article'>{title}</h2>
					{photoUserUrl ? (
						<img style={{ width: 50, borderRadius: "50%" }} src={photoUserUrl} alt='' />
					) : (
						<img style={{ width: 50, borderRadius: "50%" }} src={user} alt='' />
					)}
					<p>
						<strong>Autor:</strong> <em>{author}</em>
					</p>
					<p>
						<strong> Data publikacji:</strong> {date}
					</p>
					<div style={{ whiteSpace: "pre-wrap" }}>{description}</div>
				</article>
				<Comments dataArticle={dataArticle} />
			</>
		)
	}
}

export default Article
