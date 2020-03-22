import { CREATE_POST, DELETE_POST, UPDATE_POST, FETCH_POST } from "./postConstants"
import { asyncActionStart, asyncActionFinish, asyncActionError } from "./asyncActions"
import { fetchMockData } from "../mockApi"

export const createPost = post => {
  return {
    type: CREATE_POST,
    payload: { post }
  }
}

export const updatePost = post => {
  return {
    type: UPDATE_POST,
    payload: { post }
  }
}

export const deletePost = postId => {
  return {
    type: DELETE_POST,
    payload: { postId }
  }
}

export const loadPosts = () => {
  return async dispatch => {
    try {
      dispatch(asyncActionStart())
      const posts = await fetchMockData()
      dispatch({type: FETCH_POST, payload: {posts}})
      dispatch(asyncActionFinish())
    } catch (error) {
      console.log(error)
      dispatch(asyncActionError())
    }
  }
}