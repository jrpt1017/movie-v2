import { AnyAction } from "redux";
import { remove } from "lodash";

export interface IMovie {
  adult: boolean,
  backdrop_path: string,
  genre_ids: number[],
  id: number,
  original_language: boolean,
  original_title: string,
  overview: string,
  popularity: number,
  poster_path: string,
  release_date: string,
  title: string,
  video: boolean,
  vote_average: number,
  vote_count: number,
}

interface IGenre {
  id: number,
  name: string,
}

export interface IMovieDetail {
  backdrop_path: string,
  genres: IGenre[],
  poster_path: string,
  release_date: string,
  runtime: number,
  tagline: string,
  title: string,
  vote_average: number,
};

export interface IMovieList {
  movies: IMovie[],
  favorites: number[],
  movieDetail: IMovieDetail,
}

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
  },
};

const movieReducer = (state: IMovieList = initState, action: AnyAction) => {
  switch (action.type) {
    case 'GET_DISCOVER_MOVIES':
      return {
        ...state,
        movies: action.payload,
      }
    case 'ADD_FAVORITE':
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
      };
    case 'REMOVE_FAVORITE':
      const newArr = remove([...state.favorites], (movieId: number) => {
        return movieId !== action.payload;
      });
      return {
        ...state,
        favorites: newArr,
      };
    case 'GET_MOVIE_DETAIL':
      return {
        ...state,
        movieDetail: action.payload,
      };

    default: return state;
  }
};

export default movieReducer;