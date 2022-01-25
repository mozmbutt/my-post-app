import React from "react"
import PostRow from "./PostRow"
import PostTableHeader from "./PostTableHeader"
import { Link } from "react-router-dom";
import InfiniteScroll from 'react-infinite-scroll-component';

export default function index({ posts, isFetching, HasMore, loadMoreItems }) {
	return (
		<div>
			<div className="d-flex justify-content-around align-items-center">
				<h1>All Posts</h1>
				<Link className="btn btn-info" to={'/post/new'}>
					<i className="fa fa-fw fa-home"></i>
					New Post +
				</Link>
			</div>
			<InfiniteScroll
				dataLength={posts.length}
				next={loadMoreItems}
				hasMore={HasMore}
				loader={<h4>Loading...</h4>}
			>
				<table className="table">
					<PostTableHeader />
					<tbody>
						{
							posts.map(post => <PostRow post={post} key={post.id} />)
						}
					</tbody>
				</table>
			</InfiniteScroll>
		</div>
	)
}
