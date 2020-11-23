import { GET_USER_LIST_SUCCESS, GET_USER_LIST_REQUEST } from '../constants/userListConstants';

export const userListReducer = (initialState = [], action) => {
  switch (action.type) {
    case GET_USER_LIST_REQUEST:
      return [];

    case GET_USER_LIST_SUCCESS:
      return [...action.payload];

    default:
      return initialState;
  }
};
