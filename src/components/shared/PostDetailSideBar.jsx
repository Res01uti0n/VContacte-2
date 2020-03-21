import React from "react"

import { Segment, Item, Label } from "semantic-ui-react"

export default function PostDetailSideBar({like}) {
  return (
    <>
      <Segment
        style={{marginTop: 100}}
        textAlign="center"
        attached="top"
        secondary
        inverted
        color="teal"
      >
        {like && like.length === 1 ? "Person": "People"}
      </Segment>

      <Segment attached>
        <Item.Group divided>
          {like && like.map( user => (
            <Item key={user.id}>
              <Label color="orange" ribbon="right">Host</Label>

              <Item.Image size="tiny" src={user.photoURL} />

              <Item.Content verticalAlign="middle">
                <Item.Header as="h3" content={user.name}/>
              </Item.Content>
            </Item>
          ))}
        </Item.Group>

      </Segment>
    </>
  )
}
