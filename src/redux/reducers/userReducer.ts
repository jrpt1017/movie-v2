import React from 'react';
import { AnyAction } from 'redux';

const initState = {
  userName: '',
  isLoggedIn: false,
};

export interface IUser {
  userName: string,
  isLoggedIn: boolean,
}

const userReducer = (state: IUser = initState, action: AnyAction) => {
  switch (action.type) {
    default: return state;
  }
};

export default userReducer;