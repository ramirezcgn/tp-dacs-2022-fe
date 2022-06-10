import { createReducer } from 'utils';
import { requestActions } from '_constants';
import { initialState } from './initialState';

const { requests } = initialState;

const changeRequestState = (state: any, actionType: string, offset: number) => {
  const newState = { ...state };
  if (actionType) {
    if (!newState[actionType]) {
      if (offset > 0) {
        newState[actionType] = offset;
      }
    } else {
      newState[actionType] += offset;
    }
  }
  return newState;
};

export const requestReducer = createReducer(requests, {
  [requestActions.REQUEST]: (state: any, { actionType }: any) =>
    changeRequestState(state, actionType, 1),
  [requestActions.SUCCESS]: (state: any, { actionType }: any) =>
    changeRequestState(state, actionType, -1),
});
