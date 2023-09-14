import { useContext, useState } from "react"
import { firebaseConfig } from "../../../firebase"
import LoginContext from "../../../context/loginContext"
import user from "../../../images/user.png"
import axios from "axios"

const HTTPS_URL = `${firebaseConfig.databaseURL}/comments.json`

function AddComment(props) {
	const [textComment, setTextComment] = useState("")
	const [errorInfo, setErrorInfo] = useState("")
	const loginContext = useContext(LoginContext)

	const addComment = async e => {
		e.preventDefault()
		if (textComment) {
			try {
				const changedArticleData = {
					idArticle: props.dataArticle.id,
					idUser: loginContext.dataUser.localId,
					photoCommentAuthor: loginContext.dataUser.photoUserUrl,
					author: loginContext.dataUser.email,
					dateAddComment: new Date().toJSON(),
					textComment,
				}
				await axios.post(HTTPS_URL, changedArticleData)
				setTextComment("")
				setErrorInfo("")
				window.location.reload()
			} catch (ex) {
				console.log(ex)
			}
		} else {
			setErrorInfo("Musisz podać treść komentarza!")
		}
	}

	return (
		<form onSubmit={addComment}>
			{loginContext.dataUser.photoUserUrl ? (
				<img
					style={{ width: 50, borderRadius: "50%", marginRight: 10 }}
					src={loginContext.dataUser.photoUserUrl}
					alt={`Zdjęcie profilowe użytkownika ${loginContext.dataUser.email}`}
				/>
			) : (
				<img style={{ width: 50, borderRadius: "50%" }} src={user} alt='' />
			)}
			<div>
				<textarea
					className='form-textarea'
					value={textComment}
					onChange={e => setTextComment(e.target.value)}
					rows='3'
				></textarea>
				{!errorInfo || <p className='form-error error-tings'>{errorInfo}</p>}
				<button className='btn-form'>Dodaj</button>
			</div>
		</form>
	)
}

export default AddComment
