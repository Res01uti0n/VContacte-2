import React from "react"
import { Field, reduxForm } from "redux-form"
import { connect } from "react-redux"

import { Form, Segment, Button, Label, Divider } from "semantic-ui-react"

import TextInput from "./TextInput"
import { signIn, socialSignIn } from "../../actions/authActions"
import SocialLogin from "./SocialLogin"

const actions = {
  signIn,
  socialSignIn
}

const LoginForm = ({ signIn, handleSubmit, error, socialSignIn}) => {
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

        {error && <Label basic color="red">{error}</Label>}

        <Divider horizontal>
          Or
        </Divider>

        <SocialLogin socialSignIn={socialSignIn} />

        <Button fluid size="large" color="teal" content="Login" />
      </Segment>
    </Form>
  )
}

export default connect(null, actions)(reduxForm({form: "loginForm"})(LoginForm))
