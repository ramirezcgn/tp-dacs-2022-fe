import axios from 'axios';
import { apiHost, requestActions } from '_constants';

export const getPaymentplans = () => async (dispatch: Function) => {
  const response = await axios.get(apiHost + '/api/paymentplan/');

  dispatch({
    type: requestActions.REQUEST,
    user: response.data.paymentplan,
  });

  return response.data.paymentplan;
};

export const getPaymentplan = (id) => async (dispatch: Function) => {
  const response = await axios.get(apiHost + '/api/paymentplan/' + id);

  dispatch({
    type: requestActions.REQUEST,
    user: response.data.paymentplan,
  });

  return response.data.paymentplan;
};

export const createPaymentplan = (data) => async (dispatch: Function) => {
  const response = await axios.post(apiHost + '/api/paymentplan/', data);

  dispatch({
    type: requestActions.REQUEST,
    user: response.data.paymentplan,
  });

  return response.data.paymentplan;
};

export const deletePaymentplan = (id) => async (dispatch: Function) => {
  const response = await axios.delete(apiHost + '/api/paymentplan/' + id);

  dispatch({
    type: requestActions.REQUEST,
    user: response.data.message,
  });

  return response.data.message;
};

export const updatePaymentplan = (id, data) => async (dispatch: Function) => {
  const response = await axios.put(apiHost + '/api/paymentplan/' + id, data);

  dispatch({
    type: requestActions.REQUEST,
    user: response.data.paymentplan,
  });

  return response.data.paymentplan;
};

