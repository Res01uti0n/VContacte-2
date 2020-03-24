import React from "react"
import { Field, reduxForm } from "redux-form"
import { addYears } from "date-fns"

import { Segment, Header, Form, Divider, Button } from "semantic-ui-react"

import TextInput from "./TextInput"
import DateInput from "./DateInput"
import PlaceInput from "./PlaceInput"
import RadioInput from "./RadioInput"

const Basic = ({pristine, submitting, handleSubmit, updateProfile}) => {
  return (
    <Segment>
      <Header dividing size="large" content="Basics" />

      <Form onSubmit={handleSubmit(updateProfile)}>
        <Field 
          width={8}
          name="displayName"
          type="text"
          component={TextInput}
          placeholder="Name"
        />
          
        <Form.Group inline>
          <Field
            name="gender"
            type="radio"
            value="male"
            label="Male"
            component={RadioInput}
          />

          <Field
            name="gender"
            type="radio"
            value="female"
            label="Female"
            component={RadioInput}
          />
        </Form.Group>

        <Field
          width={8}
          name="dateOfBirth"
          component={DateInput}
          placeholder="Date of Birth"
          dateFormat="dd LLL yyyy"
          showYearDropdown={true}
          showMonthDropdown={true}
          dropDownMode="select"
          maxDate={addYears(new Date(), -18)}
        />

        <Field
          name="city"
          options={{ types: ["(cities)"] }}
          component={PlaceInput}
          width={8}
        /> 
        <Divider />

        <Button disabled={pristine || submitting} size="large" positive content="Update profile" />
      </Form>
    </Segment>
  )
}

export default reduxForm({ 
  form: "userProfile", 
  enableReinitialize: true, 
  destroyOnUnmount: false 
})(Basic)