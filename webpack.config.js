const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
const dotenv = require("dotenv");

module.exports = (env) => {
  dotenv.config();
  return {
    mode: "development",
    entry: "./js/index.js",
    output: {
      filename: "main.js",
      path: `${__dirname}/dist`,
    },
    devServer: {
      static: "./dist",
    },
    resolve: {
      extensions: [".ts", ".tsx", ".js", ".jsx"],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: "./index.html",
      }),
      new webpack.DefinePlugin({
        UNSPLASH_ACCESSS_KEY: JSON.stringify(process.env.UNSPLASH_ACCESSS_KEY),
        END_POINT: JSON.stringify(process.env.END_POINT),
      }),
    ],
  };
};
