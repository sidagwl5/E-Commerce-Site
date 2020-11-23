import {
  ADD_ORDER_REQUEST,
  ADD_ORDER_SUCCESS,
  ORDER_DETAILS_SUCCESS,
  ORDER_DETAILS_REQUEST
} from '../constants/orderConstants';
import { ERROR } from '../constants/errorConstants';
import axios from '../../utilities/axios';
import errorHandler from '../../utilities/errorHandler';

export const addOrderActionCreator = (orderData) => async (
  dispatch,
  getState
) => {
  try {
    dispatch({
      type: ADD_ORDER_REQUEST,
      payload: null,
    });

    const { data } = await axios({
      method: 'POST',
        url: 'api/order/',
        data: orderData
    });

    dispatch({
      type: ADD_ORDER_SUCCESS,
      payload: data,
    });
  } catch (error) {
    console.log(error);
    errorHandler(ERROR, error);
  }
};


export const getOrderDetailsActionCreator = (id) => async (
  dispatch,
  getState
) => {
  try {
    dispatch({
      type: ORDER_DETAILS_REQUEST,
      payload: {},
    });

    const { data } = await axios({
      method: 'GET',
      url: `api/order/${id}`,
    });

    dispatch({
      type: ORDER_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    console.log(error);
    errorHandler(ERROR, error);
  }
};
