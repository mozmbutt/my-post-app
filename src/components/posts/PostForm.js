import React from "react"
import Button from "../form-components/Button"
import Input from "../form-components/Input"
import Textarea from "../form-components/Textarea"

function PostForm({ userId, title, body, setUserId, setTitle, setBody, handleSubmit }) {
    return (
        <main className="my-form">
            <form>
                <h1 className="h3 mb-3 fw-normal">Add New Post</h1>

                <Input
                    type='hidden'
                    name='userId'
                    setState={setUserId}
                    value={userId} />

                <Input
                    type='text'
                    name='title'
                    placeholder='Post Tile'
                    setState={setTitle}
                    value={title} />

                <Textarea
                    name='body'
                    placeholder='Enter Post Content ...'
                    setState={setBody}
                    value={body} />

                <Button handleOnSubmit={handleSubmit} />

            </form>
        </main>
    )
}

export default PostForm
