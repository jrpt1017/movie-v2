import { Dispatch, AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { getRequestToken } from '../../service/user/userService';
import { store, IAppState } from '../store/index';

export const openModal = () => {
  return {
    type: 'SET_OPEN_MODAL',
  }
};

export const closeModal = () => {
  return {
    type: 'SET_CLOSE_MODAL',
  }
};

export const setRequestToken = (token: string) => {
  return {
    type: 'SET_REQUEST_TOKEN',
    payload: token,
  }
};

export const authenticateUser = async () => {
  return async (dispatch: Dispatch) => {
    try {
      const result = await getRequestToken();
      if (result.success) {
        dispatch(setRequestToken(result.request_token));
        window.open(`https://www.themoviedb.org/authenticate/${result.request_token}`);
        return true;
      }
      return false;
    } catch (error) {
      console.log(error.message)
    }
  };
};

export const dispatchAuthenticateUser = async () => {
  return (store.dispatch as ThunkDispatch<IAppState, void, AnyAction>)(await authenticateUser())
};
