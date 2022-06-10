import { combineReducers } from 'redux';
import reduceReducers from 'reduce-reducers';
import { createResponsiveStateReducer } from 'redux-responsive';
import { loginReducer, logoutReducer } from './session';
import { requestReducer } from './requests';
import { initialState } from './initialState';

const rootReducer = combineReducers({
  browser: createResponsiveStateReducer({
    extraSmall: 576,
    small: 768,
    medium: 992,
    large: 1200,
  }),
  session: loginReducer,
  requests: requestReducer,
});

export default reduceReducers(initialState, rootReducer, logoutReducer);
