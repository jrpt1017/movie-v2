import { createStore, applyMiddleware, combineReducers } from "redux";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import movieReducer, { IMovieList } from "../reducers/movieReducer";
import userReducer, { IUser } from "../reducers/userReducer";
import modalReducer, { IModal } from "../reducers/modalReducer";
import { persistStore, persistReducer } from 'redux-persist' // imports from redux-persist
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

const persistConfig = { // configuration object for redux-persist
  key: 'root',
  storage, // define which storage to use
  whitelist: ['movies'],
}

export interface IAppState {
  movies: IMovieList,
  user: IUser,
  modal: IModal,
};

const rootReducer = combineReducers<IAppState>({
  movies: movieReducer,
  user: userReducer,
  modal: modalReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer, composeWithDevTools(applyMiddleware(thunkMiddleware)));
const persistor = persistStore(store);

export { store, persistor };
