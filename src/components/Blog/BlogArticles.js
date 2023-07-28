import { Link } from "react-router-dom"
import noPhoto from "../../images/no-image-available.jpg"
import "./styles/BlogArticles.css"

function BlogArticles({
	title,
	publishedAt,
	urlToImage,
	author,
	description,
	valueSearch,
}) {
	const date = new Date(publishedAt).toLocaleString()

	const highlightedTitle = () => {
		if (valueSearch && title.toLowerCase().includes(valueSearch.toLowerCase())) {
			const regex = new RegExp(valueSearch, "gi")
			return title.replace(
				regex,
				match => `<span class="highlighted-blog-articles">${match}</span>`
			)
		}
		return title
	}

	return (
		<article className='box-blog-articles'>
			<div>
				{urlToImage ? (
					<img className="img-blog-articles" src={urlToImage} alt={title} />
				) : (
					<img className="img-blog-articles" src={noPhoto} alt='brak zdjęcia' />
				)}
			</div>
			<div>
				<h2 className='title-blog-articles'>
					<Link
						className='title-blog-articles'
						to={`/blog/${encodeURIComponent(title.replace("%", "%25"))}`}
						author={author}
						dangerouslySetInnerHTML={{ __html: highlightedTitle() }}
					/>
				</h2>
				<p>
					<strong>Autor:</strong> <em>{author ? author : "Autor nie znany"}</em>
				</p>
				<p>
					<strong> Data publikacji:</strong> {date}
				</p>
				<p>{description}</p>
			</div>
		</article>
	)
}

export default BlogArticles
