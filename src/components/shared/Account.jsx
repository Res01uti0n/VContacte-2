import React from "react"
import { Field, reduxForm } from "redux-form"
import { combineValidators, isRequired, composeValidators, matchesField } from "revalidate"

import { Segment, Header, Form, Divider, Button, Label, Icon } from "semantic-ui-react"

import TextInput from "./TextInput"

const validate = combineValidators({
  newPassword1: isRequired({ message: "New password is required" }),
  newPassword2: composeValidators(
    isRequired({ message: "Please confirm New password is required" }),
    matchesField("newPassword1")({ message: "Passwords do not match"})
  )()
})

const Account = ({ error, invalid, submitting, handleSubmit, updatePassword, providerId }) => {
  return (
    <Segment>
      <Header dividing size="large" content="Account" />

      {providerId && providerId === "password" && (

      <div>
        <Header color="teal" sub content="Change password" />

        <p>Form to update settings</p>

        <Form onSubmit={handleSubmit(updatePassword)}>
          <Field
            width={8}
            name="newPassword1"
            type="password"
            pointing="left"
            inline={true}
            component={TextInput}
            basic={true}
            placeholder="New password"
          />

          <Field
            width={8}
            name="newPassword2"
            type="password"
            pointing="left"
            inline={true}
            component={TextInput}
            basic={true}
            placeholder="New password"
          />
          <Divider />

          {error && <Label basic color="red">{error}</Label>}

          <Button size="large" disabled={invalid || submitting} positive content="Change password" />
        </Form>
      </div>)}

      {providerId && providerId === "facebook.com" && (
        <div>
          <Header color="teal" sub content="Facebook account" />

          <p>Visit your Facebook account</p>
          
          <Button type="button" color="facebook">
            <Icon name="facebook"/>
            Go to Facebook
          </Button>
        </div>
      )}

      {providerId && providerId === "google.com" && (
        <div>
          <Header color="teal" sub content="Google account" />

          <p>Visit your Google account</p>

          <Button type="button" color="google plus">
            <Icon name="google plus" />
            Go to Google
          </Button>
        </div>
      )}
      
    </Segment>
  )
}

export default reduxForm({ form: "account", validate })(Account)