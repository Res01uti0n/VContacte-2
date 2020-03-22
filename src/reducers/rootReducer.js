import { combineReducers } from "redux"
import { reducer as FormReducer } from "redux-form"

import postReducer from "./postReducer"
import modalReducer from "./modalReducer"
import authReducer from "./authReducer"

export const rootReducer = combineReducers({
  auth: authReducer,
  modal: modalReducer,
  form: FormReducer,
  posts: postReducer,
})

