import { UserInfo } from "../types/user";
import { AppActions, AppState, LOGIN } from "./app-reducer-actions";

export const initialState: AppState = {
  isLoggedIn: false,
};

export const reducer = (
  state: AppState = initialState,
  action: AppActions<UserInfo>,
): AppState => {
  if (action.type === LOGIN) {
    return { ...state, userInfo: action.payload, isLoggedIn: true };
  }
  return { ...state, userInfo: undefined, isLoggedIn: false };
};
