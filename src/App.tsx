/**
 * React Native App Starter
 */
import React, { ReactElement } from "react";
import * as Antd from "@ant-design/react-native";
import { AppStack } from "./navigation/AppStack";
import { AppProvider } from "./contexts/AppContext";

const App = (): ReactElement => {
  return (
    <AppProvider>
      <Antd.Provider>
        <AppStack />
      </Antd.Provider>
    </AppProvider>
  );
};

export default App;
