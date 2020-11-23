import { SET_LOADING, UNSET_LOADING } from '../constants/loadingConstants';

const initialState = {

    loading: false
}


export default (state = initialState, action) => {

    const { type, payload } = action;

    switch (type) {
      case SET_LOADING:
        return {
          ...state,
          loading: payload,
        };
      case UNSET_LOADING:
        return {
          ...state,
          loading: payload,
        };
        default:
            return state
    }
}