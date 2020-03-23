import { combineReducers } from "redux"
import { reducer as FormReducer } from "redux-form"
import { reducer as ToastrReducer } from "react-redux-toastr"
import { firebaseReducer } from "react-redux-firebase"
import { firestoreReducer } from "redux-firestore"

import postReducer from "./postReducer"
import modalReducer from "./modalReducer"
import authReducer from "./authReducer"
import asyncReducer from "./asyncReducer"

export const rootReducer = combineReducers({
  auth: authReducer,
  modal: modalReducer,
  form: FormReducer,
  posts: postReducer,
  async: asyncReducer,
  toastr: ToastrReducer,
  firebase: firebaseReducer,
  firestore: firestoreReducer
})

