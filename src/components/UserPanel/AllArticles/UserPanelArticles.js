import noPhoto from "../../../images/no-image-available.jpg"
import DelateArticle from "../../../context/delateArticle"
import { useContext } from "react"
import "./userPanelArticles.css"

function UserPanelArticles({ id, image, title, datePublication, valueSearch }) {
	const acceptDelateArticle = useContext(DelateArticle)

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
				<i className='fa-regular icon-all-articles fa-pen-to-square'></i>
				<i
					onClick={() => acceptDelateArticle.showPopUpFunction(id)}
					className='fa-regular icon-all-articles fa-trash-can'
				></i>
			</div>
		</div>
	)
}

export default UserPanelArticles
