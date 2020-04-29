import React from "react";

import {
  Container,
  Segment,
  Header,
  Image,
  Button,
  Icon,
} from "semantic-ui-react";

const StartPage = ({ history }) => {
  return (
    <Segment inverted textAlign="center" vertical className="masthead">
      <Container text>
        <Header as="h1" color="yellow" inverted>
          <Image size="massive" src="assets/logo.svg" style={{marginTop: "-20px"}} />
          Vcontacte
        </Header>

        <Header
          inverted
          sub
          content={"Experimental version of the Vcontacte site."}
        />

        <Button
          onClick={() => history.push("/events")}
          size="huge"
          inverted
          color="yellow"
          style={{ marginTop: 20 }}
        >
          Get started
          <Icon color="yellow" style={{ marginLeft: 5 }} name="sign-in" inverted />
        </Button>
      </Container>
    </Segment>
  );
};

export default StartPage;
