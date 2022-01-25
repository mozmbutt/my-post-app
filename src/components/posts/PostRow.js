import React from "react"
import { Link } from "react-router-dom";

export default function PostRow({ post }) {
	return (
		<tr key={post.id}>
			<td scope="row">{post.id}</td>
			<td>{post.title}</td>
			<td>
				<Link className="btn btn-info mr-2" to={'/post/' + post.id}>
					<i className="fa fa-fw fa-home"></i>
					Full Post
				</Link>
				<Link className="btn btn-warning mr-2" to={'/post/' + post.id}>
					<i className="fa fa-fw fa-home"></i>
					Edit
				</Link>
				<Link className="btn btn-danger mr-2" to={'/post/' + post.id}>
					<i className="fa fa-fw fa-home"></i>
					Delete
				</Link>
			</td>
		</tr>
	)
}
