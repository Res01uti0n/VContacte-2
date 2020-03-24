/*global google*/
import React, { useState } from "react"
import { 
  combineValidators, 
  isRequired, 
  composeValidators, 
  hasLengthGreaterThan 
} from "revalidate"
import { connect } from "react-redux"
import { useHistory } from "react-router-dom"
import { reduxForm, Field } from "redux-form"
import { geocodeByAddress, getLatLng } from "react-places-autocomplete"
import cuid from "cuid"

import { Segment, Form, Button, Grid, Header } from "semantic-ui-react"

import { createPost, updatePost } from "../../actions/postActions"
import TextInput from "./TextInput"
import TextArea from "./TextArea"
import SelectInput from "./SelectInput"
import DateInput from "./DateInput"
import PlaceInput from "./PlaceInput"

const mapState = (state, ownProps) => {
  const postId = ownProps.match.params.id
  let post = {
    title: "",
    date: "",
    city: "",
    venue: "",
    postedBy: ""
  }

  if (postId && state.posts.length > 0) {
    post = state.posts.filter( post => post.id === postId)[0]
  }

  return {
    initialValues: post
  }
}

const actions = {
  createPost,
  updatePost
}

const validate = combineValidators({
  title: isRequired({ message: "The post title is required" }),
  category: isRequired({ message: "The category is required" }),
  description: composeValidators(
    isRequired({ message: "The description is required" }),
    hasLengthGreaterThan(4)({ message: "The description needs to be at least 5 characters" })
  )(),
  date: isRequired("Date")
})

const CreatePostForm = ({
  initialValues, 
  createPost, 
  updatePost, 
  handleSubmit,
  invalid,
  pristine,
  submitting,
  change
}) => {
  const history = useHistory()
  const [cityLatLng, setCityLatLng] = useState({})
  const [venueLatLng, setVenueLatLng] = useState({})
  const category = [
    { key: "drinks", value: "drinks", text: "Drinks" },
    { key: "music", value: "music", text: "Music" },
  ]

  const onFormSubmit = values => {
    values.venueLatLng = venueLatLng

    if (initialValues.id) {
      updatePost(values)
      history.push(`/posts/${initialValues.id}`)
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

  const handleCitySelect = selectedCity => {
    geocodeByAddress(selectedCity)
      .then(results => getLatLng(results[0]))
      .then(latLng => setCityLatLng(latLng))
      .then(() => change("city", selectedCity))
  }

  const handleVenueSelect = selectedVenue => {
    geocodeByAddress(selectedVenue)
      .then(results => getLatLng(results[0]))
      .then(latLng => setVenueLatLng(latLng))
      .then(() => change("venue", selectedVenue))
  }

  return (
    <Grid>
      <Grid.Column width={10}>
        <Segment>
          <Header sub color="teal" content="Post Details" />

          <Form onSubmit={handleSubmit(onFormSubmit)} autoComplete="off">
            <Field name="title" component={TextInput} placeholder="Title" />
            <Field
              name="category"
              options={category}
              component={SelectInput}
              placeholder="Category"
              multiple={true}
            />
            <Field
              name="description"
              component={TextArea}
              rows={5}
              placeholder="Description"
            />

            <Header sub color="teal" content="Location Details" />

            <Field
              name="city"
              options={{ types: ["(cities)"] }}
              component={PlaceInput}
              onSelect={handleCitySelect}
              placeholder="City"
            />

            <Field
              name="venue"
              component={PlaceInput}
              placeholder="Venue"
              onSelect={handleVenueSelect}
              options={{ 
                location: new google.maps.LatLng(cityLatLng),
                radius: 1000,
                types: ["establishment"]
              }}
            />

            <Field
              name="date"
              type="text"
              component={DateInput}
              dateFormat="MMMM d, yyyy h:mm aa"
              timeFormat="HH:mm"
              showTimeSelect
              placeholder="Event date"
            />

            <Button
              disabled={invalid || submitting || pristine}
              positive
              type="submit"
            >
              Create
            </Button>

            <Button
              onClick={
                initialValues.id
                  ? () => history.push(`/posts/${initialValues.id}`)
                  : () => history.push("/posts")
              }
              type="button"
            >
              Cancel
            </Button>
          </Form>
        </Segment>
      </Grid.Column>
    </Grid>
  );
}

export default connect(mapState, actions)(reduxForm({form: "postForm", validate })(CreatePostForm))
