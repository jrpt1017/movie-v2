import { AnyAction, Dispatch } from "redux";
import { ThunkDispatch } from "redux-thunk";
import { getDiscoverMovies } from '../../service/movies/movieService';
import { store } from '../store';

const discoverMoviesAction = async () => {
  return async (dispatch: Dispatch) => {
    try {
      const data = await getDiscoverMovies();
      dispatch({
        type: 'GET_DISCOVER_MOVIES',
        payload: data,
      })
    } catch (error) {

    }
  };
}

export const dispatchGetDiscoverMovies = async () => {
  return (store.dispatch as ThunkDispatch<any, void, AnyAction>)(await discoverMoviesAction());
};