import axios from "axios"
import React, { useState } from "react"
import { useNavigate } from "react-router-dom";
import CommentForm from "./CommentForm";

function CreateComment({ post_id, comments }) {
	const navigate = useNavigate();
	const user_id = 1
	const user_name = 'Tester'
	const user_email = 'tester@test.com'
	const [body, setBody] = useState('')
	const [userId, setUserId] = useState(user_id)

	const handleSubmit = (event) => {
		event.preventDefault()
		let comment = {
			body: body,
			userId: userId,
			postId: post_id,
			name: user_name,
			email: user_email
		}
		axios.post('https://jsonplaceholder.typicode.com/comments', comment)
			.then(res => {
				comments.push(res.data)
				setBody('')
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

export default CreateComment
