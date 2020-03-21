import React from "react"

import { Form, Label } from "semantic-ui-react"

export default function TextInput(
  {input, type, placeholder, meta: {touched, error}}
) {
  return (
    <Form error={touched && !!error}>
      <input {...input} placeholder={placeholder} type={type} />
      {touched && error && <Label basic color="red">{error}</Label>}
    </Form>
  )
}
