import React from "react"
import { Route, Redirect, Switch } from "react-router-dom"
import { connect } from "react-redux"

import { Grid } from "semantic-ui-react"

import SettingsNav from "./SettingsNav"
import Basic from "./Basic"
import About from "./About"
import Photos from "./Photos"
import Account from "./Account"
import { updatePassword } from "../../actions/authActions"

const mapState = state => ({
  providerId: state.firebase.auth.isLoaded && 
  state.firebase.auth.providerData[0].providerId
})

const actions = {
  updatePassword
}

const Settings = ({updatePassword, providerId}) => {
  return (
    <Grid>
      <Grid.Column width={14}>
        <Redirect exact from="/settings" to="/settings/basic" />
        
        <Switch>
          <Route path="/settings/basic" component={Basic} />
          <Route path="/settings/about" component={About} />
          <Route path="/settings/photos" component={Photos} />
          <Route 
            path="/settings/account" 
            render={() => (
              <Account 
                updatePassword={updatePassword} 
                providerId={providerId}
              />
            )} 
          />
        </Switch>
      </Grid.Column>

      <Grid.Column width={2}>
        <SettingsNav />
      </Grid.Column>
    </Grid>
  )
}

export default connect(mapState, actions)(Settings)