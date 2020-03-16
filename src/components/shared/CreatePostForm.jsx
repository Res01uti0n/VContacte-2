import React from "react"
import { Segment, Form, Button } from "semantic-ui-react"

export default function CreatePostForm({closeForm}) {
  return (
    <div>
      <Segment>
        <Form>
          <Form.Field>
            <label htmlFor="title">Post title</label>
            <input id="title" type="text" plaseholder="Title"/>
          </Form.Field>

          <Form.Field>
            <label htmlFor="date">Date</label>
            <input id="date" type="text" plaseholder="Title" />
          </Form.Field>

          <Form.Field>
            <label htmlFor="city">City</label>
            <input id="city" type="text" plaseholder="Title" />
          </Form.Field>

          <Form.Field>
            <label htmlFor="venue">Venue</label>
            <input id="venue" type="text" plaseholder="Title" />
          </Form.Field>

          <Form.Field>
            <label htmlFor="posted">Posted by</label>
            <input id="posted" type="text" plaseholder="Title" />
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
