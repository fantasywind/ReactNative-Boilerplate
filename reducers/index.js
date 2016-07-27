import {
  combineReducers,
} from 'redux';
import {
  routerReducer,
} from 'react-router-redux';

import Auth from './Auth.js';

export default combineReducers({
  Auth,
  routing: routerReducer,
});
