import {
  ApiActions,
  ApiState,
  ApiActionState
} from "../types/api-reducer-actions";

const initialState = {
  currentState: ApiActionState.REQUEST_INIT,
  data: null
};

const reducer = <T>(
  state: ApiState<T> = initialState,
  action: ApiActions<T> = { type: ApiActionState.REQUEST_INIT },
): ApiState<T> => {
  switch (action.type) {
    case ApiActionState.REQUEST_INIT: {
      return { ...state, currentState: ApiActionState.REQUEST_INIT };
    }
    case ApiActionState.REQUEST_START: {
      return { ...state, currentState: ApiActionState.REQUEST_START };
    }
    case ApiActionState.REQUEST_SUCCESS: {
      return {
        ...state,
        currentState: ApiActionState.REQUEST_SUCCESS,
        data: action.payload
      };
    }
    case ApiActionState.REQUEST_FAILURE: {
      const payload = action.payload;
      const newState = {
        ...state,
        currentState: ApiActionState.REQUEST_FAILURE
      };
      return payload ? { ...newState, data: payload } : newState;
    }
    case ApiActionState.TOKEN_EXPIRED: {
      return { ...state, currentState: ApiActionState.TOKEN_EXPIRED };
    }
    case ApiActionState.NO_INTERNET: {
      return { ...state, currentState: ApiActionState.NO_INTERNET };
    }
    default:
      return state;
  }
};

export default { reducer, initialState };
