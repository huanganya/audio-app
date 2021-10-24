import { ApiRequestStatus } from "@src/constants/api-request-status";

export interface ApiState<T> {
  data: T | null;
  status: ApiRequestStatus;
  error?: any;
}

export const initialState = {
  status: ApiRequestStatus.none,
  data: null,
};

export interface ApiActions<T> {
  type: string;
  payload?: T | any;
}

// actions
export const fetching = (): ApiActions<null> => ({ type: FETCHING });
export const success = <T>(response: T): ApiActions<T> => ({
  type: SUCCESS,
  payload: response,
});
export const sucessNoContent = (): ApiActions<null> => ({ type: SUCCESS });
export const error = <T>(err: T): ApiActions<T> => ({
  type: ERROR,
  payload: err,
});

// ACTIONS TYPE
export const SUCCESS = "SUCCESS";
export const ERROR = "ERROR";
export const FETCHING = "FETCHING";
export const SUCCESS_NO_CONTENT = "SUCCESS_NO_CONTENT";

export const reducer = <T>(
  state: ApiState<T> = initialState,
  action: ApiActions<T>,
): ApiState<T> => {
  switch (action.type) {
    case FETCHING: {
      return { ...state, status: ApiRequestStatus.isLoading };
    }
    case SUCCESS: {
      return { status: ApiRequestStatus.isSuccessful, data: action.payload };
    }
    case ERROR: {
      return {
        ...state,
        status: ApiRequestStatus.isFailed,
        error: action.payload,
      };
    }
    case SUCCESS_NO_CONTENT: {
      return { ...state, status: ApiRequestStatus.isSuccessful };
    }
    default:
      return state;
  }
};
