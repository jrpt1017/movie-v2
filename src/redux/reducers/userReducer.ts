import React from 'react';
import { AnyAction } from 'redux';

const initState = {
  userName: '',
  isLoggedIn: false,
  requestToken: '',
  sessionId: '',
};

export interface IUser {
  userName: string,
  requestToken: string,
  sessionId: string,
  isLoggedIn: boolean,
}

const userReducer = (state: IUser = initState, action: AnyAction) => {
  switch (action.type) {
    case 'SET_REQUEST_TOKEN':
      return {
        ...state,
        requestToken: action.payload,
      };
    case 'SET_SESSION_ID':
      return {
        ...state,
        sessionId: action.payload,
      };
    default: return state;
  }
};

export default userReducer;