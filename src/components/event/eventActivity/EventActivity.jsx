import React, { useCallback, useMemo } from "react";
import { useFirestoreConnect } from "react-redux-firebase";
import { useSelector } from "react-redux";

import { Header, Segment, Feed, Sticky } from "semantic-ui-react";

import EventActivityItem from "./EventActivityItem";

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
      <Header attached="top" content="Recent Activity" />
      
      <Segment attached>
        <Feed>
          {activities &&
            activities.map((activity) => (
              <EventActivityItem key={activity.id} activity={activity} />
            ))}
        </Feed>
      </Segment>
    </Sticky>
  );
};

export default EventActivity;
