import React, { Component } from 'react'
import { Button, Checkbox, Form } from 'semantic-ui-react'

const FormExampleForm = () => (
    <Form>
        <Form.Field inline >
            <label>First Name</label>
            <input placeholder='First Name' />
        </Form.Field>
        <Form.Field inline>
            <label>Last Name</label>
            <input placeholder='Last Name' />
        </Form.Field>
        <Form.Field inline>
            <label>Email</label>
            <input type="email" placeholder='Email Address' />
        </Form.Field>
        <Form.TextArea label='Details' placeholder='Let us know about your plan' />
        <Button type='submit'>Submit</Button>
    </Form>
)

export default FormExampleForm

