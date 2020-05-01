import React from "react";
import { Link } from "react-router-dom";
import { format } from "date-fns";

import { Item, Segment, Icon, List, Button, Label } from "semantic-ui-react";

import EventListAttendee from "./EventListAttendee";
import { objectToArray } from "../../../utils/helpers";

const EventListItem = ({ event }) => (
  <Segment.Group>
    <Segment>
      <Item.Group>
        <Item>
          <Item.Image size="tiny" circular src={event.hostPhotoURL} />

          <Item.Content>
            <Item.Header as={Link} to={`events/${event.id}`}>
              {event.title}
            </Item.Header>

            <Item.Description>
              Hosted by{" "}
              <Link to={`/profile/${event.hostUid}`}>{event.hostedBy}</Link>
            </Item.Description>

            {event.cancelled && (
              <Label
                style={{ top: "-40px" }}
                ribbon="right"
                color="red"
                icon="warning"
                content="This event has been cancelled!"
              />
            )}
          </Item.Content>
        </Item>
      </Item.Group>
    </Segment>

    <Segment>
      <span>
        <Icon color="green" inverted name="clock" />{" "}
        {format(event.date && event.date.toDate(), "EEEE do LLLL")} at{" "}
        {format(event.date && event.date.toDate(), "HH:mm")}
        <br />
        <Icon color="green" inverted name="marker" /> {event.venue}
      </span>
    </Segment>

    <Segment secondary>
      <List horizontal>
        {event.attendees &&
          objectToArray(event.attendees).map((attendee) => (
            <EventListAttendee key={attendee.id} attendee={attendee} />
          ))}
      </List>
    </Segment>

    <Segment clearing>
      <span>{event.description}</span>

      <Button
        as={Link}
        to={`/events/${event.id}`}
        color="green"
        icon="eye"
        floated="right"
        content="View"
      />
    </Segment>
  </Segment.Group>
);

export default EventListItem;
