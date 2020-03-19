import React from "react"
import { Menu, Button } from "semantic-ui-react"

export default function SignedOut({handleSignIn}) {
  return (
    <Menu.Item position="right">
      <Button onClick={handleSignIn} basic inverted content="Login" />
      <Button basic inverted content="Register" />
    </Menu.Item>     
  )
}
