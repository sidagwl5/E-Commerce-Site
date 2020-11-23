import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import ProductScreen from './screens/ProductScreen';
import ShippingScreen from './screens/ShippingScreen';
import PaymentScreen from './screens/PaymentScreen';
import CreateOrderScreen from './screens/CreateOrderScreen';
import OrderDetailsScreen from './screens/OrderDetailsScreen';
import userListScreen from './screens/UserListScreen';

import Spinner from './utilities/loader';
import ProtectedRoute from './utilities/protectedRoute';
import AlertMessage from './components/ErrorMessage';
import CartScreen from './screens/CartScreen';
import RegisterScreen from './screens/RegisterScreen'

const App = () => {
  return (
    <>
      <Spinner />
      <Header />
      <div className='py-5'>
        <AlertMessage />
        <ProtectedRoute exact path='/' component={HomeScreen} />
        <ProtectedRoute path='/product/:id' component={ProductScreen} />
        <Route path='/login' component={LoginScreen} />
        <Route path='/signup' component={RegisterScreen} />
        <ProtectedRoute path='/cart/:id?' component={CartScreen} />
        <ProtectedRoute path='/shipping' component={ShippingScreen} />
        <ProtectedRoute path='/payment' component={PaymentScreen} />
        <ProtectedRoute exact path='/order' component={CreateOrderScreen} />
        <ProtectedRoute
          exact
          path='/admin/usersList'
          component={userListScreen}
        />
        <ProtectedRoute path='/order/:id' component={OrderDetailsScreen} />
      </div>
    </>
  );
};

export default App;
