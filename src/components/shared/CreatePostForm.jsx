import React, { useState } from "react"

import { Segment, Form, Button } from "semantic-ui-react"

export default function CreatePostForm({closeForm, handleCreatePost}) {
  const [values, setValues] = useState({
    title: "",
    date: "",
    city: "",
    venue: "",
    postedBy: ""
  })

  const handleFormSubmit = evt => {
    evt.preventDefault()
    handleCreatePost(values)
  }

  const handleInputChange = evt => {
    setValues({...values, [evt.target.name]: evt.target.value})
  }

  return (
    <div>
      <Segment>
        <Form onSubmit={handleFormSubmit} autoComplete="off">
          <Form.Field>
            <label htmlFor="title">Post title</label>
            <input 
              id="title"
              name="title"
              value={values.title}
              onChange={handleInputChange}
              type="text" 
              placeholder="Title"
            />
          </Form.Field>

          <Form.Field>
            <label htmlFor="date">Date</label>
            <input 
              id="date" 
              name="date"
              value={values.date}
              onChange={handleInputChange} 
              type="text" 
              placeholder="Date" 
            />
          </Form.Field>

          <Form.Field>
            <label htmlFor="city">City</label>
            <input 
              id="city" 
              name="city"
              value={values.city}
              onChange={handleInputChange} 
              type="text" 
              placeholder="City" 
            />
          </Form.Field>

          <Form.Field>
            <label htmlFor="venue">Venue</label>
            <input 
              id="venue" 
              name="venue"
              value={values.venue}
              onChange={handleInputChange} 
              type="text" 
              placeholder="Venue" 
            />
          </Form.Field>

          <Form.Field>
            <label htmlFor="posted">Posted by</label>
            <input 
              id="posted" 
              type="text"
              name="postedBy"
              value={values.postedBy}
              onChange={handleInputChange}
              placeholder="Posted by" />
          </Form.Field>

          <Button positive type="submit">
            Create
          </Button>

          <Button onClick={closeForm} type="button">
            Cancel
          </Button>
        </Form>
      </Segment>       
    </div>
  )
}
