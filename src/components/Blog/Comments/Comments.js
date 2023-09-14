import AddComment from "./AddComment"
import ListComments from "./ListComments"
import "../styles/comments.css"

function Comments(props) {
	return (
		<div>
			<div style={{marginBottom: 15}}>
				<h2>Komentarze</h2>
				<ListComments dataArticle={props.dataArticle} />
			</div>
			<div>
				<h2>Dodaj komentarz</h2>
				<AddComment dataArticle={props.dataArticle} />
			</div>
		</div>
	)
}

export default Comments
