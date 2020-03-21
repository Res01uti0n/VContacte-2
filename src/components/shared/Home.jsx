import React from "react"
import { connect } from "react-redux"

import { Grid } from "semantic-ui-react"

import PostList from "./PostList"
import { deletePost } from "../../actions/postActions"

const mapState = state => ({ posts: state.posts})

const actions = {
  deletePost,
}

const Home = ({posts, deletePost}) => {
  const handleDeletePost = id => deletePost(id)
  
  return (
    <Grid>
      <Grid.Column width={10}>
        <PostList posts={posts} handleDeletePost={handleDeletePost} />
      </Grid.Column>

      <Grid.Column width={6}>
        <h2>Activity</h2>
      </Grid.Column>  
    </Grid>
  )
}

export default connect(mapState, actions)(Home)