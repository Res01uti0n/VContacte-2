import React from "react";
import ReactDOM from "react-dom";
import { ReactReduxFirebaseProvider } from "react-redux-firebase";
import { createFirestoreInstance } from "redux-firestore";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import ReduxToastr from "react-redux-toastr";

import App from "./containers/shared/App";
import * as serviceWorker from "./serviceWorker";
import { storeConfig } from "./config/storeConfig";
import ScrollToTop from "./utils/ScrollToTop";
import firebase from "./config/firebaseConfig";
import "react-redux-toastr/lib/css/react-redux-toastr.min.css";
import "./styles/index.css";

const store = storeConfig();

const rrfConfig = {
  userProfile: "users",
  attachAuthIsReady: true,
  useFirestoreForProfile: true,
  updateProfileOnLogin: false,
};

const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance,
};

const rootEl = document.getElementById("root");

let render = () => {
  ReactDOM.render(
    <Provider store={store}>
      <ReactReduxFirebaseProvider {...rrfProps}>
        <BrowserRouter>
          <ScrollToTop>
            <ReduxToastr
              position="bottom-right"
              transitionIn="fadeIn"
              transitionOut="fadeOut"
            />
            
            <App />
          </ScrollToTop>
        </BrowserRouter>
      </ReactReduxFirebaseProvider>
    </Provider>,
    rootEl
  );
};

if (module.hot) {
  module.hot.accept("./containers/shared/App", () => {
    setTimeout(render);
  });
}

render();

serviceWorker.register();
