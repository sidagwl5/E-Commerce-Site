import store from '../Store/index';

const handleError = (type, message) => {

  store.dispatch({
    type,
    payload: message
  })

  setTimeout(() => { 

    store.dispatch({

      type: 'UNSET_ERROR',
      payload: null
    })

  }, 2000);
} 

export default (type, errorData, customErrorMessage = '') => {
  if (customErrorMessage) {
    // store.dispatch({
    //   type,
    //   payload: customErrorMessage,
    // });
    handleError(type, customErrorMessage);
  } else if (errorData.response) {
    const { data, status } = errorData.response;
    if (status === 500) {
      // store.dispatch({
      //   type,
      //   payload: 'Internal server error',
      // });

      handleError(type, 'Internal server error');
    } else if (status === 401) {
      localStorage.removeItem('jwt');
      localStorage.removeItem('userData');

      store.dispatch({ type: 'LOGOUT_USER', payload: {} });
      // store.dispatch({
      //   type,
      //   payload: 'You are not Authorized',
      // });

      handleError(type, 'You are not Authorized')
    } else {
      // store.dispatch({
      //   type,
      //   payload: data.message,
      // });
       
      handleError(type, data.message)
    }
  }
  
  else {
    
    // store.dispatch({
       
    //   type,
    //   payload: 'Server is down'
    //  })

    handleError(type, 'Server is down');
  }
    
    
};
