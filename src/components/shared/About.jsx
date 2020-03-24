import React from "react"
import { Field, reduxForm } from "redux-form"

import { Segment, Header, Form, Divider, Button } from "semantic-ui-react"

import RadioInput from "./RadioInput"
import TextArea from "./TextArea"
import SelectInput from "./SelectInput"
import TextInput from "./TextInput"
import PlaceInput from "./PlaceInput"

const About = ({pristine, submitting, handleSubmit, updateProfile}) => {
  const category = [
    { key: "drinks", value: "drinks", text: "Drinks" },
    { key: "music", value: "music", text: "Music" },
  ]

  return (
    <Segment>
      <Header dividing size="large" content="About me" />
      
      <p>Complete your profile</p>

      <Form onSubmit={handleSubmit(updateProfile)}>
        <Form.Group inline>
          <label>Status: </label>
          <Field
            name="status"
            component={RadioInput}
            type="radio"
            value="single"
            label="Single"
          />

          <Field
            name="status"
            component={RadioInput}
            type="radio"
            value="married"
            label="Married"
          />
        </Form.Group>
        <Divider />

        <label>Tell us about yourself</label>
        <Field
          name="about" 
          component={TextArea}
          placeholder="About me"
        />

        <Field 
          name="interests"
          component={SelectInput}
          options={category}
          value="interests"
          multiple={true}
          placeholder="Select your interests"
        />

        <Field
          name="occupation"
          type="text"
          component={TextInput}
          placeholder="Occupation"
        />

        <Field
          name="origin"
          oprtions={{types: ["(regions)"]}}
          component={PlaceInput}
          placeholder="Origin"
        />
        <Divider />

        <Button disabled={pristine || submitting} size="large" positive content="Update profile"/>
      </Form>
    </Segment>
  )
}

export default reduxForm({ 
  form: "userProfile", 
  enableReinitialize: true, 
  destroyOnUnmount: false 
})(About)