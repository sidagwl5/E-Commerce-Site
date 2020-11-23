import { SET_LOADING, UNSET_LOADING } from '../constants/loadingConstants';

export const setLoadingActionCreator = () => (dispatch) => {
  dispatch({ type: SET_LOADING, payload: true });
};

export const unsetLoadingActionCreator = () => (dispatch) => {
  dispatch({ type: UNSET_LOADING, payload: false });
};
