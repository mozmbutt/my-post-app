import React from "react"

function Textarea({ name, placeholder, setState, value }) {
	return (
		<div className="form-floating mt-2">
			<div className="form-floating">
				<textarea
					className="form-control" id="floatingInput"
					placeholder={placeholder}
					name={name}
					onChange={(event) => setState(event.target.value)}
					value={value}
					rows="5"
				>
				</textarea>
			</div>
		</div >
	)
}

export default Textarea
