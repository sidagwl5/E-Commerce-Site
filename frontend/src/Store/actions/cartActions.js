import { ADD_PAYMENT_METHOD, ADD_TO_CART, REMOVE_FROM_CART, SAVE_SHIPPING_ADDRESS } from '../constants/cartConstants';
import { ERROR } from '../constants/errorConstants';
import axios from '../../utilities/axios';
import setCartData from '../../utilities/setCartData';
import setShippingAddress from '../../utilities/setShippingAddress';
import errorHandler from '../../utilities/errorHandler';

export const addProductToCartActionCreator = (productId, qty) => async (
  dispatch,
  getState
) => {
  try {
    const { data } = await axios({
      method: 'GET',
      url: `api/products/${productId}`,
    });

    const { rating, reviews, numReviews, ...rest } = data;

    dispatch({
      type: ADD_TO_CART,
      payload: { ...rest, qty },
    });

    setCartData(getState().cart.productsInCart);
  } catch (error) {
    console.log(error);
    errorHandler(ERROR, error);
  }
};

export const removeProductFromCartActionCreator = (productId) => (
  dispatch,
  getState
) => {
  dispatch({
    type: REMOVE_FROM_CART,
    payload: productId,
  });

  setCartData(getState().cart.productsInCart);
};


export const saveShippingAddressActionCreator = (address) => (dispatch, getState) => {

  dispatch({      
    type: SAVE_SHIPPING_ADDRESS,
    payload: address
  })

  setShippingAddress(getState().cart.shippingAddress); 
}

export const addPaymentMethodActionCreator = (method) => (
  dispatch
) => {
  dispatch({
    type: ADD_PAYMENT_METHOD,
    payload: method,
  });

};
