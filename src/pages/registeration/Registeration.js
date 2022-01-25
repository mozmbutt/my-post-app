import React, { useCallback, useState } from "react"
import Button from "../../components/form-components/Button"
import Input from "../../components/form-components/Input"
import { useNavigate } from "react-router-dom";

function Registeration() {
	const navigate = useNavigate();
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [confirm_password, setConfirmPassword] = useState('')
	const [error, setError] = useState('');

	const match_password = (password, confirm_password) => {
		if (password === confirm_password) {
			sessionStorage.setItem("email", email);
			sessionStorage.setItem("password", password);
			navigate("/signin")
		} else {
			setError("Password should match!");
			return;
		}
	}

	const handleSubmit = (event) => {
		event.preventDefault()
		if (email && password && confirm_password) {
			match_password(password, confirm_password)
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
					Sign Up
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

				<Input
					type="password"
					value={confirm_password}
					placeholder="Confirm Password"
					name="confirm_password"
					setState={setConfirmPassword} />

				<Button handleOnSubmit={handleSubmit} />
			</form>
		</div>
	)
}

export default Registeration
