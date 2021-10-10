import { AppActions, AppState, LOGIN } from "../types/app-reducer-actions";

export const initialState: AppState = {
  isLoggedIn: false,
  userInfo: null
};

export const reducer = <T>(state: AppState = initialState, action: AppActions<T>): AppState => {
  if(action.type === LOGIN){
    return { ...state, userInfo:{id: "149b1722-6fa1-4aa7-babc-64a4fc90ac5d", username: "Anya Test"}, isLoggedIn: true };
  }
  return { userInfo: null, isLoggedIn: false };
};
