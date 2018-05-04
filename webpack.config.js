const path = require("path");

module.exports = {
  mode: "production",
  entry: "./function/index.js",
  output: {
    path: path.resolve(__dirname),
    filename: "Utils.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.resolve(__dirname, "function"),
        loader: "babel-loader",
        options: {
          presets: ["es2015"]
        }
      }
    ]
  }
};