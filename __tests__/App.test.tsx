import React from "react";
import { render, waitFor } from "@testing-library/react-native";
import * as Antd from "@ant-design/react-native";
import App from "@src/App";
import { AppStack } from "@src/navigation/AppStack";
import { AppProvider } from "@src/contexts/AppContext";

describe("App.tsx", () => {
  it("should render the AppProvider, Antd.Provider and AppStack correctly", async () => {
    const { container } = render(<App />);

    expect(container.findByType(AppProvider)).toBeTruthy();
    expect(container.findByType(Antd.Provider)).toBeTruthy();
    expect(container.findByType(AppStack)).toBeTruthy();
  });
});
