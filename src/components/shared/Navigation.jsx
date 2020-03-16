import React from "react"
import { 
  Menu,
  Container,
  Button 
} from "semantic-ui-react"

export default function Navigation() {
  return (
    <div>
      <Menu inverted fixed="top">
        <Container>
          <Menu.Item header>
            Vcontacte
          </Menu.Item>

          <Menu.Item name="Post" />

          <Menu.Item>
            <Button floated="right" positive inverted content="Create Post" />
          </Menu.Item>

          <Menu.Item position="right">
            <Button basic inverted content="Login" />
            <Button basic inverted content="Register" style={{marginLeft: 10}} />
          </Menu.Item>
        </Container>
      </Menu>     
    </div>
  )
}
