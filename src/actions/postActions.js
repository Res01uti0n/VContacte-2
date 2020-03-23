import { toastr } from "react-redux-toastr"
import { CREATE_POST, DELETE_POST, UPDATE_POST, FETCH_POST } from "./postConstants"
import { asyncActionStart, asyncActionFinish, asyncActionError } from "./asyncActions"

export const createPost = post => {
  return async dispatch => {
    try {
      dispatch({
        type: CREATE_POST,
        payload: { post }
      })
      toastr.success("Success!!", "Post has been created")
    } catch (error) {
      toastr.success("Error!", "Someting went wrong")
    }
  }
}

export const updatePost = post => {
  return async dispatch => {
    try {
      dispatch({
        type: UPDATE_POST,
        payload: { post }
      })
      toastr.success("Success!!", "Post has been updated")
    } catch (error) {
      toastr.success("Error!", "Someting went wrong")
    }
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
      /*const posts = await fetchMockData()
      dispatch({type: FETCH_POST, payload: {posts}})*/
      dispatch(asyncActionFinish())
    } catch (error) {
      console.log(error)
      dispatch(asyncActionError())
    }
  }
}