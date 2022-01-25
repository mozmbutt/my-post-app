import React, { useState, createContext } from "react"
import Button from "../../components/form-components/Button";
import Input from "../../components/form-components/Input";
import { useNavigate } from "react-router-dom";

function Session() {
	const navigate = useNavigate();
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [error, setError] = useState('');

	const chech_auth = (email, password) => {
		const user_email = sessionStorage.getItem('email')
		const user_password = sessionStorage.getItem('password')
		if (user_email === email && user_password === password) {
			sessionStorage.setItem('isLoggedIn', true)
			navigate("/")
		} else {
			setError("Incorrect email or password!");
			return;
		}
	}

	const handleSubmit = (event) => {
		event.preventDefault()
		if (email && password) {
			chech_auth(email, password)
		} else {
			setError("Fields are required!");
			return
		}
	}

	return (
		<div className="my-form">
			<form>
				{
					error &&
					<h4 id='alert'>
						{error}
					</h4>
				}
				<h1>
					Sign In
				</h1>
				<Input
					type="email"
					value={email}
					placeholder="Enter Email"
					name="email"
					setState={setEmail} />

				<Input
					type="password"
					value={password}
					placeholder="Enter Password"
					name="password"
					setState={setPassword} />

				<Button handleOnSubmit={handleSubmit} />
			</form>
		</div>
	)
}

export default Session
