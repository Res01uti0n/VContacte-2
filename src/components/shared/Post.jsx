import React from "react"

import { 
  Segment, 
  Item, 
  Icon, 
  List, 
  Button
} from "semantic-ui-react"

import LikeList from "./LikeList"

export default function Post({post, handleSelectPost, handleDeletePost}) {
  return (
    <Segment.Group>
      <Segment>
        <Item>
          <Item.Image size="tiny" circular src={post.hostPhotoURL} />

          <Item.Content>
            <Item.Header>{post.title}</Item.Header>
            <Item.Description>
              Posted by {post.hostedBy}
            </Item.Description>
          </Item.Content>
        </Item>
      </Segment>

      <Segment>
        <span>
          <Icon name="clock" />
          {post.date}
          <Icon name="marker" />
          {post.venue}
        </span>
      </Segment>

      <Segment secondary>
        <List horizontal>
          {post.like && post.like.map(user => <LikeList key={user.id} user={user} />)}
        </List>
      </Segment>

      <Segment clearing>
        <Button
          onClick={() => handleDeletePost(post.id)}
          as="a"
          color="red"
          floated="right"
          content="Delete"
        />

        <Button 
          onClick={() => handleSelectPost(post)} 
          as="a" 
          color="teal" 
          floated="right" 
          content="View"
        />
      </Segment>
    </Segment.Group>
  )
}
