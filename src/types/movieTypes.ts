export interface IGenre {
  id: number,
  name: string,
};

export enum MovieAction {
  IS_PAGE_LOADING = 'IS_PAGE_LOADING',
  GET_DISCOVER_MOVIES = 'GET_DISCOVER_MOVIES',
  ADD_FAVORITE = 'ADD_FAVORITE',
  REMOVE_FAVORITE = 'REMOVE_FAVORITE',
  GET_MOVIE_DETAIL = 'GET_MOVIE_DETAIL',
}