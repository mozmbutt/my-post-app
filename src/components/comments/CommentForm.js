import axios from "axios"
import React, { useState } from "react"
import Button from "../form-components/Button"
import Input from "../form-components/Input"
import { useNavigate } from "react-router-dom";

function CommentForm({ post_id, comments }) {
	const navigate = useNavigate();
	const user_id = 1
	const [body, setBody] = useState('')
	const [userId, setUserId] = useState(user_id)

	const handleSubmit = (event) => {
		event.preventDefault()
		let comment = {
			body: body,
			userId: userId,
			postId: post_id
		}
		axios.post('https://jsonplaceholder.typicode.com/comments', comment)
			.then(res => {
				comments.push(res.data)
				navigate("/post/" + post_id);
			})
			.catch(err => {
				console.log(err);
			})
	}

	return (
		<main className="form-signin">
			<form>
				<Input
					type='hidden'
					name='userId'
					setState={setUserId}
					value={userId} />

				<Input
					type='text'
					name='body'
					placeholder='Add your comment ...'
					setState={setBody}
					value={body} />

				<Button handleOnSubmit={handleSubmit} />

			</form>
		</main>
	)
}

export default CommentForm
