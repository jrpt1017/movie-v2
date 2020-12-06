import { AnyAction } from "redux";

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
  video_average: number,
  vote_count: number,
}

export interface IMovieList {
  movies: IMovie[],
}

const initState = {
  movies: [],
};

const movieReducer = (state: IMovieList = initState, action: AnyAction) => {
  switch (action.type) {
    case 'GET_DISCOVER_MOVIES':
      return {
        ...state,
        movies: action.payload,
      }
    default: return state;
  }
};

export default movieReducer;