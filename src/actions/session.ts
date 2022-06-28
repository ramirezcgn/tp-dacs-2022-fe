import axios from 'axios';
import { apiHost, sessionActions } from '_constants';

export const getCurrentUserInfo = () => async (dispatch: Function) => {
  const response = await axios.get(apiHost + '/api/users/me');

  dispatch({
    type: sessionActions.SET_CURRENT_USER_INFO,
    user: response.data.data,
  });

  return response.data.data;
};

export const logIn = (loginDetails: any) => async (dispatch: Function) => {
  const response = await axios.post(apiHost + '/api/login', loginDetails);

  dispatch({
    type: sessionActions.SET_CURRENT_USER_INFO,
    user: response.data.data,
  });

  return response.data.data;
};

export const signUp = (signUpDetails: any) => async (dispatch: Function) => {
  const response = await axios.post(apiHost + '/api/signup', signUpDetails);
  if (response) {
    dispatch({
      type: sessionActions.SET_CURRENT_USER_INFO,
      user: response.data.data,
    });
  }
  return response.data.data;
};

export const logOut = () => async (dispatch: Function) => {
  await axios.get(apiHost + '/api/logout');

  dispatch({
    type: sessionActions.LOGOUT,
  });
};

export const forgotPassword = (values: any) => async (dispatch: Function) => {
  await axios.post(apiHost + '/api/forgot-password', values);

  dispatch({
    type: sessionActions.FORGOT_PASSWORD,
  });
};

export const passwordReset =
  (values: any, token: string) => async (dispatch: Function) => {
    await axios.post(apiHost + '/api/reset-password', {
      ...values,
      token,
    });

    dispatch({
      type: sessionActions.RESET_PASSWORD,
    });
  };
