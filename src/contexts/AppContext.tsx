/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {
  createContext,
  useReducer,
  useCallback
} from "react";
import { reducer, initialState } from "../reducers/app-reducer";
import { AppActions, LOGOUT, LOGIN } from "../types/app-reducer-actions";

const initialContextState = {
  state: initialState,
  appDispatch: async (action: AppActions<any>) => {
    //do nothing
  }
};
const AppContext = createContext(initialContextState);

const AppProvider: React.FC = ({ children }) => {
  const [ state, dispatch ] = useReducer(reducer, initialState);
  console.log("state1111", state);
  const asyncDispatch = useCallback(
    async (action: AppActions<any>) => {
      switch (action.type) {
        case LOGIN: {
          //todo: login action
          dispatch({
            type: LOGIN
          });
          break;
        }
        case LOGOUT: {
          //todo: logout action
          dispatch({
            type: LOGOUT
          });
          break;
        }
        default:
          dispatch(action);
      }
    },
    [ ],
  );

  return (
    <AppContext.Provider
      value={{ state, appDispatch: asyncDispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
