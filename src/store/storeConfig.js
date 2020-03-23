import { createStore, applyMiddleware } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import thunk from "redux-thunk"
import { getFirebase, reactReduxFirebase } from "react-redux-firebase"
import { getFirestore, reduxFirestore } from "redux-firestore"

import { rootReducer } from "../reducers/rootReducer"
import firebase from "../config/firebase"

const rrfConfig = {
  userProfile: "users",
  attachAuthIsReady: true,
  useFirestoreForProfile: true
}

export const storeConfig = () => {
  const middlewares = [thunk.withExtraArgument({getFirebase, getFirestore})]
  const composedEnhacer = composeWithDevTools(
    applyMiddleware(...middlewares), 
    reactReduxFirebase(firebase, rrfConfig),
    reduxFirestore(firebase)
  )
  const store = createStore(rootReducer, composedEnhacer)
  return store
}

