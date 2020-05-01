import React, { useCallback, useMemo } from "react";
import { useFirestoreConnect } from "react-redux-firebase";
import { useSelector } from "react-redux";

import {
  Header,
  Segment,
  Feed,
  Sticky,
  Icon,
  Divider,
} from "semantic-ui-react";

import EventActivityItem from "../../../components/event/eventActivity/EventActivityItem";

const EventActivity = ({ contextRef }) => {
  const query = useMemo(
    () => ({
      collection: "activity",
      orderBy: ["timestamp", "desc"],
      limit: 5,
      storeAs: "activity",
    }),
    []
  );

  useFirestoreConnect(query);

  const activitySelector = useCallback(
    (state) => state.firestore.ordered.activity,
    []
  );

  const activities = useSelector(activitySelector);

  return (
    <Sticky context={contextRef} offset={100} styleElement={{ zIndex: 0 }}>
      <Header attached="top" textAlign="center" icon as="h3">
        <Icon color="yellow" inverted name="newspaper" />
        <Header.Content>Recent Activity</Header.Content>
      </Header>

      <Segment attached>
        <Feed>
          {activities &&
            activities.map((activity) => (
              <>
                <EventActivityItem key={activity.id} activity={activity} />
                <Divider />
              </>
            ))}
        </Feed>
      </Segment>
    </Sticky>
  );
};

export default EventActivity;
