import { createStore, applyMiddleware, combineReducers } from "redux";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import movieReducer, { IMovieList } from "../reducers/movieReducer";
import modalReducer, { IModal } from "../reducers/modalReducer";
import backdropReducer, { IBackdrop } from "../reducers/backdropReducer";
import { persistStore, persistReducer } from 'redux-persist' // imports from redux-persist
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

const persistConfig = { // configuration object for redux-persist
  key: 'root',
  storage, // define which storage to use
  whitelist: ['user'],
}

export interface IAppState {
  movies: IMovieList,
  modal: IModal,
  backdrop: IBackdrop,
};

const rootReducer = combineReducers<IAppState>({
  movies: movieReducer,
  modal: modalReducer,
  backdrop: backdropReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer, composeWithDevTools(applyMiddleware(thunkMiddleware)));
const persistor = persistStore(store);

export { store, persistor };
