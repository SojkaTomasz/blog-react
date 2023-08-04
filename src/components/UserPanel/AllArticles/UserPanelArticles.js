import noPhoto from "../../../images/no-image-available.jpg"
import DelateArticleContext from "../../../context/delateArticleContext"
import EditArticleContext from "../../../context/editArticleContext"
import { useContext } from "react"
import "./styles/userPanelArticles.css"

function UserPanelArticles({ id, image, title, datePublication, valueSearch }) {
	const delateArticleContext = useContext(DelateArticleContext)
	const editArticleContext = useContext(EditArticleContext)

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
		<div key={id} className='box-all-articles'>
			<div className='box-img-all-articles'>
				{image ? <img src={image} alt='' /> : <img src={noPhoto} alt='' />}
				<div>
					<p dangerouslySetInnerHTML={{ __html: highlightedTitle() }} />
					<p className='date-publication-all-articles'>
						{new Date(datePublication).toLocaleString()}
					</p>
				</div>
			</div>
			<div className='box-btn-all-articles'>
				<i
					onClick={() => editArticleContext.showPopUpEditFunction(id)}
					className='fa-regular icon-all-articles fa-pen-to-square'
				></i>
				<i
					onClick={() => delateArticleContext.showPopUpFunction(id)}
					className='fa-regular icon-all-articles fa-trash-can'
				></i>
			</div>
		</div>
	)
}

export default UserPanelArticles
