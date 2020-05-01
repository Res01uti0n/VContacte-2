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
            color="teal"
            fluid
            basic
            content="Edit Profile"
          />
        ) : (
          <Button
            to="/settings"
            color="teal"
            fluid
            basic
            content="Follow User"
          />
        )}
      </Segment>
    </Grid.Column>
  );
};

export default UserDetailSidebar;