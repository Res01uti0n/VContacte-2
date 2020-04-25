import { createReducer } from "../utils/reducerUtils"
import { CREATE_POST, DELETE_POST, UPDATE_POST, FETCH_POST } from "../actions/postConstants"

const initialState = []

const createPost = (state, payload) => {
  return [...state, payload.post]
}

const updatePost = (state, payload) => {
  return [...state.filter( post => post.id !== payload.post.id), payload.post]
}

const deletePost = (state, payload) => {
  return [...state.filter(post => post.id !== payload.postId)]
}

const fetchPosts = (state, payload) => {
  return payload.posts
}

export default createReducer(initialState, {
  [UPDATE_POST]: updatePost,
  [CREATE_POST]: createPost,
  [DELETE_POST]: deletePost,
  [FETCH_POST]: fetchPosts
})

