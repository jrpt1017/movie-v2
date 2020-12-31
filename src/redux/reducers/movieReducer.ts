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

export interface IMovieList {
  movies: IMovie[],
  favorites: number[],
}

const initState = {
  movies: [],
  favorites: [],
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

    default: return state;
  }
};

export default movieReducer;