import React from "react"

import { Segment, Header, Menu, Grid, Card, Image } from "semantic-ui-react"

const UserDetailedPosts = () => {
  return (
    <Grid.Column width={12}>
      <Segment attached>
        <Header icon="calendar" content="Posts" />

        <Menu secondary pointing>
          <Menu.Item name="All Posts" active />
          <Menu.Item name="Past Posts" />
          <Menu.Item name="Future Posts" />
          <Menu.Item name="Posts Posted" />
        </Menu>

        <Card.Group itemsPerRow={5}>
          <Card>
            <Image src={""} />

            <Card.Content>
              <Card.Header textAlign="center">Post Title</Card.Header>
              
              <Card.Meta textAlign="center">
                28th March 2020 at 10:00 PM
              </Card.Meta>
            </Card.Content>
          </Card>

          <Card>
            <Image src={""} />

            <Card.Content>
              <Card.Header textAlign="center">Posts Title</Card.Header>

              <Card.Meta textAlign="center">
                28th March 2018 at 10:00 PM
              </Card.Meta>
            </Card.Content>
          </Card>
        </Card.Group>
      </Segment>
    </Grid.Column>
  )
}

export default UserDetailedPosts