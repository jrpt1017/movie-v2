import { AnyAction, Dispatch } from "redux";
import { ThunkDispatch } from "redux-thunk";
import { getDiscoverMovies, getMovieDetails } from '../../service/movies/movieService';
import { store } from '../store';
import { MovieAction } from '../../types/movieTypes'

const discoverMoviesAction = async (page?: string) => {
  return async (dispatch: Dispatch) => {
    dispatch({
      type: MovieAction.IS_PAGE_LOADING,
      payload: true,
    });
    try {
      const data = await getDiscoverMovies(page);
      dispatch({
        type: MovieAction.GET_DISCOVER_MOVIES,
        payload: data,
      })
      dispatch({
        type: MovieAction.IS_PAGE_LOADING,
        payload: false,
      });
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
      })
    } catch (error) {

    }
  };
}

export const dispatchGetDiscoverMovies = async (page?: string) => {
  return (store.dispatch as ThunkDispatch<any, void, AnyAction>)(await discoverMoviesAction(page));
};

export const dispatchGetMovieDetail = async (id: string) => {
  return (store.dispatch as ThunkDispatch<any, void, AnyAction>)(await getMovieDetailsAction(id));
};