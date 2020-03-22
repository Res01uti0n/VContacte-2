import React, { useState } from "react"

import { Segment, Grid, Icon, Button } from "semantic-ui-react"

import Map from "./Map"

export default function PostDetailMain({post}) {
  const [isMapOpen, setIsMapOpen] = useState(false)

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
            <Button 
              onClick={() => setIsMapOpen(!isMapOpen)} 
              color="teal" 
              size="tiny" 
              content={isMapOpen ? "Hide map" : "Show map"} 
            />
          </Grid.Column>
        </Grid>
      </Segment>

      {isMapOpen && (
        <Map lat={post.venueLatLng.lat} lng={post.venueLatLng.lng} />
      )}
    </Segment.Group>
  );
}
