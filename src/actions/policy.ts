import axios from 'axios';
import { apiHost, requestActions } from '_constants';

export const getPolicies = () => async (dispatch: Function) => {
  const response = await axios.get(apiHost + '/api/policy/');

  dispatch({
    type: requestActions.REQUEST,
    user: response.data.policies,
  });

  return response.data.policies;
};

export const getPolicy = (id) => async (dispatch: Function) => {
  const response = await axios.get(apiHost + '/api/policy/' + id);

  dispatch({
    type: requestActions.REQUEST,
    user: response.data.policy,
  });

  return response.data.policy;
};

export const createPolicy = (data) => async (dispatch: Function) => {
  const response = await axios.post(apiHost + '/api/policy/', data);

  dispatch({
    type: requestActions.REQUEST,
    user: response.data.policy,
  });

  return response.data.policy;
};

export const deletePolicy = (id) => async (dispatch: Function) => {
  const response = await axios.delete(apiHost + '/api/policy/' + id);

  dispatch({
    type: requestActions.REQUEST,
    user: response.data.message,
  });

  return response.data.message;
};

export const updatePolicy = (id, data) => async (dispatch: Function) => {
  const response = await axios.put(apiHost + '/api/policy/' + id, data);

  dispatch({
    type: requestActions.REQUEST,
    user: response.data.policy,
  });

  return response.data.policy;
};
