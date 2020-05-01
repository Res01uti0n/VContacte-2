import React from "react";
import { useSelector } from "react-redux";
import { NavLink, Link, useHistory } from "react-router-dom";
import { useFirebase } from "react-redux-firebase";

import { Menu, Container, Icon } from "semantic-ui-react";

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
    <Menu inverted tabular fixed="top">
      <Container>
        <Menu.Item as={Link} to="/" header>
          <img src="/assets/logo.svg" alt="logo" />
          Vcontacte Alpha
        </Menu.Item>

        <Menu.Item
          as={NavLink}
          exact
          icon="calendar"
          to="/events"
          name="Events"
        />

        {authenticated && (
          <>
            <Menu.Item icon="users" as={NavLink} to="/people" name="People" />
            <Menu.Item
              icon="add"
              as={NavLink}
              to="/createEvent"
              name="Create Event"
            />
          </>
        )}

        <Menu.Item
          as="a"
          href="https://github.com/Res01uti0n"
          target={"_blank"}
        >
          <Icon
            name={"bug"}
            size={"large"}
            style={{ marginLeft: 5, color: "orange" }}
          />
          Report a Bug
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
