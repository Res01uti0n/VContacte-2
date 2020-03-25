import React from "react"
import { differenceInYears } from "date-fns"
import LazyLoad from "react-lazyload"

import { Segment, Item, Header, Grid } from "semantic-ui-react"

const UserDetailedHeader = ({ profile }) => {
  const age =
    profile.dateOfBirth &&
    differenceInYears(Date.now(), profile.dateOfBirth.toDate())

  return (
    <Grid.Column width={16}>
      <Segment>
        <Item.Group>
          <Item>
            <LazyLoad
              height={150}
              placeholder={<Item.Image avatar size="small" src="default.png" />}
            >
              <Item.Image
                avatar
                size="small"
                src={profile.photoURL || "default.png"}
              />
            </LazyLoad>

            <Item.Content verticalAlign="bottom">
              <Header as="h1">{profile.displayName}</Header>
              <br />

              <Header as="h3">{profile.occupation}</Header>
              <br />

              <Header as="h3">
                {age || "unknown age"}, Lives in{" "}
                {profile.city || "unknown city"}
              </Header>
            </Item.Content>
          </Item>
        </Item.Group>
      </Segment>
    </Grid.Column>
  )
}

export default UserDetailedHeader