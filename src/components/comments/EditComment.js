import axios from "axios"
import React, { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom";
import CommentForm from "./CommentForm";

function EditComment() {
	let params = useParams()
	let comment_id = params.id
	let post_id = params.post_id

	const navigate = useNavigate();
	const user_id = 1
	const [body, setBody] = useState('')
	const [userId, setUserId] = useState(user_id)

	useEffect(() => {
		axios.get('https://jsonplaceholder.typicode.com/comments/' + comment_id)
			.then(res => {
				let comment = res.data
				setBody(comment.body)
				setUserId(comment.userId)
			})
			.catch(err => {
				console.log(err);
			})
	}, [params])

	const handleSubmit = (event) => {
		event.preventDefault()
		let comment = {
			body: body,
		}
		axios.put('https://jsonplaceholder.typicode.com/comments/' + comment_id, comment)
			.then(res => {
				alert('updated')
				navigate("/post/" + post_id);
			})
			.catch(err => {
				console.log(err);
			})
	}

	return (
		<main className="form-signin">
			<CommentForm
				userId={userId}
				setUserId={setUserId}
				body={body}
				setBody={setBody}
				handleSubmit={handleSubmit}
			/>
		</main>
	)
}

export default EditComment