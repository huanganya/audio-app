export const LOGOUT = "LOGOUT";
export const FORCE_LOGOUT = "FORCE_LOGOUT";
export const LOGIN = "LOGIN";

export interface AppState {
  isLoggedIn: boolean;
}

export interface AppLogoutAction<T> {
  type: typeof LOGOUT;
  payload?: T;
}

export interface AppForceLogoutAction<T> {
  type: typeof FORCE_LOGOUT;
  payload?: T;
}

export interface AppLoginAction<T> {
  type: typeof LOGIN;
  payload?: T;
}

export type AppActions<T> =
  | AppLogoutAction<T>
  | AppForceLogoutAction<T>
  | AppLoginAction<T>;
