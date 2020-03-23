import React from "react"
import { NavLink, Link } from "react-router-dom"
import { useHistory } from "react-router-dom"
import { connect } from "react-redux"

import { 
  Menu,
  Container,
  Button 
} from "semantic-ui-react"

import SignedOut from "./SignedOut"
import SignedIn from "./SignedIn"
import { openModal } from "../../actions/modalActions"
import { withFirebase } from "react-redux-firebase"

const mapState = state => ({
  auth: state.firebase.auth,
  profile: state.firebase.profile
})

const actions = {
  openModal,
}

const Navigation = ({openModal, auth, firebase, profile}) => {
  const history = useHistory()

  const handleSignIn = () => openModal("LoginModal")

  const handleRegister = () => openModal("RegisterModal")

  const handleSignOut = () => {
    firebase.logout()
    history.push("/")
  }

  const isAuth = auth.isLoaded && !auth.isEmpty

  return (
    <div>
      <Menu inverted fixed="top">
        <Container>
          <Menu.Item as={NavLink} exact to="/" header>
            Vcontacte
          </Menu.Item>

          <Menu.Item as={NavLink} exact to="/posts" name="Post" />
          {isAuth && (
            <>
              <Menu.Item as={NavLink} to="/people" name="People" />

              <Menu.Item>
                <Button as={Link} to="/create-post" floated="right" positive inverted content="Create Post" />
              </Menu.Item>
            </>
          )}

          {isAuth ? (
            <SignedIn handleSignOut={handleSignOut} profile={profile} />
          ) : (
            <SignedOut register={handleRegister} handleSignIn={handleSignIn} />
          )}
        </Container>
      </Menu>     
    </div>
  )
}

export default withFirebase(connect(mapState, actions)(Navigation))
