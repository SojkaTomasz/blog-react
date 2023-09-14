import axios from "axios"
import { firebaseConfig } from "../../../firebase"

const HTTPS_URL = `${firebaseConfig.databaseURL}/comments`

function DeleteComment(props) {
	const deleteComment = async id => {
		try {
			await axios.delete(`${HTTPS_URL}/${id}.json`)
			window.location.reload()
		} catch (ex) {
			console.log(ex)
		}
	}

	return (
			<button className='btn-delete-comment' onClick={() => deleteComment(props.id)}>
				Usuń
			</button>
	)
}

export default DeleteComment
