import React from "react"
import { connect } from "react-redux"

import { Grid } from "semantic-ui-react"

import PostDetailSideBar from "./PostDetailSideBar"
import PostDetailComments from "./PostDetailComments"
import PostDetailMain from "./PostDetailMain"
import PostDetailHeader from "./PostDetailHeader"

const intialState = {
    id: "1",
    title: "Trip to Tower of London",
    date: "2020-03-27",
    category: "culture",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.",
    city: "London, UK",
    venue: "Tower of London, St Katharine's & Wapping, London",
    postedBy: "Bobe",
    hostPhotoURL: "https://randomuser.me/api/portraits/men/24.jpg",
    like: [
      {
        id: "a",
        name: "Bobe",
        photoURL: "https://randomuser.me/api/portraits/men/24.jpg"
      },
      {
        id: "b",
        name: "Sam",
        photoURL: "https://randomuser.me/api/portraits/women/32.jpg"
    }
  ]
}

const mapState = (state, ownProps) => {
  const postId = ownProps.match.params.id
  let post = {}

  if (postId && state.posts.length > 0) {
    post = state.posts.filter(post => post.id === postId)[0]
  }

  return { post }
}

const PostDetail = ({post}) => {
  return (
    <Grid>
      <Grid.Column width={10}>
        <PostDetailHeader post={post}/>
        <PostDetailMain post={post}/>
        <PostDetailComments />
      </Grid.Column>

      <Grid.Column width={6}>
        <PostDetailSideBar like={post.like}/>
      </Grid.Column>
    </Grid>
  )
}

export default connect(mapState)(PostDetail)

