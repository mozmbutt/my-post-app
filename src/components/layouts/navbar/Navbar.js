import React from "react"
import './navbar.css'
import { useNavigate, Outlet, Link } from "react-router-dom";

function Navbar() {
	const navigate = useNavigate();
	const isLoggedIn = sessionStorage.getItem('isLoggedIn')
	const handleLogout = () => {
		sessionStorage.removeItem("email");
		sessionStorage.removeItem("password");
		sessionStorage.removeItem('isLoggedIn', false);
		navigate("/signup")
	}

	return (
		<>
			<div className="navbar navbar-dark bg-info">
				{isLoggedIn ?
					<>
						<Link className="" to="/posts">
							<i className="fa fa-fw fa-home"></i>
							All Posts
						</Link>

						<Link className="" to="/post/new">
							<i className="fa fa-fw fa-home"></i>
							Add New Post
						</Link>

						<a className="" onClick={handleLogout}>
							<i className="fa fa-fw fa-sign-out"></i>
							Sign out
						</a>
					</>
					:
					<>
						<Link className="" to="/signin">
							<i className="fa fa-fw fa-user"></i>
							SignIn
						</Link>

						<Link className="" to="/signup">
							<i className="fa fa-fw fa-users"></i>
							SignUp
						</Link>
					</>
				}
			</div>
			<Outlet />
		</>
	)
}

export default Navbar
