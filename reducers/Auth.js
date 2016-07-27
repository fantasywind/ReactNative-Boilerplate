import {
  LOGIN_SUCCESS,
  LOGOUT,
} from '../actions/Auth.js';

export default (state = {
  isLogined: false,
}, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return Object.assign({}, state, {
        isLogined: true,
      });

    case LOGOUT:
      return Object.assign({}, state, {
        isLogined: false,
      });

    default:
      return state;
  }
};
