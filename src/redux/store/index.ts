import { createStore, applyMiddleware, combineReducers } from "redux";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import movieReducer from "../reducers/movieReducer";

const rootReducer = combineReducers({
  movies: movieReducer,
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunkMiddleware)));