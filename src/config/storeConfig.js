import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import rootReducer from "../reducers/rootReducer";

export const storeConfig = () => {
  const middlewares = [thunk];

  const composedEnhancer = composeWithDevTools(applyMiddleware(...middlewares));

  return createStore(rootReducer, composedEnhancer);
};

