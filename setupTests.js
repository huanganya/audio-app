import mockRNCNetInfo from "@react-native-community/netinfo/jest/netinfo-mock.js";

const originalConsoleError = console.error;
console.error = message => {
  if (message.startsWith("Warning:")) {
    return;
  }

  originalConsoleError(message);
};

jest.mock("@react-native-community/netinfo", () => mockRNCNetInfo);
