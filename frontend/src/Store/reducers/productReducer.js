import {
  PRODUCT_LIST_FAIL,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_REQUEST,
  PRODUCT_SUCCESS,
  PRODUCT_REQUEST,
  PRODUCT_FAIL
} from '../constants/productConstants';

const initialState = {
  products: [],
  singleProductInfo: null,
};

export const productListReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case PRODUCT_LIST_REQUEST:
      return {
        ...state,
        products: [],
      };
    case PRODUCT_LIST_SUCCESS:
      return {
        ...state,
        products: payload,
      };
    case PRODUCT_LIST_FAIL:
      return {
        ...state,
        products: [],
      };

    case PRODUCT_SUCCESS:
      return {
        ...state,
        singleProductInfo: payload,
      };

    case PRODUCT_FAIL:
      return {
        ...state,
        singleProductInfo: null,
      };

    case PRODUCT_REQUEST:
      return {
        ...state,
        singleProductInfo: null,
      };

    default:
      return state;
  }
};
