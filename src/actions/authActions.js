import { SIGN_OUT_USER, SIGN_IN_USER } from "./authConstants"

export const signIn = creds => {
  return {
    type: SIGN_IN_USER,
    payload: { creds }
  }
}

export const signOut = () => {
  return {
    type: SIGN_OUT_USER
  }
}