import React from "react";
import { Link } from "react-router-dom";

import { Button, Grid, Segment } from "semantic-ui-react";

const UserDetailSidebar = ({ isCurrentUser }) => {
  return (
    <Grid.Column width={4}>
      <Segment>
        {isCurrentUser ? (
          <Button
            as={Link}
            to="/settings"
            color="green"
            fluid
            basic
            content="Edit Profile"
            icon="edit"
          />
        ) : (
          <Button
            to="/settings"
            color="green"
            fluid
            basic
            content="Follow User"
            icon="eye"
          />
        )}
      </Segment>
    </Grid.Column>
  );
};

export default UserDetailSidebar;
