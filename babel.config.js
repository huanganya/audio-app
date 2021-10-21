module.exports = {
  presets: ["module:metro-react-native-babel-preset"],
  plugins: [
    [
      "module-resolver",
      {
        root: ["."],
        extensions: [".ios.js", ".android.js", ".js", ".ts", ".tsx", ".json"],
        alias: {
          "@root": "./",
          "@src": "./src",
          "@mock": "./__mocks__",
          "@test": "./__test__",
        },
      },
    ],
    [
      "module:react-native-dotenv",
      {
        allowUndefined: true,
        blacklist: null,
        moduleName: "@env",
        path: ".env",
        safe: false,
        whitelist: null,
      },
    ],
    ["@babel/plugin-proposal-decorators",
    {
      "legacy": true
    }],
    ["@babel/proposal-class-properties",
    {
      "loose": false
    }]
  ],
  "sourceMaps": true
};
