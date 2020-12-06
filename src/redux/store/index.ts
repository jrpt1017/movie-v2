import { createStore, applyMiddleware, combineReducers } from "redux";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import movieReducer, { IMovieList } from "../reducers/movieReducer";

export interface IAppState {
  movies: IMovieList,
};

const rootReducer = combineReducers<IAppState>({
  movies: movieReducer,
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunkMiddleware)));