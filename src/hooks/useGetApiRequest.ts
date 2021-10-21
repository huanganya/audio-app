import { useEffect, useReducer, useState } from "react";
import { error, fetching, initialState, reducer, success } from "../reducers/api-reducer";
import { ApiRequestStatus } from "../constants/api-request-status";

type RetryFnType = () => void;

export type GetApiType<T> = {
  data: T,
  status: ApiRequestStatus;
  retryCount: number;
  retry: RetryFnType;
};

export type ApiService<T> = (payload?: any) => Promise<T> | never;

export const useGetApiRequest =
  <T>(apiService: ApiService<T>, payload?: unknown): GetApiType<T> => {
    const [ state, dispatch ] = useReducer(reducer, initialState);
    const [ retryCount, setRetryCount ] = useState(0);

    const retry: RetryFnType = () => {
      dispatch(fetching());
      setRetryCount(retryCount + 1);
    };

    useEffect(() => {
      dispatch(fetching());
      const fetchData = async (): Promise<void> => {
        try {
          const result = await apiService(payload);
          dispatch(success<T>(result));
        } catch (e) {
          dispatch(error(e));
        }
      };
      fetchData();
    }, [ JSON.stringify(payload), apiService, retryCount ]);

    return {
      data: state.data as T,
      status: state.status,
      retry,
      retryCount
    };
  };
