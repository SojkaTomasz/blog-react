import { Link } from "react-router-dom"
import noFoto from "../images/no-image-available.png"
import "../styles/articles.css"

function Articles({
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
				match => `<span class="highlighted">${match}</span>`
			)
		}
		return title
	}

	return (
		<article className='box-article'>
			<div>
				{urlToImage ? (
					<img src={urlToImage} alt={title} />
				) : (
					<img src={noFoto} alt='brak zdjęcia' />
				)}
			</div>
			<div>
				<h2 className='title-articles'>
					<Link
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

export default Articles
