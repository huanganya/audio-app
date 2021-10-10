import { AppActions, AppState, LOGIN } from "../types/app-reducer-actions";

export const initialState = {
  isLoggedIn: false
};

export const reducer = <T>(state: AppState = initialState, action: AppActions<T>): AppState => {
  return { ...state, isLoggedIn: action.type === LOGIN };
};
