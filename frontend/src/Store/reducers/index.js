import { productListReducer } from './productReducer';
import loadingReducer from './loadingReducer';
import loginReducer from './loginReducer';
import { combineReducers } from 'redux';
import errorReducer from './errorReducer';
import cartReducer from './cartReducer';
import { getOrderDetails, createOrder } from './orderReducer';
import { userListReducer } from './adminReducer';


export default combineReducers({
    
    product: productListReducer,
    loading: loadingReducer,
    loginUser: loginReducer,
    error: errorReducer,
    cart: cartReducer,
    createOrder,
    orderDetails: getOrderDetails,
    userList: userListReducer
})


