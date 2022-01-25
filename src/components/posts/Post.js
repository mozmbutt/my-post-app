import React from "react"
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Comments from "../comments/Comments";

export default function Post() {
	let params = useParams()
	let post_id = params.id
	const [post, setPost] = useState('')
	const [showComment, setShowComment] = useState(false)

	useEffect(() => {
		axios.get('https://jsonplaceholder.typicode.com/posts/' + post_id)
			.then(post => {
				setPost(post.data)
			})
			.catch(err => {
				console.log(err);
			})
	}, [params])

	const showCommentHandler = () => {
		setShowComment(true)
	}

	return (
		<div>
			<div className="px-4 py-5 my-5 text-center">
				<h5 className="display-5 fw-bold">Post # {post.id}</h5>
				<h1 className="display-5 fw-bold">{post.title}</h1>
				<div className="col-lg-6 mx-auto">
					<p className="lead mb-4">
						{post.body}
					</p>
					<div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
						<button type="button"
							className="btn btn-primary btn-lg px-4 gap-3" onClick={showCommentHandler}>
							Show Comments
						</button>
					</div>
				</div>
			</div>
			<div>
				<Comments post_id={post_id} showComment={showComment} />
			</div>
		</div>
	)
}
