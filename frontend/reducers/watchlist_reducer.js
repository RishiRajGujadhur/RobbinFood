import merge from "lodash/merge";

import { RECEIVE_CURRENT_USER } from "../actions/session_actions";

const usersReducer = (state = {}, action) => {
  // debugger;
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return merge({}, state, {
        watchlists: action.currentUser.user.watchlists,
      });
    default:
      return state;
  }
};

export default usersReducer;
