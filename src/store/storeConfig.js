import { createStore, applyMiddleware } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import thunk from "redux-thunk"

import { rootReducer } from "../reducers/rootReducer"

export const storeConfig = () => {
  const middlewares = [thunk]
  const composedEnhacer = composeWithDevTools(applyMiddleware(...middlewares))
  const store = createStore(rootReducer, composedEnhacer)
  return store
}

