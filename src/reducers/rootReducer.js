import { combineReducers } from "redux"
import { reducer as FormReducer } from "redux-form"

import postReducer from "./postReducer"

export const rootReducer = combineReducers({
  form: FormReducer,
  posts: postReducer,
})

