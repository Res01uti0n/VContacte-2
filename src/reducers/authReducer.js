import { createReducer } from "../utils/reducerUtils"
import { SIGN_IN_USER, SIGN_OUT_USER } from "../actions/authConstants"

const initialState = {
  auth: false,
  currentUser: null
}

const signInUser = (state, payload) => {
  return {
    auth: true,
    currentUser: payload.creds.email
  }
}

const signOutUser = (state, payload) => {
  return {
    auth: false,
    currentUser: null
  }
}



export default createReducer(initialState, {
    [SIGN_IN_USER]: signInUser,
    [SIGN_OUT_USER]: signOutUser
})