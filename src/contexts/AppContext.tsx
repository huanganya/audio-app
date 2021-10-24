/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { createContext, useReducer } from "react";
import { initialState, reducer } from "@src/reducers/app-reducer";
import { AppActions } from "@src/reducers/app-reducer-actions";

const initialContextState = {
  state: initialState,
  appDispatch: (action: AppActions<any>) => {
    //do nothing
  },
};
const AppContext = createContext(initialContextState);

const AppProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <AppContext.Provider value={{ state, appDispatch: dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
