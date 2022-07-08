import axios from 'axios';
import { apiHost, requestActions } from '_constants';

export const getTickets = () => async (dispatch: Function) => {
  const response = await axios.get(apiHost + '/api/ticket/');

  dispatch({
    type: requestActions.REQUEST,
    user: response.data.tickets,
  });

  return response.data.tickets;
};

export const getTicket = (id) => async (dispatch: Function) => {
  const response = await axios.get(apiHost + '/api/ticket/' + id);

  dispatch({
    type: requestActions.REQUEST,
    user: response.data.ticket,
  });

  return response.data.ticket;
};

export const createTicket = (data) => async (dispatch: Function) => {
  const response = await axios.post(apiHost + '/api/ticket/', data);

  dispatch({
    type: requestActions.REQUEST,
    user: response.data.ticket,
  });

  return response.data.ticket;
};

export const deleteTicket = (id) => async (dispatch: Function) => {
  const response = await axios.delete(apiHost + '/api/ticket/' + id);

  dispatch({
    type: requestActions.REQUEST,
    user: response.data.message,
  });

  return response.data.message;
};

export const updateTicket = (id, data) => async (dispatch: Function) => {
  const response = await axios.put(apiHost + '/api/ticket/' + id, data);

  dispatch({
    type: requestActions.REQUEST,
    user: response.data.ticket,
  });

  return response.data.ticket;
};
