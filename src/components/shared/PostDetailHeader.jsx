import React from "react"
import { Link } from "react-router-dom"
import { format } from "date-fns"
import { parseISO } from "date-fns/esm"

import { 
  Segment, 
  Image, 
  Item, 
  ItemContent, 
  Header, 
  Button 
} from "semantic-ui-react"

export default function PostDetailHeader({post}) {
  return (
    <Segment.Group>
      <Segment basic attached="top">
        <Image src="" fluid/>

        <Segment basic>
          <Item.Group>
            <Item>
              <ItemContent>
                <Header 
                  size="huge"
                  content={post.title}
                />

                <p>{post.date /*&& format(parseISO(post.date, "EEEE do LLL"))*/}</p>

                <p>{post.postedBy}</p>
              </ItemContent>
            </Item>
          </Item.Group>
        </Segment>
      </Segment>

      <Segment attached="bottom">
        <Button color="red">
          Cancel
        </Button>

        <Button color="teal">
          Join
        </Button>

        <Button as={Link} to={`/manage/${post.id}`} color="orange" floated="right">
          Manage
        </Button>
      </Segment>
    </Segment.Group>
  )
}
