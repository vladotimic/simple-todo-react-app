import axios from 'axios';

import {
  FETCH_USERS_FAILURE,
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
} from '../contants';

export const fetchUsers = () => async (dispatch, getState) => {
  dispatch({ type: FETCH_USERS_REQUEST });
  try {
    const { data } = await axios.get(
      'https://jsonplaceholder.typicode.com/users'
    );
    dispatch({ type: FETCH_USERS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: FETCH_USERS_FAILURE, payload: error.message });
  }
};
