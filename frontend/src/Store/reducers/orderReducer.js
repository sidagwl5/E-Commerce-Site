import {
    ADD_ORDER_SUCCESS, 
    ADD_ORDER_REQUEST,
    ORDER_DETAILS_REQUEST,
    ORDER_DETAILS_SUCCESS
} from '../constants/orderConstants';

export const createOrder = (state = null, action) => {
  const { type, payload } = action;

  switch (type) {
      case ADD_ORDER_REQUEST:
          return payload;

      case ADD_ORDER_SUCCESS:
          return { ...payload }
    default:
      return state;
  }
};

export const getOrderDetails = (state = {}, action) => {

    const { type, payload } = action;

    switch (type) {
      case ORDER_DETAILS_REQUEST:
        return payload;

      case ORDER_DETAILS_SUCCESS:
        return { ...payload }
      default:
        return state;
    }
}
