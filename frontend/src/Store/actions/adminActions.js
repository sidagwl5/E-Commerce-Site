import {
  GET_USER_LIST_REQUEST,
  GET_USER_LIST_SUCCESS,
} from '../constants/userListConstants';
import { ERROR } from '../constants/errorConstants';
import axios from '../../utilities/axios';
import errorHandler from '../../utilities/errorHandler';

export const getUserList = () => async (dispatch) => {
  try {
    dispatch({
      type: GET_USER_LIST_REQUEST,
      payload: [],
    });

    const { data } = await axios({
      method: 'GET',
      url: 'api/user/userList',
    });

    dispatch({
      type: GET_USER_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    errorHandler(ERROR, error);
  }
};

export const deleteUser = (id) => async (dispatch) => {
  try {
    await axios({
      method: 'DELETE',
      url: `api/user/${id}`,
    });

    dispatch(getUserList());
  } catch (error) {
    errorHandler(ERROR, error);
  }
};
