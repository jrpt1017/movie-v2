import React from 'react';
import { AnyAction } from 'redux';

export interface IBackdrop {
  isPageLoading: false,
};

const initState: IBackdrop = {
  isPageLoading: false,
}

const backdropReducer = (state: IBackdrop = initState, action: AnyAction) => {
  switch (action.type) {
    case 'IS_PAGE_LOADING':
      return {
        ...state,
        isPageLoading: action.payload,
      };
    default: return state;
  };
};

export default backdropReducer;