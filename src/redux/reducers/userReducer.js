import { createReducer } from "../../utils/reducerUtils";
import { GET_USER_EVENTS } from "../constants/userConstants";

const initialState = {
  events: [],
};

const getUserEvents = (state, payload) => {
  return {
    ...state,
    events: payload.events,
  };
};

export default createReducer(initialState, {
  [GET_USER_EVENTS]: getUserEvents,
});
