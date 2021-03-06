import React from "react";
import { Link } from "react-router-dom";

import { Segment, Item, Label } from "semantic-ui-react";

const EventDetailSidebar = ({ attendees }) => {
  return (
    <div>
      <Segment
        textAlign="center"
        style={{ border: "none" }}
        attached="top"
        secondary
        inverted
        color="green"
      >
        {attendees && attendees.length}{" "}
        {attendees && attendees.length === 1 ? "Person" : "People"} going
      </Segment>

      <Segment attached>
        <Item.Group divided>
          {attendees &&
            attendees.map((attendee) => (
              <Item key={attendee.id} style={{ position: "relative" }}>
                {attendee.host && (
                  <Label
                    style={{ position: "absolute" }}
                    color="green"
                    ribbon="right"
                    icon="user"
                    content="Host"
                  />
                )}

                <Item.Image size="tiny" src={attendee.photoURL} />

                <Item.Content verticalAlign="middle">
                  <Item.Header as={Link} to={`/profile/${attendee.id}`}>
                    {attendee.displayName}
                  </Item.Header>
                </Item.Content>
              </Item>
            ))}
        </Item.Group>
      </Segment>
    </div>
  );
};

export default EventDetailSidebar;
