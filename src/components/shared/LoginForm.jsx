import React from "react"
import { Field, reduxForm } from "redux-form"
import { connect } from "react-redux"

import { Form, Segment, Button } from "semantic-ui-react"

import TextInput from "./TextInput"
import { signIn } from "../../actions/authActions"

const actions = {
  signIn
}

const LoginForm = ({signIn, handleSubmit}) => {
  return (
    <Form error size="large" onSubmit={handleSubmit(signIn)} autoComplete="off">
      <Segment>
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

export default connect(null, actions)(reduxForm({form: "loginForm"})(LoginForm))
