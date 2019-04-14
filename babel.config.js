module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  "env": {
    "production": {
      "plugins": ["transform-remove-console"]
    }
  },
  "plugins": [
    ["@babel/plugin-proposal-decorators", { "legacy": true }],
    ["@babel/plugin-proposal-class-properties", { "loose": true }],
    ["import", { libraryName: "@ant-design/react-native" }], // 与 Web 平台的区别是不需要设置 style
  ]
};
