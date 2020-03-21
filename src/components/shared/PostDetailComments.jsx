import React from "react"

import { 
  Segment, 
  Header, 
  Comment, 
  CommentActions 
} from "semantic-ui-react"

export default function PostDetailComments() {
  return (
    <>
      <Segment
        textAlign="center"
        attached="top"
        inverted
        color="teal"

      >
        <Header content="Comments" />
      </Segment>

      <Segment attached>
        <Comment.Group>
          <Comment>
            <Comment.Avatar src=""/>

            <Comment.Content>
              <Comment.Author as="a">Jon</Comment.Author>

              <Comment.Metadata>
                Today at 6:00 am
              </Comment.Metadata>

              <Comment.Text>
                Test comm
              </Comment.Text>

              <CommentActions>
                <Comment.Action>
                  Reply
                </Comment.Action>
              </CommentActions>
            </Comment.Content>
          </Comment>

          <Comment>
            <Comment.Avatar src="" />

            <Comment.Content>
              <Comment.Author as="a">Jon</Comment.Author>

              <Comment.Metadata>
                Today at 6:00 am
              </Comment.Metadata>

              <Comment.Text>
                Test comm
              </Comment.Text>

              <CommentActions>
                <Comment.Action>
                  Reply
                </Comment.Action>
              </CommentActions>
            </Comment.Content>
          </Comment>
        </Comment.Group>
      </Segment>
    </>
  )
}
