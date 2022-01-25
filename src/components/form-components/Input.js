import React from "react"

function Input({ name, placeholder, type, setState, value }) {
	return (
		<div className="form-floating mt-2">
			<div className="form-floating">
				<input type={type}
					className="form-control" id="floatingInput"
					value={value}
					placeholder={placeholder}
					name={name}
					onChange={(event) => setState(event.target.value)}
				/>
			</div>
		</div>
	)
}

export default Input
