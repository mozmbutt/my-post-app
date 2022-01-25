import axios from "axios"
import React from "react"
import { useState, useEffect } from "react/cjs/react.development"
import '../form-components/form.css'
import { useNavigate } from "react-router-dom";
import PostForm from "./PostForm"
import { useParams } from "react-router-dom";

function EditForm({ state }) {
	const navigate = useNavigate();
	let params = useParams()
	let post_id = params.id
	const user_id = 1
	const [title, setTitle] = useState('')
	const [body, setBody] = useState('')
	const [userId, setUserId] = useState(user_id)

	useEffect(() => {
		axios.get('https://jsonplaceholder.typicode.com/posts/' + post_id)
			.then(res => {
				let post = res.data
				setTitle(post.title)
				setBody(post.body)
				setUserId(post.userId)
			})
			.catch(err => {
				console.log(err);
			})
	}, [params])

	const handleSubmit = (event) => {
		event.preventDefault()
		let post = {
			title: title,
			body: body,
			userId: userId
		}
		axios.put('https://jsonplaceholder.typicode.com/posts/' + post_id, post)
			.then(res => {
				state.map(function (post) {
					if (post.id == post_id) {
						post = res.data;
					}
				});
				alert('Updated')
				navigate("/post/" + post_id);
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

export default EditForm
