import React from "react"
import { Link } from "react-router-dom";

export default function PostRow({ post }) {

	return (
		<tr>
			<td scope="row">{post.id}</td>
			<td>{post.title}</td>
			<td>
				<Link className="btn btn-info" to={'/post/' + post.id}>
					<i className="fa fa-fw fa-home"></i>
					Show Full Post
				</Link>
			</td>
		</tr>
	)
}
