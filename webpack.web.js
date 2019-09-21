var webpack = require("webpack");

module.exports = {
  entry: "./docs/main.js",

  output: {
    filename: "index.js",
    path: "/Users/nils/Documents/gitRepositories/pdf-annotate.js/docs"
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        query: {
          presets: ["es2015"]
        }
      }
    ]
  }
};
