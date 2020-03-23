import React from "react"

import { Button, Icon } from "semantic-ui-react"

export default function SocialLogin({socialSignIn}) {
  return (
    <div>
      <Button 
        onClick={() => socialSignIn("facebook")} 
        type="button" 
        fluid 
        color="facebook"
      >
        <Icon name="facebook" />
        Login with Facebook
      </Button>

      <Button 
        onClick={() => socialSignIn("google")}
        type="button" 
        fluid 
        color="google plus"
      >
        <Icon name="google plus" />
        Login with Google
      </Button>
    </div>
  )
}
