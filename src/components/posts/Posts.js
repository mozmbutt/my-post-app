import React from "react"
import PostRow from "./PostRow"
import PostTableHeader from "./PostTableHeader"
import { Link } from "react-router-dom";

export default function index({ posts }) {
	return (
		<div>
			<h1>All Posts</h1>
			<Link className="btn btn-info" to={'/post/new'}>
				<i className="fa fa-fw fa-home"></i>
				New Post +
			</Link>
			<table className="table">
				<PostTableHeader />
				<tbody>
					{
						posts.map(post => <PostRow post={post} key={post.id} />)
					}
				</tbody>
			</table>
		</div>
	)
}
