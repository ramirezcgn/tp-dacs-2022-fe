import { createReducer } from 'utils';
import { sessionActions } from '_constants';
import { initialState } from './initialState';

const { session } = initialState;

export const loginReducer = createReducer(session, {
  [sessionActions.SET_CURRENT_USER_INFO]: (state: any, { user }: any) => ({
    ...state,
    currentUser: user,
  }),
});

export const logoutReducer = createReducer(initialState, {
  [sessionActions.LOGOUT]: (state: any) => ({
    ...state,
    session,
  }),
});
