export enum ApiActionState {
  REQUEST_INIT = "REQUEST_INIT",
  REQUEST_START = "REQUEST_START",
  REQUEST_SUCCESS = "REQUEST_SUCCESS",
  REQUEST_FAILURE = "REQUEST_FAILURE",
  TOKEN_EXPIRED = "TOKEN_EXPIRED",
  NO_INTERNET = "NO_INTERNET",
}

export interface ApiState<T> {
  currentState: ApiActionState;
  data: T | null;
}

export interface ApiInitAction<T> {
  type: typeof ApiActionState.REQUEST_INIT;
  payload?: null;
}

export interface ApiStartAction<T> {
  type: typeof ApiActionState.REQUEST_START;
  payload?: null;
}

export interface ApiSuccessAction<T> {
  type: typeof ApiActionState.REQUEST_SUCCESS;
  payload: T;
}

export interface ApiFailureAction<T> {
  type: typeof ApiActionState.REQUEST_FAILURE;
  payload?: T;
}

export interface ApiTokenExpiredAction<T> {
  type: typeof ApiActionState.TOKEN_EXPIRED;
  payload?: T;
}

export interface ApiNoInternetAction<T> {
  type: typeof ApiActionState.NO_INTERNET;
  payload?: T;
}

export type ApiActions<T> =
  | ApiInitAction<T>
  | ApiStartAction<T>
  | ApiSuccessAction<T>
  | ApiFailureAction<T>
  | ApiTokenExpiredAction<T>
  | ApiNoInternetAction<T>;
