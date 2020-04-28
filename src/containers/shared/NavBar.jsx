import React from "react";
import { useSelector } from "react-redux";
import { NavLink, Link, useHistory } from "react-router-dom";
import { useFirebase } from "react-redux-firebase";

import { Menu, Container, Button, Icon } from "semantic-ui-react";

import SignedOutMenu from "./menu/SignedOutMenu";
import SignedInMenu from "./menu/SignedInMenu";

const NavBar = () => {
  const firebase = useFirebase();
  const auth = useSelector((state) => state.firebase.auth, []);
  const history = useHistory();

  const handleLogout = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        history.push("/");
      });
  };

  const authenticated = auth.isLoaded && !auth.isEmpty;

  return (
    <Menu inverted fixed="top">
      <Container>
        <Menu.Item as={Link} to="/" header>
          <img src="/assets/logo.png" alt="logo" />
          Vcontacte Alpha
        </Menu.Item>

        <Menu.Item as={NavLink} exact to="/events" name="Events" />

        {authenticated && (
          <>
            <Menu.Item as={NavLink} to="/test" name="Test" />
            <Menu.Item as={NavLink} to="/people" name="People" />
            <Menu.Item>
              <Button
                as={Link}
                to="/createEvent"
                floated="right"
                positive
                inverted
                content="Create Event"
              />
            </Menu.Item>
          </>
        )}

        <Menu.Item position={"right"} as="a" href="" target={"_blank"}>
          Report a Bug
          <Icon
            name={"bug"}
            size={"large"}
            style={{ marginLeft: 5, color: "orange" }}
          />
        </Menu.Item>

        {authenticated ? (
          <SignedInMenu signOut={handleLogout} />
        ) : (
          <SignedOutMenu />
        )}
      </Container>
    </Menu>
  );
};

export default NavBar;
