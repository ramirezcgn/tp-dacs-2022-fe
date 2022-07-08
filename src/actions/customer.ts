import axios from 'axios';
import { apiHost, requestActions } from '_constants';

export const getCustomers = () => async (dispatch: Function) => {
  const response = await axios.get(apiHost + '/api/customer/');

  dispatch({
    type: requestActions.REQUEST,
    user: response.data.customers,
  });

  return response.data.customers;
};

export const getCustomer = (id) => async (dispatch: Function) => {
  const response = await axios.get(apiHost + '/api/customer/' + id);

  dispatch({
    type: requestActions.REQUEST,
    user: response.data.customer,
  });

  return response.data.customer;
};

export const createCustomer = (data) => async (dispatch: Function) => {
  const response = await axios.post(apiHost + '/api/customer/', data);

  dispatch({
    type: requestActions.REQUEST,
    user: response.data.customer,
  });

  return response.data.customer;
};

export const deleteCustomer = (id) => async (dispatch: Function) => {
  const response = await axios.delete(apiHost + '/api/customer/' + id);

  dispatch({
    type: requestActions.REQUEST,
    user: response.data.message,
  });

  return response.data.message;
};

export const updateCustomer = (id, data) => async (dispatch: Function) => {
  const response = await axios.put(apiHost + '/api/customer/' + id, data);

  dispatch({
    type: requestActions.REQUEST,
    user: response.data.customer,
  });

  return response.data.customer;
};

/*
  'POST /customer/:id/bookPackage/:pk': 'CustomerController.bookPackage',
  'POST /customer/sendAdvertising/': 'CustomerController.sendAdvertising',
  */
