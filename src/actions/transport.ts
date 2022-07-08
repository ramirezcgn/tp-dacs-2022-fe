import axios from 'axios';
import { apiHost, requestActions } from '_constants';

export const getTransports = () => async (dispatch: Function) => {
  const response = await axios.get(apiHost + '/api/transport/');

  dispatch({
    type: requestActions.REQUEST,
    user: response.data.transports,
  });

  return response.data.transports;
};

export const getTransport = (id) => async (dispatch: Function) => {
  const response = await axios.get(apiHost + '/api/transport/' + id);

  dispatch({
    type: requestActions.REQUEST,
    user: response.data.transport,
  });

  return response.data.transport;
};

export const createTransport = (data) => async (dispatch: Function) => {
  const response = await axios.post(apiHost + '/api/transport/', data);

  dispatch({
    type: requestActions.REQUEST,
    user: response.data.transport,
  });

  return response.data.transport;
};

export const deleteTransport = (id) => async (dispatch: Function) => {
  const response = await axios.delete(apiHost + '/api/transport/' + id);

  dispatch({
    type: requestActions.REQUEST,
    user: response.data.message,
  });

  return response.data.message;
};

export const updateTransport = (id, data) => async (dispatch: Function) => {
  const response = await axios.put(apiHost + '/api/transport/' + id, data);

  dispatch({
    type: requestActions.REQUEST,
    user: response.data.transport,
  });

  return response.data.transport;
};
