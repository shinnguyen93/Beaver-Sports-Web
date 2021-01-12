import React from 'react'
import { Button, Form } from 'semantic-ui-react'

const FormExampleForm = () => (
    <Form>
        <h1>Contacts Form</h1>
        <Form.Field>
            <label>First Name</label>
            <input placeholder='First Name' />
        </Form.Field>
        <Form.Field>
            <label>Last Name</label>
            <input placeholder='Last Name' />
        </Form.Field>
        <Form.Field>
            <label>Email</label>
            <input type="email" placeholder='Email Address' />
        </Form.Field>
        <Form.TextArea label='Enquiry Details' placeholder='Let us know about your plan' />
        <Button type='submit'>Submit</Button>
    </Form>
)

export default FormExampleForm

