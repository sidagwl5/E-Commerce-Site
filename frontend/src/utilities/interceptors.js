import { useDispatch } from 'react-redux';
import { setLoadingActionCreator, unsetLoadingActionCreator } from '../Store/actions/loadingActions'; 
import store from '../Store';
import getToken from './getToken';

export default (instance) => {
    
  instance.interceptors.request.use(
      (request) => {
      
      if (getToken()) {
        
        request.headers.authorization = 'Bearer ' + JSON.parse(getToken());
      }
      
      store.dispatch(setLoadingActionCreator());   
      return request;
    },
    (err) => {
      console.log(err);
      return Promise.reject(err);
    }
  );

  instance.interceptors.response.use(
      (response) => {
       
      console.log('response interceptors called')
      store.dispatch(unsetLoadingActionCreator());
      return response;
    },

    (err) => {

      console.log(err);
      store.dispatch(unsetLoadingActionCreator());
      return Promise.reject(err);
    }
  );
};
