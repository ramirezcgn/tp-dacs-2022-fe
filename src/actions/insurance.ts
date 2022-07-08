import axios from 'axios';
import { apiHost, requestActions } from '_constants';

export const getIsurances = () => async (dispatch: Function) => {
  const response = await axios.get(apiHost + '/api/insurance/');

  dispatch({
    type: requestActions.REQUEST,
    user: response.data.insurances,
  });

  return response.data.insurances;
};

export const getInsurance = (id) => async (dispatch: Function) => {
  const response = await axios.get(apiHost + '/api/insurance/' + id);

  dispatch({
    type: requestActions.REQUEST,
    user: response.data.insurance,
  });

  return response.data.insurance;
};

export const createInsurance = (data) => async (dispatch: Function) => {
  const response = await axios.post(apiHost + '/api/insurance/', data);

  dispatch({
    type: requestActions.REQUEST,
    user: response.data.insurance,
  });

  return response.data.insurance;
};

export const deleteInsurance = (id) => async (dispatch: Function) => {
  const response = await axios.delete(apiHost + '/api/insurance/' + id);

  dispatch({
    type: requestActions.REQUEST,
    user: response.data.message,
  });

  return response.data.message;
};

export const updateInsurance = (id, data) => async (dispatch: Function) => {
  const response = await axios.put(apiHost + '/api/insurance/' + id, data);

  dispatch({
    type: requestActions.REQUEST,
    user: response.data.insurance,
  });

  return response.data.insurance;
};

