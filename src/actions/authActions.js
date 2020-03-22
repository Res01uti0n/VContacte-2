import { SIGN_OUT_USER, SIGN_IN_USER } from "./authConstants"
import { closeModal } from "./modalActions"

export const signIn = creds => {
  return dispatch => {
    dispatch({
      type: SIGN_IN_USER,
      payload: { creds }
    })
    dispatch(closeModal())
  }
}

export const signOut = () => {
  return {
    type: SIGN_OUT_USER
  }
}