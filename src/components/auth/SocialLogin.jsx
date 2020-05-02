import React from "react";

import { Button } from "semantic-ui-react";

const SocialLogin = ({ socialLogin }) => {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Button
        onClick={() => socialLogin("github")}
        type="button"
        circular
        color="black"
        icon="github"
        size="big"
        disabled
      />

      <Button
        onClick={() => socialLogin("google")}
        type="button"
        circular
        color="google plus"
        icon="google plus"
        size="big"
      />
    </div>
  );
};

export default SocialLogin;
