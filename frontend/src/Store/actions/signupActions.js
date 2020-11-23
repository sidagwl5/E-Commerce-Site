import { LOGIN_USER_SUCCESS, LOGOUT_USER } from '../constants/loginConstants';
import { ERROR } from '../constants/errorConstants';
import axios from '../../utilities/axios';
import setToken from '../../utilities/setToken';
import setData from '../../utilities/setData';
import errorHandler from '../../utilities/errorHandler';

export const signupUserActionCreator = (userData) => async (dispatch) => {
  try {
    const { data } = await axios({
      method: 'POST',
      url: 'api/user/signup',
      data: userData,
      headers: {
        'content-type': 'application/json',
      },
    });

    setToken(data.token);
    setData({
      email: data.email,
      password: data.password,
      name: data.name,
      isAdmin: data.isAdmin,
    });
    dispatch({ type: LOGIN_USER_SUCCESS, payload: data });
  } catch (error) {
    errorHandler(ERROR, error);
  }
};
