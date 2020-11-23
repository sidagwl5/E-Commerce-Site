import { ERROR, UNSET_ERROR } from '../constants/errorConstants';

const initialState = null

export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case ERROR:
      return payload
    
    case UNSET_ERROR:
      return payload
    
    default:
      return state;
  }
};
