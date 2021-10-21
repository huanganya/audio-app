import { useReducer } from "react";
import { error, fetching, initialState, reducer, success } from "../reducers/api-reducer";
import { ApiRequestStatus } from "../constants/api-request-status";

export type SendApiRequestType<T> = {
  data: T,
  status: ApiRequestStatus;
  error?: any
};

export type SendRequest = (payload?: unknown) => Promise<void>;

export type ApiService<T> = (payload?: any) => Promise<T> | never;

export const useSendApiRequest = <T>(apiService: ApiService<T>):
[ SendRequest, SendApiRequestType<T> ] => {
  const [ state, dispatch ] = useReducer(reducer, initialState);

  const sendRequest = async (payload: unknown): Promise<void> => {
    dispatch(fetching());
    //add loading
    try {
      const result = await apiService(payload);
      dispatch(success<T>(result));
      //remove loading
    } catch (e) {
      //remove loading
      dispatch(error(e));
    }
  };

  return [ sendRequest, {
    data: state.data as T,
    status: state.status,
    error: state.error
  } ];
};
