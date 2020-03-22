import React from "react"
import { Field, reduxForm } from "redux-form"

import { Form, Segment, Button } from "semantic-ui-react"

import TextInput from "./TextInput"

const RegisterForm = () => {
  return (
    <Form error size="large">
      <Segment>
        <Field
          name="name"
          component={TextInput}
          type="text"
          placeholder="Name"
        />
        
        <Field
          name="email"
          component={TextInput}
          type="text"
          placeholder="Email"
        />

        <Field
          name="password"
          component={TextInput}
          type="password"
          placeholder="Password"
        />

        <Button fluid size="large" color="teal" content="Login" />
      </Segment>
    </Form>
  )
}

export default reduxForm({ form: "registerForm" })(RegisterForm)