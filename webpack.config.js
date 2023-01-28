const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require("webpack");
const dotenv = require("dotenv");

module.exports = (env) => {
  const { DEV } = env;
  if (DEV) {
    console.log("dev");
    dotenv.config({ path: "./dev.env" });
  } else {
    console.log("env");
    dotenv.config({ path: "./.env" });
  }

  return {
    mode: "development",
    entry: "./js/index.js",
    output: {
      filename: "main.js",
      path: `${__dirname}/dist`,
      clean: true,
    },
    devServer: {
      port: 9000,
      static: "./dist",
    },
    resolve: {
      extensions: [".ts", ".tsx", ".js", ".jsx"],
    },
    module: {
      rules: [
        {
          // 전 시간 babel-loader
        },
        {
          test: /\.css$/,
          use: [MiniCssExtractPlugin.loader, "css-loader"],
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: "./index.html",
      }),
      new webpack.DefinePlugin({
        DEVLEOPMENT: env.DEV ? "true" : "false",
        // UNSPLASH_ACCESSS_KEY: env.DEV
        //   ? JSON.stringify(process.env.UNSPLASH_ACCESSS_KEY)
        //   : "",
        // END_POINT: env.DEV ? JSON.stringify(process.env.END_POINT) : "",
        "process.env.UNSPLASH_ACCESSS_KEY": JSON.stringify(
          process.env.UNSPLASH_ACCESSS_KEY
        ),
        "process.env.END_POINT": JSON.stringify(process.env.END_POINT),
      }),
      new MiniCssExtractPlugin({
        linkType: false,
        filename: "app.css",
      }),
    ],
  };
};
