import React from "react"
import ReactDatePicker from "react-datepicker"

import { Form, Label } from "semantic-ui-react"

import "react-datepicker/dist/react-datepicker.css"

export default function DateInput(
  {input, placeholder, meta: {touched, error}, ...rest}
) {
  return (
    <Form.Field error={touched && !!error}>
      <ReactDatePicker 
        {...rest}
        placeholder={placeholder}
        selected={input.value ? new Date(input.value) : null}
        onChange={input.onChange}
        onBlur={input.onBlur}
        onChangeRaw={e => e.preventDefault()}
      />
      {touched && error && <Label basic color="red">{error}</Label>}
    </Form.Field>
  )
}
