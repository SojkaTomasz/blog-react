import { useContext, useEffect } from "react"
import { firebaseConfig } from "../../../firebase"
import DelateArticle from "../../../context/delateArticle"
import axios from "axios"
import "./popUpDeleteArticle.css"

const HTTPS_URL = `${firebaseConfig.databaseURL}/articles`

function PopUpDeleteArticle() {
	const acceptDelateArticle = useContext(DelateArticle)

	const deleteArticle = async id => {
		try {
			await axios.delete(`${HTTPS_URL}/${id}.json`)
			acceptDelateArticle.acceptFunction()
			window.location.reload()
		} catch (ex) {
			console.log(ex)
		}
	}

	useEffect(() => {
		if (acceptDelateArticle.acceptDelate) {
			deleteArticle(acceptDelateArticle.idArticleDelate)
		} else {
		}
	}, [acceptDelateArticle.showPopUp])

	return (
		<>
			{acceptDelateArticle.showPopUp && (
				<div className='box-popup'>
					<div>
						<h2>Czy na pewno?</h2>
						<div>
							<button
								className='btn-form btn-popup'
								onClick={acceptDelateArticle.acceptFunction}
							>
								Tak
							</button>
							<button
								className='btn-form'
								onClick={() => acceptDelateArticle.showPopUpFunction(null)}
							>
								Nie
							</button>
						</div>
					</div>
				</div>
			)}
		</>
	)
}

export default PopUpDeleteArticle
