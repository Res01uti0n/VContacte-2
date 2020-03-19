import React from "react"
import { Link } from "react-router-dom"

import { Grid, Menu, Header } from "semantic-ui-react"

export default function SettingsNav() {
  return (
    <Grid.Column width={4}>
      <Menu vertical>
        <Header icon="user" attached inverted color="green" content="Profile"/>

        <Menu.Item as={Link} to="/settings/basic">Basics</Menu.Item>
        <Menu.Item as={Link} to="/settings/about">About Me</Menu.Item>
        <Menu.Item as={Link} to="/settings/photos">My Photos</Menu.Item>
      </Menu>

      <Grid.Row />

      <Menu vertical>
        <Header icon="settings" attached inverted color="green" content="Account" />

        <Menu.Item>My Account</Menu.Item>
      </Menu>
    </Grid.Column>
  )
}