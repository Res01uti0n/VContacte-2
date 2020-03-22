import React from "react"
import GoogleMapReact from "google-map-react"

import { Segment, Icon } from "semantic-ui-react";

const Marker = () => <Icon name="marker" size="tiny" color="red" />

export default function Map({lat, lng}) {
  const zoom = 14

  return (
    <Segment attached="bottom">
      <div style={{ height: 300, width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "" }}
          defaultCenter={{lat, lng}}
          defaultZoom={zoom}
        >
          <Marker 
            lat={lat}
            lng={lng}
          />
        </GoogleMapReact>
      </div>
    </Segment>
  );
}
