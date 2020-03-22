import React from "react"

import "./App.css"
import MainRouter from "../../MainRouter"
import ModalManager from "./ModalManager"


export default function App() {
  return (
    <main>
      <ModalManager />
      <MainRouter />
    </main>
  )
}


