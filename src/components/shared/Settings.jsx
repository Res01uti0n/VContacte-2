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
import { updateProfile } from "../../actions/userActions"

const mapState = state => ({
  providerId: state.firebase.auth.isLoaded && 
  state.firebase.auth.providerData[0].providerId,
  user: state.firebase.profile
})

const actions = {
  updatePassword,
  updateProfile
}

const Settings = ({updatePassword, providerId, user, updateProfile}) => {
  return (
    <Grid>
      <Grid.Column width={14}>
        <Redirect exact from="/settings" to="/settings/basic" />
        
        <Switch>
          <Route 
            path="/settings/basic" 
            render={() => (
              <Basic 
                initialValues={user}
                updateProfile={updateProfile}
              />
            )} 
          />

          <Route 
            path="/settings/about"
            render={() => (
              <About
                initialValues={user}
                updateProfile={updateProfile}
              />
            )}  
          />
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