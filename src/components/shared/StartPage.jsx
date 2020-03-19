import React from "react"
import { Segment, Container, Header, Button, Icon } from "semantic-ui-react"

export default function StartPage({history}) {
  return (
    <div>
      <Segment inverted textAlign="center" vertical>
        <Container text>
          <Header as="h1" inverted>
            Vcontacte
          </Header>

          <Button onClick={() => history.push("/posts")} size="huge" inverted>
            Get started
            <Icon name="right arrow" inverted/>
          </Button>
        </Container>
      </Segment>
    </div>
  )
}