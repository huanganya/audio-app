/**
 * React Native App Starter
 */
import React, { ReactElement } from "react";
import { AppStack } from "./navigation/AppStack";
import { AppProvider } from "./contexts/AppContext";

const App = (): ReactElement => {
  return (
    <AppProvider>
      <AppStack />
    </AppProvider>
  );
};

export default App;
