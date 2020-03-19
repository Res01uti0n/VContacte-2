import React from "react";
import ReactDOM from "react-dom"
import App from "./components/shared/App"
import * as serviceWorker from "./serviceWorker"
import { BrowserRouter } from "react-router-dom"

const render = () => {
  ReactDOM.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>, 
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
