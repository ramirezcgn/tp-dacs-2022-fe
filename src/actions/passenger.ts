import axios from 'axios';
import { apiHost, requestActions } from '_constants';

export const getPassengers = () => async (dispatch: Function) => {
  const response = await axios.get(apiHost + '/api/passenger/');

  dispatch({
    type: requestActions.REQUEST,
    user: response.data.passenger,
  });

  return response.data.passenger;
};

export const getPassenger = (id) => async (dispatch: Function) => {
  const response = await axios.get(apiHost + '/api/passenger/' + id);

  dispatch({
    type: requestActions.REQUEST,
    user: response.data.passenger,
  });

  return response.data.passenger;
};

export const createPassenger = (data) => async (dispatch: Function) => {
  const response = await axios.post(apiHost + '/api/passenger/', data);

  dispatch({
    type: requestActions.REQUEST,
    user: response.data.passenger,
  });

  return response.data.passenger;
};

export const deletePassenger = (id) => async (dispatch: Function) => {
  const response = await axios.delete(apiHost + '/api/passenger/' + id);

  dispatch({
    type: requestActions.REQUEST,
    user: response.data.message,
  });

  return response.data.message;
};

export const updatePassenger = (id, data) => async (dispatch: Function) => {
  const response = await axios.put(apiHost + '/api/passenger/' + id, data);

  dispatch({
    type: requestActions.REQUEST,
    user: response.data.passenger,
  });

  return response.data.passenger;
};
