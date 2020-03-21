import React, { useState, useEffect } from "react"
import { connect } from "react-redux"
import { useHistory } from "react-router-dom"
import cuid from "cuid"

import { Segment, Form, Button } from "semantic-ui-react"

import { createPost, updatePost } from "../../actions/postActions"

const mapState = (state, ownProps) => {
  const postId = ownProps.match.params.id
  let post = {
    title: "",
    date: "",
    city: "",
    venue: "",
    postedBy: ""
  }

  if (postId && state.postReducer.length > 0) {
    post = state.postReducer.filter( post => post.id === postId)[0]
  }

  return {
    post
  }
}

const actions = {
  createPost,
  updatePost
}

const CreatePostForm = ({selectedPost, post}) => {
  const [values, setValues] = useState(post)
  const history = useHistory()

  const handleFormSubmit = evt => {
    evt.preventDefault()

    if (values.id) {
      updatePost(values)
      history.push(`/posts/${values.id}`)
    } else {
      const newPost = {
        ...values,
        id: cuid(),
        hostPhotoURL: "https://randomuser.me/api/portraits/men/20.jpg"
      }
      createPost(newPost)
      history.push(`/posts/${newPost.id}`)
    }
  }

  const handleInputChange = evt => {
    setValues({...values, [evt.target.name]: evt.target.value})
  }

  useEffect(() => {
    if (selectedPost !== null) {
      setValues({...selectedPost})
    }
  }, [])

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

          <Button onClick={history.goBack} type="button">
            Cancel
          </Button>
        </Form>
      </Segment>       
    </div>
  )
}

export default connect(mapState, actions)(CreatePostForm)
