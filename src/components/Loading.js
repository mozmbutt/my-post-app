import React from "react"

export default function Loading() {
	return (
		<div className="text-center">
			<div className="spinner-border position-absolute top-50 start-50" role="status">
				<span className="sr-only">Loading...</span>
			</div>
		</div>
	)
}
