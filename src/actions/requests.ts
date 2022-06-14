import { requestActions } from '_constants';

export const makeRequest =
  (actionType: string, requestCall: Function) =>
  async (dispatch: Function): Promise<any> => {
    dispatch({ type: requestActions.REQUEST, actionType });
    try {
      const data = await requestCall();
      dispatch({ type: requestActions.SUCCESS, actionType });
      return data;
    } catch (error) {
      dispatch({ type: requestActions.FAILED, error });
      throw error;
    }
  };
