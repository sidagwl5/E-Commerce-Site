import { LOGIN_USER_FAIL, LOGIN_USER_SUCCESS, LOGOUT_USER } from '../constants/loginConstants';


const initialState = null;

export default (state = initialState, action) => {

    const { type, payload } = action;

    switch (type) {
      case LOGIN_USER_SUCCESS:
        return {
          ...state,
          ...payload,
        };

      case LOGIN_USER_FAIL:
        return null;

      case LOGOUT_USER:
        return null;

      default:
        return state;
    }
}