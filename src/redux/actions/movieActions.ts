import { AnyAction, Dispatch } from "redux";
import { ThunkDispatch } from "redux-thunk";
import { getDiscoverMovies, getMovieDetails } from '../../service/movies/movieService';
import { store } from '../store';
import { MovieAction } from '../../types/movieTypes';

export const togglePageLoading = (value: boolean) => {
  return {
    type: MovieAction.IS_PAGE_LOADING,
    payload: value,
  };
};

const discoverMoviesAction = async (page?: string) => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch(togglePageLoading(true));
      const data = await getDiscoverMovies(page);
      dispatch({
        type: MovieAction.GET_DISCOVER_MOVIES,
        payload: data,
      })
      dispatch(togglePageLoading(false));
    } catch (error) {

    }
  };
}

export const addToFavorites = (movieId: number) => {
  return {
    type: MovieAction.ADD_FAVORITE,
    payload: movieId,
  }
};

export const removeFromFavorites = (movieId: number) => {
  return {
    type: MovieAction.REMOVE_FAVORITE,
    payload: movieId,
  }
};

const getMovieDetailsAction = async (id: string) => {
  return async (dispatch: Dispatch) => {
    try {
      const data = await getMovieDetails(id);
      dispatch({
        type: MovieAction.GET_MOVIE_DETAIL,
        payload: data,
      });
    } catch (error) {

    }
  };
};

export const dispatchGetDiscoverMovies = async (page?: string) => {
  return (store.dispatch as ThunkDispatch<any, void, AnyAction>)(await discoverMoviesAction(page));
};

export const dispatchGetMovieDetail = async (id: string) => {
  return (store.dispatch as ThunkDispatch<any, void, AnyAction>)(await getMovieDetailsAction(id));
};