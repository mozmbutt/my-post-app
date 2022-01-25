import axios from "axios"
import React from "react"
import { useState } from "react/cjs/react.development"
import Button from "../form-components/Button"
import Input from "../form-components/Input"
import Textarea from "../form-components/Textarea"
import './form.css'
import { useNavigate } from "react-router-dom";

export default function PostForm({state}) {
	const navigate = useNavigate();
	const user_id = 1
	const [title, setTitle] = useState('')
	const [body, setBody] = useState('')
	const [userId, setUserId] = useState(user_id)

	const handleSubmit = (event) => {
		event.preventDefault()
		let post = {
			title: title,
			body: body,
			userId: userId
		}
		axios.post('https://jsonplaceholder.typicode.com/posts', post)
			.then(res => {
				state.push(res.data)
				navigate("/");
			})
			.catch(err => {
				console.log(err);
			})
	}

	return (
		<main className="form-signin">
			<form>
				<h1 className="h3 mb-3 fw-normal">Add New Post</h1>

				<Input
					type='hidden'
					name='userId'
					setState={setUserId}
					value={userId} />

				<Input
					type='text'
					name='title'
					placeholder='Post Tile'
					setState={setTitle}
					value={title} />

				<Textarea
					name='body'
					placeholder='Enter Post Content ...'
					setState={setBody}
					value={body} />

				<Button handleOnSubmit={handleSubmit} />

			</form>
		</main>
	)
}
