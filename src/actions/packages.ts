import axios from 'axios';
import { apiHost, requestActions } from '_constants';

export const getPackages = () => async (dispatch: Function) => {
  const response = await axios.get(apiHost + '/api/package/');

  dispatch({
    type: requestActions.REQUEST,
    user: response.data.packages,
  });

  return response.data.packages;
};

export const getPackage = (id) => async (dispatch: Function) => {
  const response = await axios.get(apiHost + '/api/package/' + id);

  dispatch({
    type: requestActions.REQUEST,
    user: response.data.package,
  });

  return response.data.package;
};

export const createPackage = (data) => async (dispatch: Function) => {
  const response = await axios.post(apiHost + '/api/package/', data);

  dispatch({
    type: requestActions.REQUEST,
    user: response.data.package,
  });

  return response.data.package;
};

export const deletePackage = (id) => async (dispatch: Function) => {
  const response = await axios.delete(apiHost + '/api/package/' + id);

  dispatch({
    type: requestActions.REQUEST,
    user: response.data.message,
  });

  return response.data.message;
};

export const updatePackage = (id, data) => async (dispatch: Function) => {
  const response = await axios.put(apiHost + '/api/package/' + id, data);

  dispatch({
    type: requestActions.REQUEST,
    user: response.data.package,
  });

  return response.data.package;
};
