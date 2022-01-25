import React from "react"
import Button from "../form-components/Button"
import Input from "../form-components/Input"

function CommentForm({ userId, setUserId, body, setBody, handleSubmit }) {
	return (
		<form className="my-form">
			<Input
				type='hidden'
				name='userId'
				setState={setUserId}
				value={userId} />

			<Input
				type='text'
				name='body'
				placeholder='Add your comment ...'
				setState={setBody}
				value={body} />

			<Button handleOnSubmit={handleSubmit} />

		</form>
	)
}

export default CommentForm
