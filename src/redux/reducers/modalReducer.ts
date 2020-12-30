import { AnyAction } from "redux";

export interface IModal {
  isOpen: boolean,
};

const initState = {
  isOpen: false,
};

const modalReducer = (state: IModal = initState, action: AnyAction) => {
  switch (action.type) {
    case 'SET_OPEN_MODAL':
      return {
        ...state,
        isOpen: true,
      };
    case 'SET_CLOSE_MODAL':
      return {
        ...state,
        isOpen: false
      }
    default: return state;
  };
};

export default modalReducer;