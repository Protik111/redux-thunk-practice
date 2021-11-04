import React, { useState } from 'react'
import axios from 'axios'
const Form = () => {
    const [user, setUser] = useState(
        {
            userId: '',
            title: '',
            body: ''
        })

    const changeHandler = e => {
        setState({ [e.target.name]: e.target.value })
    }
    const submitHandler = e => {
        e.preventDefault()
        console.log(this.user)
        axios
            .post('https://jsonplaceholder.typicode.com/posts', this.user)
            .then(response => {
                console.log(response)
            })
            .catch(error => {
                console.log(error)
            })
    }

    return (
        <div>
            <form onSubmit={submitHandler}>
                <div>
                    <input
                        type="text"
                        name="userId"
                        value={userId}
                        onChange={(e) => setUser(e.target.value)}
                    />
                    <input
                        type="text"
                        name="title"
                        value={title}
                        onChange={(e) => setUser(e.target.value)}
                    />
                    <input
                        type="text"
                        name="body"

                        onChange={(e) => setUser(e.target.value)}
                    />

                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    )
}
export default Form;