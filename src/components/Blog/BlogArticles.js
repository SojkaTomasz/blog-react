import { Link } from "react-router-dom"
import noPhoto from "../../images/no-image-available.jpg"
import "./styles/blogArticles.css"

function BlogArticles({
	id,
	title,
	datePublication,
	image,
	author,
	description,
	valueSearch,
}) {
	const date = new Date(datePublication).toLocaleString()
console.log(valueSearch);
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
				{image ? (
					<img className='img-blog-articles' src={image} alt={title} />
				) : (
					<img className='img-blog-articles' src={noPhoto} alt='brak zdjęcia' />
				)}
			</div>
			<div className='box-description-articles'>
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
				{description.slice(0, 190) + "..."}
			</div>
		</article>
	)
}

export default BlogArticles
