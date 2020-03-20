import { CREATE_POST, DELETE_POST, UPDATE_POST } from "./postConstants"

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