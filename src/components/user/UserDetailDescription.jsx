import React from "react";
import { format } from "date-fns";

import { Grid, Header, Icon, Item, List, Segment } from "semantic-ui-react";

const UserDetailDescription = ({ profile }) => {
  let createdAt;

  if (profile.createdAt) {
    createdAt = format(profile.createdAt.toDate(), "d LLL yyyy");
  }

  return (
    <Grid.Column width={12}>
      <Segment>
        <Grid columns={2}>
          <Grid.Column width={10}>
            <Header
              color="green"
              icon="smile"
              content={`About ${profile.displayName}`}
            />

            <p>
              I am a: <strong>{profile.occupation || "tbn"}</strong>
            </p>

            <p>
              Originally from <strong>{profile.origin || "tbn"}</strong>
            </p>

            <p>
              Member Since: <strong>{createdAt}</strong>
            </p>

            <p>Description of user</p>
          </Grid.Column>

          <Grid.Column width={6}>
            <Header color="green" icon="heart outline" content="Interests" />

            {profile.interests ? (
              <List>
                {profile.interests &&
                  profile.interests.map((interest, index) => (
                    <Item key={index}>
                      <Icon color="green" name="heart" />
                      <Item.Content>{interest}</Item.Content>
                    </Item>
                  ))}
              </List>
            ) : (
              <p>No interests</p>
            )}
          </Grid.Column>
        </Grid>
      </Segment>
    </Grid.Column>
  );
};

export default UserDetailDescription;
