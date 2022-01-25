import React from "react"

function Button({ handleOnSubmit }) {
	return (
		<div className="form-floating mt-2">
			<div className="form-floating">
				<button type="submit"
					className="btn btn-success"
					onClick={handleOnSubmit}>
					Submit
				</button>
			</div>
		</div>
	)
}

export default Button
