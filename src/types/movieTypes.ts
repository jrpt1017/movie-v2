export interface IGenre {
  id: number,
  name: string,
};

export enum MovieAction {
  IS_PAGE_LOADING = 'IS_PAGE_LOADING',
  GET_CASTS = 'GET_CASTS',
  GET_DISCOVER_MOVIES = 'GET_DISCOVER_MOVIES',
  ADD_FAVORITE = 'ADD_FAVORITE',
  REMOVE_FAVORITE = 'REMOVE_FAVORITE',
  GET_MOVIE_DETAIL = 'GET_MOVIE_DETAIL',
}

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

export interface ICasts {
  id: number;
  cast: Cast[];
  crew: Cast[];
}

export interface Cast {
  adult: boolean;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: null | string;
  cast_id?: number;
  character?: string;
  credit_id: string;
  order?: number;
  department?: string;
  job?: string;
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
  casts: ICasts,
};

