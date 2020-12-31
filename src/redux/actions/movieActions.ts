import { AnyAction, Dispatch } from "redux";
import { ThunkDispatch } from "redux-thunk";
import { getDiscoverMovies } from '../../service/movies/movieService';
import { store } from '../store';

const discoverMoviesAction = async (page?: string) => {
  return async (dispatch: Dispatch) => {
    try {
      const data = await getDiscoverMovies(page);
      dispatch({
        type: 'GET_DISCOVER_MOVIES',
        payload: data,
      })
    } catch (error) {

    }
  };
}

export const addToFavorites = (movieId: number) => {
  return {
    type: 'ADD_FAVORITE',
    payload: movieId,
  }
};

export const removeFromFavorites = (movieId: number) => {
  return {
    type: 'REMOVE_FAVORITE',
    payload: movieId,
  }
};

export const dispatchGetDiscoverMovies = async (page?: string) => {
  return (store.dispatch as ThunkDispatch<any, void, AnyAction>)(await discoverMoviesAction(page));
};