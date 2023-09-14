import { useContext, useEffect, useState } from "react"
import { firebaseConfig } from "../../../firebase"
import DeleteComment from "./DeleteComment"
import user from "../../../images/user.png"
import LoginContext from "../../../context/loginContext"
import axios from "axios"

const HTTPS_URL = `${firebaseConfig.databaseURL}/comments.json`

function ListComments(props) {
	const [comments, setComments] = useState()
	const loginContext = useContext(LoginContext)
	useEffect(() => {
		getDataComments()
	}, [])

	const getDataComments = async () => {
		try {
			const allCommentsArticle = []
			const res = await axios.get(HTTPS_URL)
			for (const key in res.data) {
				if (res.data[key].idArticle === props.dataArticle.id) {
					allCommentsArticle.push({ ...res.data[key], id: key })
				}
			}
			allCommentsArticle.length && setComments(allCommentsArticle)
		} catch (ex) {
			console.log(ex)
		}
	}

	if (!comments) {
		return <p>Brak komentarzy</p>
	} else {
		return (
			<div className='box-comments'>
				{comments.map(comment => (
					<div key={comment.id} className='box-comment'>
						{comment.photoCommentAuthor ? (
							<img
								style={{ width: 40, borderRadius: "50%", marginRight: 10 }}
								src={comment.photoCommentAuthor}
								alt=''
							/>
						) : (
							<img
								style={{ width: 40, borderRadius: "50%", marginRight: 10 }}
								src={user}
								alt=''
							/>
						)}
						<div className='comment'>
							<p className='comment-author'>{comment.author}</p>
							<p className='comment-content'>{comment.textComment}</p>
							<p className='comment-date'>
								{new Date(comment.dateAddComment).toLocaleString()}
							</p>

							{comment.idUser === loginContext.dataUser.localId && (
								<DeleteComment id={comment.id} />
							)}
						</div>
					</div>
				))}
			</div>
		)
	}
}

export default ListComments
