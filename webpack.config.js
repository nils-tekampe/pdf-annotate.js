var webpack = require("webpack");
var fileName = "pdf-annotate";
var plugins = [];
const HtmlWebpackPlugin = require("html-webpack-plugin");

if (process.env.MINIFY) {
  fileName += ".min";
  plugins.push(new webpack.optimize.UglifyJsPlugin());
}

module.exports = {
  devtool: "source-map",
  plugins: plugins,
  entry: "./index.js",
  output: {
    filename: "dist/" + fileName + ".js",
    library: "PDFAnnotate",
    libraryTarget: "umd"
  },

  plugins: [new HtmlWebpackPlugin({title: "Output Management"})],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        query: {
          presets: ["@babel/preset-env"]
        }
      }
    ]
  }
};
