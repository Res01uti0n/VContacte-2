import React from "react"
import { connect } from "react-redux"
import { firestoreConnect } from "react-redux-firebase"

import { Grid } from "semantic-ui-react"

import PostList from "./PostList"
import { deletePost } from "../../actions/postActions"
import Loading from "./Loading"
import ActivityList from "./ActivityList"

const mapState = state => ({ 
  posts: state.firestore.ordered.posts,
  loading: state.async.loading
})

const actions = {
  deletePost,
}

const Home = ({posts, deletePost, loading}) => {
  const handleDeletePost = id => deletePost(id)

  if (loading) return <Loading />
  
  return (
    <Grid>
      <Grid.Column width={10}>
        <PostList posts={posts} handleDeletePost={handleDeletePost} />
      </Grid.Column>

      <Grid.Column width={6}>
        <ActivityList />
      </Grid.Column>  
    </Grid>
  )
}

export default connect(mapState, actions)(firestoreConnect([{collection: "posts"}])(Home))