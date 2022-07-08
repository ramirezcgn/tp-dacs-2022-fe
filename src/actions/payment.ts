import axios from 'axios';
import { apiHost, requestActions } from '_constants';

export const getPayments = () => async (dispatch: Function) => {
  const response = await axios.get(apiHost + '/api/payment/');

  dispatch({
    type: requestActions.REQUEST,
    user: response.data.payments,
  });

  return response.data.payments;
};

export const getPayment = (id) => async (dispatch: Function) => {
  const response = await axios.get(apiHost + '/api/payment/' + id);

  dispatch({
    type: requestActions.REQUEST,
    user: response.data.payment,
  });

  return response.data.payment;
};

export const createPayment = (data) => async (dispatch: Function) => {
  const response = await axios.post(apiHost + '/api/payment/', data);

  dispatch({
    type: requestActions.REQUEST,
    user: response.data.payment,
  });

  return response.data.payment;
};

export const deletePayment = (id) => async (dispatch: Function) => {
  const response = await axios.delete(apiHost + '/api/payment/' + id);

  dispatch({
    type: requestActions.REQUEST,
    user: response.data.message,
  });

  return response.data.message;
};

export const updatePayment = (id, data) => async (dispatch: Function) => {
  const response = await axios.put(apiHost + '/api/payment/' + id, data);

  dispatch({
    type: requestActions.REQUEST,
    user: response.data.payment,
  });

  return response.data.payment;
};
