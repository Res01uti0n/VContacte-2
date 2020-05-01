import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import { Menu, Dropdown, Image, Divider } from "semantic-ui-react";

const SignedInMenu = ({ signOut }) => {
  const profile = useSelector((state) => state.firebase.profile, []);
  const auth = useSelector((state) => state.firebase.auth, []);

  return (
    <Menu.Item position="right">
      <Image
        avatar
        spaced="right"
        src={profile.photoURL || "/assets/user.png"}
      />

      <Dropdown pointing="top right" text={profile.displayName}>
        <Dropdown.Menu>
          <Divider fitted />
          <Dropdown.Item
            text="Create Event"
            as={Link}
            to="/createEvent"
            icon="plus"
          />
          <Divider fitted />

          <Dropdown.Item
            text="My Network"
            as={Link}
            to="/people"
            icon="users"
          />
          <Divider fitted />

          <Dropdown.Item
            as={Link}
            to={`/profile/${auth.uid}`}
            text="My Profile"
            icon="user"
          />
          <Divider fitted />

          <Dropdown.Item
            as={Link}
            to="/settings"
            text="Settings"
            icon="settings"
          />
          <Divider fitted />
          <Dropdown.Item onClick={signOut} text="Sign Out" icon="power" />
          <Divider fitted />
        </Dropdown.Menu>
      </Dropdown>
    </Menu.Item>
  );
};

export default SignedInMenu;
