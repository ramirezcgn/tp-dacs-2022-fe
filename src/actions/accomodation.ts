import axios from 'axios';
import { apiHost, requestActions } from '_constants';

export const getAccomodations = () => async (dispatch: Function) => {
  const response = await axios.get(apiHost + '/api/accomodation/');

  dispatch({
    type: requestActions.REQUEST,
    user: response.data.accomodations,
  });

  return response.data.accomodations;
};

export const getAccomodation = (id) => async (dispatch: Function) => {
  const response = await axios.get(apiHost + '/api/accomodation/' + id);

  dispatch({
    type: requestActions.REQUEST,
    user: response.data.accomodation,
  });

  return response.data.accomodation;
};

export const createAccomodation = (data) => async (dispatch: Function) => {
  const response = await axios.post(apiHost + '/api/accomodation/', data);

  dispatch({
    type: requestActions.REQUEST,
    user: response.data.accomodation,
  });

  return response.data.accomodation;
};

export const deleteAccomodation = (id) => async (dispatch: Function) => {
  const response = await axios.delete(apiHost + '/api/accomodation/' + id);

  dispatch({
    type: requestActions.REQUEST,
    user: response.data.message,
  });

  return response.data.message;
};

export const updateAccomodation = (id, data) => async (dispatch: Function) => {
  const response = await axios.put(apiHost + '/api/accomodation/' + id, data);

  dispatch({
    type: requestActions.REQUEST,
    user: response.data.accomodation,
  });

  return response.data.accomodation;
};

