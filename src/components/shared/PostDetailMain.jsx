import React from "react"

import { Segment, Grid, Icon, Button } from "semantic-ui-react"

export default function PostDetailMain({post}) {
  return (
    <Segment.Group>
      <Segment attached="top">
        <Grid>
          <Grid.Column width={1}>
            <Icon size="large" name="info" color="teal" />
          </Grid.Column>

          <Grid.Column width={15}>
            <p>{post.description}</p>
          </Grid.Column>
        </Grid>
      </Segment>

      <Segment attached>
        <Grid verticalAlign="middle">
          <Grid.Column width={1}>
            <Icon size="large" name="calendar" color="teal" />
          </Grid.Column>

          <Grid.Column width={15}>
            <p>{post.date}</p>
          </Grid.Column>
        </Grid>
      </Segment>

      <Segment attached>
        <Grid verticalAlign="middle">
          <Grid.Column width={1}>
            <Icon size="large" name="marker" color="teal" />
          </Grid.Column>

          <Grid.Column width={11}>
            <p>{post.venue}</p>
          </Grid.Column>

          <Grid.Column width={4}>
            <Button color="teal" size="tiny" content="Show map" />
          </Grid.Column>
        </Grid>
      </Segment>
    </Segment.Group>
  )
}
