import { ADD_TO_CART, REMOVE_FROM_CART, SAVE_SHIPPING_ADDRESS, ADD_PAYMENT_METHOD } from '../constants/cartConstants';
import { ERROR } from '../constants/errorConstants';
import setCartData from '../../utilities/setCartData';

const initialState = {
  productsInCart: [],
  shippingAddress: null,
  paymentMethod: null
};


const storeCartDataInStorage = async (data) => {

    await setCartData(data); 
}

export default (state = initialState, action) => {
  const { type, payload } = action;
  let arr = [];

  switch (type) {
    case ADD_TO_CART:
      console.log(payload);
      arr = state.productsInCart.filter((v) => v._id != payload._id);
      console.log(arr);
      if (arr && arr.length != state.productsInCart.length) {
        return {
          ...state,
          productsInCart: [payload, ...arr],
        };
      } else if (arr.length == state.productsInCart.length) {
        return {
          ...state,
          productsInCart: [payload, ...state.productsInCart],
        };
      }

    case REMOVE_FROM_CART:
      arr = state.productsInCart.filter((v) => v._id != payload);
      return {
        ...state,
        productsInCart: [...arr],
      };

    case SAVE_SHIPPING_ADDRESS:
      return {
        ...state,
        shippingAddress: payload,
      };

    case ADD_PAYMENT_METHOD:
      return {
        ...state,
        paymentMethod: payload
      };
    default:
      return state;
  }
};
