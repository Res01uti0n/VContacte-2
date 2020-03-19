import React from "react"
import { Route, Redirect, Switch } from "react-router-dom"

import { Grid } from "semantic-ui-react"

import SettingsNav from "./SettingsNav"
import Basic from "./Basic"
import About from "./About"
import Photos from "./Photos"
import Account from "./Account"

export default function Settings() {
  return (
    <Grid>
      <Grid.Column>
        <Redirect exact from="/settings" to="/settings/basic" />
        
        <Switch>
          <Route path="/settings/basic" component={Basic} />
          <Route path="/settings/about" component={About} />
          <Route path="/settings/photos" component={Photos} />
          <Route path="/settings/account" component={Account} />
        </Switch>
      </Grid.Column>

      <Grid.Column>
        <SettingsNav />
      </Grid.Column>
    </Grid>
  )
}