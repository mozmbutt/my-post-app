import axios from "axios"
import React from "react"
import { useState } from "react/cjs/react.development"
import '../form-components/form.css'
import { useNavigate } from "react-router-dom";
import PostForm from "./PostForm"

export default function CreateForm({ state }) {
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
		<PostForm
			userId={userId}
			title={title}
			body={body}
			setUserId={setUserId}
			setTitle={setTitle}
			setBody={setBody}
			handleSubmit={handleSubmit}
		/>
	)
}
