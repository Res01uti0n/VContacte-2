import React from "react"
import { Switch, Route } from  "react-router-dom"

import StartPage from "./components/shared/StartPage"
import Home from "./components/shared/Home"
import PostDetail from "./components/shared/PostDetail"
import PeopleList from "./components/shared/PeopleList"
import UserDetail from "./components/shared/UserDetail"
import Settings from "./components/shared/Settings"
import CreatePostForm from "./components/shared/CreatePostForm"
import Navigation from "./components/shared/Navigation"


export default function MainRouter() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={StartPage}  />
        <Route exact path="/(.+)" render={() => (
          <>
            <Navigation />
            <Route path="/posts" component={Home} />
            <Route path="/posts/:id" component={PostDetail} />
            <Route path="/people" component={PeopleList} />
            <Route path="/profile/:id" component={UserDetail} />
            <Route path="/settings" component={Settings} />
            <Route path="/create-post" component={CreatePostForm} />
          </>
        )} />
      </Switch>
    </div>
  )
}
