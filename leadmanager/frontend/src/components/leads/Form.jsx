import React, { useState, useContext } from 'react'
import { addLead } from '../../actions/leads'
import { LeadsContext } from '../../reducers/leads';
import { ErrorsContext } from '../../reducers/errors';

const Form = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const { leadsDispatch } = useContext(LeadsContext)
    const { errorsDispatch } = useContext(ErrorsContext)

    const onChange = e => {
        switch (e.target.name) {
            case 'name':
                setName(e.target.value)
                break
            case 'email':
                setEmail(e.target.value)
                break
            case 'message':
                setMessage(e.target.value)
                break
            default:
                break
        }
    }

    const onSubmit = e => {
        e.preventDefault()
        const newLead = { name, email, message }
        addLead(leadsDispatch, newLead, errorsDispatch)
    }

    return (
        <div>
            <h1>Add Lead</h1>
            <form onSubmit={onSubmit}>
                <div>
                    <label>Name</label>
                    <input
                        type="text"
                        name="name"
                        onChange={onChange}
                        value={name}
                    />
                </div>
                <div>
                    <label>Email</label>
                    <input
                        type="text"
                        name="email"
                        onChange={onChange}
                        value={email}
                    />
                </div>
                <div>
                    <label>Message</label>
                    <textarea
                        type="text"
                        name="message"
                        onChange={onChange}
                        value={message}
                    />
                </div>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default Form