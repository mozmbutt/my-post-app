import axios from "axios";
import React from "react"
import { Link, useNavigate } from "react-router-dom";


export default function PostRow({ post }) {
	const navigate = useNavigate();
	const destroyPost = () => {
		axios.delete('https://jsonplaceholder.typicode.com/posts/' + post.id)
			.then(res => {
				alert('Deleted')
				navigate("/");
			})
			.catch(err => {
				console.log(err);
			})
	}

	return (
		<tr key={post.id}>
			<td scope="row">{post.id}</td>
			<td>{post.title}</td>
			<td>
				<Link className="btn btn-info mr-2" to={'/post/' + post.id}>
					<i className="fa fa-fw fa-home"></i>
					Read More
				</Link>

				<Link className="btn btn-warning mr-2" to={'/post/edit/' + post.id}>
					<i className="fa fa-fw fa-home"></i>
					Edit
				</Link>

				<button className="btn btn-danger mr-2" onClick={destroyPost}>
					<i className="fa fa-fw fa-home"></i>
					Delete
				</button>
			</td>
		</tr>
	)
}
