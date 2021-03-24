import { AnyAction } from "redux";
import { remove } from "lodash";
import { IMovie, IMovieDetail, MovieAction } from '../../types/movieTypes';

const initState = {
  movies: [],
  favorites: [],
  movieDetail: {
    adult: false,
    backdrop_path: '',
    belongs_to_collection: null,
    budget: 0,
    genres: [],
    homepage: '',
    id: 0,
    imdb_id: '',
    original_language: '',
    original_title: '',
    overview: '',
    popularity: 0,
    poster_path: '',
    production_companies: [],
    production_countries: [],
    release_date: '',
    similar: {
      page: 0,
      results: [],
      total_pages: 0,
      total_results: 0,
    },
    revenue: 0,
    runtime: 0,
    spoken_languages: [],
    status: '',
    tagline: '',
    title: '',
    video: false,
    videos: {
      id: 0,
      results: [],
    },
    vote_average: 0,
    vote_count: 0,
    casts: {
      id: 0,
      crew: [],
      cast: [],
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