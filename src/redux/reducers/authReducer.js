import { createReducer } from "../../utils/reducerUtils";
import { LOGIN_USER, SIGN_OUT_USER } from "../constants/authConstants";

const initialState = {
  currentUser: {},
};

export const loginUser = (state, payload) => {
  return {
    ...state,
    authenticated: true,
    currentUser: payload.creds.email,
  };
};

export const signOutUser = (state) => {
  return {
    ...state,
    authenticated: false,
    currentUser: {},
  };
};

export default createReducer(initialState, {
  [LOGIN_USER]: loginUser,
  [SIGN_OUT_USER]: signOutUser,
});
