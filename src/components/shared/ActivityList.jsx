import React from "react"

import { Header, Segment } from "semantic-ui-react"

export default function ActivityList() {
  return (
    <>
      <Header attached="top" content="Recent Activity" />

      <Segment attached>
        <p>Recent activity</p>
      </Segment>
    </>
  )
}
