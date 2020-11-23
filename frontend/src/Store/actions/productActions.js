import {
  PRODUCT_REQUEST,
  PRODUCT_SUCCESS,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_FAIL,
  PRODUCT_FAIL,
} from '../constants/productConstants';
import { ERROR } from '../constants/errorConstants';
import axios from '../../utilities/axios';
import errorHandler from '../../utilities/errorHandler';

export const getProductsActionCreator = () => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_LIST_REQUEST, payload: {} });
    const { data } = await axios({
      method: 'GET',
      url: 'api/products',
    });

    dispatch({ type: PRODUCT_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: PRODUCT_LIST_FAIL, payload: {} });
    errorHandler(ERROR, error);
  }
};

export const getSingleProductActionCreator = (id) => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_REQUEST, payload: {} });
    const { data } = await axios({
      method: 'GET',
      url: `api/products/${id}`,
    });

    dispatch({ type: PRODUCT_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: PRODUCT_FAIL, payload: {} });
    errorHandler(ERROR, error);
  }
};
