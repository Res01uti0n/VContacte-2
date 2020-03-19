import React from "react"

import { List, Image } from "semantic-ui-react"

export default function LikeList({user}) {
  return (
    <List.Item>
      <Image as="a" circular size="mini" src={user.photoURL} />
    </List.Item>     
  )
}
