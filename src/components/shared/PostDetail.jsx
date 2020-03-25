import React from "react"
import { connect } from "react-redux"

import { Grid } from "semantic-ui-react"

import PostDetailSideBar from "./PostDetailSideBar"
import PostDetailComments from "./PostDetailComments"
import PostDetailMain from "./PostDetailMain"
import PostDetailHeader from "./PostDetailHeader"

const mapState = (state, ownProps) => {
  const postId = ownProps.match.params.id
  let post = {}

  if (
    state.firestore.ordered.posts &&
    state.firestore.ordered.posts.length > 0
  ) {
    post =
      state.firestore.ordered.posts.filter(post => post.id === postId)[0] || {}
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

