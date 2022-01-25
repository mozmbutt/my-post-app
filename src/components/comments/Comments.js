import axios from "axios"
import React from "react"
import { useState, useEffect } from "react"
import Comment from './Comment'
import CommentForm from "../comments/CommentForm";

export default function Comments({ post_id, showComment }) {
	const [comments, setComments] = useState([])
	const [addComment, setAddComment] = useState(false)

	useEffect(() => {
		if (showComment) {
			axios.get('https://jsonplaceholder.typicode.com/posts/' + post_id + '/comments')
				.then(comments => {
					setComments(comments.data)
				})
				.catch(err => {
					console.log(err);
				})
		}
	}, [showComment])


	const createCommentHandler = () => {
		setAddComment(true)
	}

	return (
		<div className="list-group">
			{
				!comments.length == 0 ?
					comments.map(comment => <Comment comment={comment} key={comment.id} />) :
					<a className="list-group-item list-group-item-action d-flex gap-3 py-3" aria-current="true">
						<div className="d-flex gap-2 w-100 justify-content-between">
							<div>
								Click to get all comments !
							</div>
						</div>
					</a>
			}
			<div>
				{
					addComment &&
					<CommentForm post_id={post_id} comments={comments} />
				}
			</div>
			<div className="align-self-center mt-3">
				<button type="button"
					className="btn btn-info ml-2 btn-lg px-4 gap-3" onClick={createCommentHandler}>
					Add New Comment
				</button>
			</div>
		</div>
	)
}
