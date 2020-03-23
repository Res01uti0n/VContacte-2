import React from "react";
import ReactDOM from "react-dom"
import { BrowserRouter } from "react-router-dom"
import { Provider } from "react-redux"
import ReduxToastr from "react-redux-toastr"

import App from "./components/shared/App"
import * as serviceWorker from "./serviceWorker"
import { storeConfig } from "./store/storeConfig"
import ScrollToTop from "./utils/ScrollToTop"
import "react-redux-toastr/lib/css/react-redux-toastr.min.css"

const store = storeConfig()

const render = () => {
  ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
        <ScrollToTop>
          <ReduxToastr 
            position="bottom-right"
            transitionIn="bounceIn"
            transitionOut="bounceOut"
          />

          <App />
        </ScrollToTop>
      </BrowserRouter>
    </Provider>, 
    document.getElementById("root"))
}

if (module.hot) {
  module.hot.accept("./components/shared/App", () => {
    setTimeout(render)
  })
}

render()

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
