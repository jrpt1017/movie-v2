import { AnyAction } from "redux";
import { remove } from "lodash";
import { IMovie, IMovieDetail, MovieAction } from '../../types/movieTypes';

const initState = {
  movies: [],
  favorites: [],
  movieDetail: {
    backdrop_path: '',
    genres: [],
    poster_path: '',
    release_date: '',
    runtime: 0,
    tagline: '',
    title: '',
    vote_average: 0,
    casts: {
      id: 0,
      cast: [],
      crew: [],
    },
  },
};

export interface IMovieList {
  movies: IMovie[],
  favorites: number[],
  movieDetail: IMovieDetail,
}

const movieReducer = (state: IMovieList = initState, action: AnyAction) => {
  switch (action.type) {
    case MovieAction.GET_DISCOVER_MOVIES:
      return {
        ...state,
        movies: action.payload,
      }
    case MovieAction.ADD_FAVORITE:
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
      };
    case MovieAction.REMOVE_FAVORITE:
      const newArr = remove([...state.favorites], (movieId: number) => {
        return movieId !== action.payload;
      });
      return {
        ...state,
        favorites: newArr,
      };
    case MovieAction.GET_MOVIE_DETAIL:
      return {
        ...state,
        movieDetail: action.payload,
      };
    case MovieAction.GET_CASTS:
      return {
        ...state,
        movieDetail: {
          ...state.movieDetail,
          casts: action.payload,
        },
      };
    default: return state;
  }
};

export default movieReducer;