import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import mainReducer from './reducers'
import getUserData from '../utilities/getData';
import getCartData from '../utilities/getCartData';
import getShippingAddress from '../utilities/getShippingAddress';

const middleware = [thunk];

const userInfoFromStorage = getUserData() ? getUserData() : null
const cartInfoFromStorage = getCartData() ? getCartData() : []
const shippingAddressfromStorage = getShippingAddress() ? getShippingAddress() : null

const initialState = {
  loginUser: userInfoFromStorage,
  cart: {
    productsInCart: cartInfoFromStorage,
    shippingAddress: shippingAddressfromStorage
  },
};

const store = createStore(

    mainReducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
)


export default store;