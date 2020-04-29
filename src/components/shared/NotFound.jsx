import React from "react";
import { useHistory } from "react-router-dom";

import { Segment, Button, Header, Icon } from "semantic-ui-react";

const NotFound = () => {
  const history = useHistory();

  return (
    <Segment placeholder>
      <Header icon>
        <Icon name="search" />
        Oops - we've looked everywhere but couldn't find this.
      </Header>

      <Segment.Inline>
        <Button onClick={() => history.push("/events")} primary>
          Return to Events page
        </Button>
      </Segment.Inline>
    </Segment>
  );
};

export default NotFound;
