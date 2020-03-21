import React, { useState } from "react"
import { NavLink, Link } from "react-router-dom"
import { useHistory } from "react-router-dom"

import { 
  Menu,
  Container,
  Button 
} from "semantic-ui-react"

import SignedOut from "./SignedOut"
import SignedIn from "./SignedIn"

export default function Navigation() {
  const [auth, setAuth] = useState(false)
  const history = useHistory()

  const handleSignIn = () => setAuth(true)

  const handleSignOut = () => {
    setAuth(false)
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
          <Menu.Item as={NavLink} to="/people" name="People" />

          <Menu.Item>
            <Button as={Link} to="/create-post" floated="right" positive inverted content="Create Post" />
          </Menu.Item>

          {auth ? (
            <SignedIn handleSignOut={handleSignOut} />
          ) : (
            <SignedOut handleSignIn={handleSignIn} />
          )}
        </Container>
      </Menu>     
    </div>
  )
}
