import { useContext, useState } from "react"
import DelateArticleContext from "../../../context/delateArticleContext"
import LoginContext from "../../../context/loginContext"
import { firebaseConfig } from "../../../firebase"
import axios from "axios"
import "./styles/popUpDeleteArticle.css"

const HTTPS_URL = `${firebaseConfig.databaseURL}/articles`

function PopUpDeleteArticle() {
	const [errorInfo, setErrorInfo] = useState("")
	const delateArticleContext = useContext(DelateArticleContext)
	const loginContext = useContext(LoginContext)

	const deleteArticle = async id => {
		if (loginContext.dataUser.localId !== "gc0RCgDg1LXZopMxvRw0x1RV8Gg2") {
			return setErrorInfo("TO KONTO NIE MA MOŻLIWOŚCI KASOWANIA!")
		} else {
			try {
				await axios.delete(`${HTTPS_URL}/${id}.json`)
				delateArticleContext.showPopUpFunction()
				window.location.reload()
			} catch (ex) {
				console.log(ex)
			}
		}
	}

	return (
		<div className='box-popup-delete'>
			<div>
				<h2>Czy na pewno?</h2>
				{!errorInfo || <p className='form-error  error-settings'>{errorInfo}</p>}
				<div>
					<button
						className='btn-form btn-popup'
						onClick={() => deleteArticle(delateArticleContext.idArticleDelate)}
					>
						Tak
					</button>
					<button
						className='btn-form btn-popup'
						onClick={() => delateArticleContext.showPopUpFunction(null)}
					>
						Nie
					</button>
				</div>
			</div>
		</div>
	)
}

export default PopUpDeleteArticle
