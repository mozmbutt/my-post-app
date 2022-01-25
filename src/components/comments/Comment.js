import React from "react"

export default function Comment({ comment }) {
	return (
		<a className="list-group-item list-group-item-action d-flex gap-3 py-3" aria-current="true">
			<div className="d-flex gap-2 w-100 justify-content-between">
				<div>
					<h6 className="mb-0">Commenter: {comment.name}</h6>
					<p className="mb-0 opacity-75">{comment.body}</p>
					<h6 className="mb-0">Email: {comment.email}</h6>
				</div>
				<small className="opacity-50 text-nowrap">now</small>
			</div>
		</a>
	)
}
