import axios from 'axios';
import { actionTypes } from '_constants';
import { makeRequest } from './requests';

export const createUser =
  (
    username: string,
    password: string,
    first_name: string,
    last_name: string,
    email: string,
  ) =>
  async (dispatch: Function) => {
    const response = await dispatch(
      makeRequest(actionTypes.CREATE_USER, () =>
        axios.post('/api/signup', {
          username,
          password,
          first_name,
          last_name,
          email,
        }),
      ),
    );
    return response.data;
  };

export const updateUser =
  (slug: string, first_name: string, last_name: string, email: string) =>
  async (dispatch: Function) => {
    const response = await dispatch(
      makeRequest(actionTypes.SAVE_USER_SETTINGS, () =>
        axios.put(`/api/users/${slug}/update`, {
          slug,
          first_name,
          last_name,
          email,
        }),
      ),
    );
    return response.data;
  };

export const changePassword =
  (
    slug: string,
    old_password: string,
    new_password: string,
    new_password_confirmation: string,
  ) =>
  async (dispatch: Function) => {
    const response = await dispatch(
      makeRequest(actionTypes.CHANGE_USER_PASSWORD, () =>
        axios.put(`/api/users/${slug}/update-password`, {
          slug,
          old_password,
          new_password,
          new_password_confirmation,
        }),
      ),
    );
    return response.data;
  };

export const getUsers =
  (page: number, filters: any) => async (dispatch: Function) => {
    const response = await dispatch(
      makeRequest(actionTypes.GET_USERS, () =>
        axios.get('/api/useradmin', { params: { page, filters } }),
      ),
    );
    return response.data;
  };

export const deleteUser = (slug: string) => async (dispatch: Function) => {
  const response = await dispatch(
    makeRequest(actionTypes.DELETE_USER, () =>
      axios.put(`/api/users/${slug}/delete`, { slug }),
    ),
  );
  return response.data;
};
