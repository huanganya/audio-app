module.exports = {
  testEnvironment: "jsdom",
  preset: "react-native",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx"],
  setupFiles: ["./node_modules/react-native-gesture-handler/jestSetup.js"],
  transformIgnorePatterns: ["src/node_modules/(?!react-native)"],
  setupFilesAfterEnv: [
    "@testing-library/jest-native/extend-expect",
    "<rootDir>/setupTests.js",
  ],
  coverageThreshold: {
    global: {
      branches: 56,
      functions: 39,
      lines: 44,
      statements: 44,
    },
  },
  testPathIgnorePatterns: [],
  collectCoverageFrom: ["src/*"],
};
