import React from "react"
import { Link } from "react-router-dom"

import { Menu, Image, Dropdown } from "semantic-ui-react"

export default function SignedIn({handleSignOut, currentUser}) {
  return (
    <Menu.Item>
      <Image spaced="right" avatar src="" />

      <Dropdown pointing="top left" text={currentUser}>
        <Dropdown.Menu>
          <Dropdown.Item text="Create post" icon="plus"/>
          <Dropdown.Item text="My posts" icon="calendar" />
          <Dropdown.Item text="My network" icon="users" />
          <Dropdown.Item text="My profile" icon="user" />
          <Dropdown.Item as={Link} to="/settings" text="Settings" icon="settings" />
          <Dropdown.Item onClick={handleSignOut} text="Sign Out" icon="power" />
        </Dropdown.Menu>
      </Dropdown>
    </Menu.Item>    
  )
}
