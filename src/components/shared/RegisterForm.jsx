import React from "react"
import { Field, reduxForm } from "redux-form"
import { connect } from "react-redux"
import { combineValidators, isRequired } from "revalidate"

import { Form, Segment, Button, Label, Divider } from "semantic-ui-react"

import TextInput from "./TextInput"
import { registerUser } from "../../actions/authActions"
import SocialLogin from "./SocialLogin"

const actions = {
  registerUser
}

const validate = combineValidators({
  name: isRequired("Name"),
  email: isRequired("Email"),
  password: isRequired("Password")
}) 

const RegisterForm = ({handleSubmit, registerUser, error, invalid, submitting}) => {
  return (
    <Form error size="large" onSubmit={handleSubmit(registerUser)} autoComplete="off">
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

        {error && <Label basic color="red">{error}</Label>}

        <Divider horizontal>
          Or
        </Divider>

        <SocialLogin />

        <Button disabled={invalid || submitting} fluid size="large" color="teal" content="Register" />
      </Segment>
    </Form>
  )
}

export default connect(null, actions)(reduxForm({ form: "registerForm", validate })(RegisterForm))