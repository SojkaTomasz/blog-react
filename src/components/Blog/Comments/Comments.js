import AddComment from "./AddComment"
import ListComments from "./ListComments"
import "../styles/comments.css"

function Comments(props) {
	return (
		<div>
			<h2>Komentarze</h2>
			<ListComments dataArticle={props.dataArticle}/>
			<h2>Dodaj komentarz</h2>
			<AddComment dataArticle={props.dataArticle} />
		</div>
	)
}

export default Comments
