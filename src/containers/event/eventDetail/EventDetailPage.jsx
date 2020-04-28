import React from "react";
import { useSelector } from "react-redux";
import { useFirestoreConnect } from "react-redux-firebase";

import { Grid } from "semantic-ui-react";

import EventDetailHeader from "./EventDetailHeader";
import EventDetailInfo from "../../../components/event/eventDetail/EventDetailInfo";
import EventDetailChat from "./EventDetailChat";
import EventDetailSidebar from "../../../components/event/eventDetail/EventDetailSidebar";
import LoadingComponent from "../../../components/shared/LoadingComponent";
import { objectToArray } from "../../../utils/helpers";
import NotFound from "../../../components/shared/NotFound";

const EventDetailPage = ({ match: { params } }) => {
  useFirestoreConnect(`events/${params.id}`);

  const event = useSelector(
    (state) =>
      (state.firestore.ordered.events &&
        state.firestore.ordered.events.filter((e) => e.id === params.id)[0]) ||
      {},
    []
  );

  const auth = useSelector((state) => state.firebase.auth, []);

  const attendees =
    event &&
    event.attendees &&
    objectToArray(event.attendees).sort((a, b) => {
      return a.joinDate.toDate() - b.joinDate.toDate();
    });

  const isHost = event && event.hostUid === auth.uid;
  const isGoing = attendees && attendees.some((a) => a.id === auth.uid);
  const authenticated = auth.isLoaded && !auth.isEmpty;

  const loadingEvent = useSelector(
    (state) => state.firestore.status.requesting[`events/${params.id}`],
    []
  );

  if (loadingEvent) return <LoadingComponent />;

  if (Object.keys(event).length === 0) return <NotFound />;

  return (
    <Grid>
      <Grid.Column width={10}>
        <EventDetailHeader
          event={event}
          isHost={isHost}
          isGoing={isGoing}
          authenticated={authenticated}
        />

        <EventDetailInfo event={event} />

        {authenticated && <EventDetailChat eventId={event.id} />}
      </Grid.Column>

      <Grid.Column width={6}>
        <EventDetailSidebar attendees={attendees} />
      </Grid.Column>
    </Grid>
  );
};

export default EventDetailPage;
