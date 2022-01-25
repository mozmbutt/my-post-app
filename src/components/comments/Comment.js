import axios from "axios"
import React from "react"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom";

export default function Comment({ comment }) {
	const navigate = useNavigate();
	let post_id = comment.postId
	const destroyComment = () => {
		axios.delete('https://jsonplaceholder.typicode.com/comments/' + comment.id)
			.then(res => {
				alert('Deleted')
				navigate("/post/" + post_id);
			})
			.catch(err => {
				console.log(err);
			})
	}
	return (
		<span className="list-group-item list-group-item-action d-flex gap-3 py-3" aria-current="true">
			<div className="d-flex gap-2 w-100 justify-content-between">
				<div>
					<h6 className="mb-0">Commenter: {comment.name}</h6>
					<p className="mb-0 opacity-75">{comment.body}</p>
					<h6 className="mb-0">Email: {comment.email}</h6>
				</div>
				<small className="opacity-50 text-nowrap">
					<Link className="btn btn-warning mr-2" to={'/posts/' + comment.postId + '/comments/edit/' + comment.id}>
						<i className="fa fa-fw fa-home"></i>
						Edit
					</Link>
					<button className="btn btn-danger mr-2" onClick={destroyComment}>
						<i className="fa fa-fw fa-home"></i>
						Delete
					</button>
				</small>
			</div>
		</span>
	)
}
