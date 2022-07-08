import axios from 'axios';
import { apiHost, requestActions } from '_constants';

export const getBookings = () => async (dispatch: Function) => {
  const response = await axios.get(apiHost + '/api/booking/');

  dispatch({
    type: requestActions.REQUEST,
    user: response.data.bookings,
  });

  return response.data.bookings;
};

export const getBooking = (id) => async (dispatch: Function) => {
  const response = await axios.get(apiHost + '/api/booking/' + id);

  dispatch({
    type: requestActions.REQUEST,
    user: response.data.booking,
  });

  return response.data.booking;
};

export const createBooking = (data) => async (dispatch: Function) => {
  const response = await axios.post(apiHost + '/api/booking/', data);

  dispatch({
    type: requestActions.REQUEST,
    user: response.data.booking,
  });

  return response.data.booking;
};

/*export const createBooking = (data) => async (dispatch: Function) => {
  const response = await axios.post(apiHost + '/api/booking/', data);

    createPassenger??

  dispatch({
    type: requestActions.REQUEST,
    user: response.data.booking,
  });

  return response.data.booking;
};
*/

export const deleteBooking = (id) => async (dispatch: Function) => {
  const response = await axios.delete(apiHost + '/api/booking/' + id);

  dispatch({
    type: requestActions.REQUEST,
    user: response.data.message,
  });

  return response.data.message;
};

export const updateBooking = (id, data) => async (dispatch: Function) => {
  const response = await axios.put(apiHost + '/api/booking/' + id, data);

  dispatch({
    type: requestActions.REQUEST,
    user: response.data.booking,
  });

  return response.data.booking;
};

/*
  'POST /booking/:id/createPassenger/': 'BookingController.createPassenger',
  'POST /booking/:id/assignPassenger/:pd': 'BookingController.assignPassenger',
  */
