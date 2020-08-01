const presets = [
    [
      "@babel/env",
      {
        targets: ">1%, not ie 11, not op_mini, not dead",
        useBuiltIns: "usage",
        corejs: "3.4.1"
        }
    ],
  ];

  module.exports = { presets };
