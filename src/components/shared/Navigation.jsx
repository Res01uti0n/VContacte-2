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
import { signOut } from "../../actions/authActions"

const mapState = state => ({
  auth: state.auth
})

const actions = {
  openModal,
  signOut
}

const Navigation = ({openModal, auth, signOut}) => {
  const history = useHistory()

  const handleSignIn = () => openModal("LoginModal")

  const handleRegister = () => openModal("RegisterModal")

  const handleSignOut = () => {
    signOut()
    history.push("/")
  }

  return (
    <div>
      <Menu inverted fixed="top">
        <Container>
          <Menu.Item as={NavLink} exact to="/" header>
            Vcontacte
          </Menu.Item>

          <Menu.Item as={NavLink} exact to="/posts" name="Post" />
          {auth.auth && (
            <>
              <Menu.Item as={NavLink} to="/people" name="People" />

              <Menu.Item>
                <Button as={Link} to="/create-post" floated="right" positive inverted content="Create Post" />
              </Menu.Item>
            </>
          )}

          {auth.auth ? (
            <SignedIn handleSignOut={handleSignOut} currentUser={auth.currentUser} />
          ) : (
            <SignedOut register={handleRegister} handleSignIn={handleSignIn} />
          )}
        </Container>
      </Menu>     
    </div>
  )
}

export default connect(mapState, actions)(Navigation)
