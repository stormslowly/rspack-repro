// webpack.config.mjs
import path from "path";
import { fileURLToPath } from "url";
import webpack from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import ReactRefreshWebpackPlugin from "@pmmmwh/react-refresh-webpack-plugin";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const isDev = process.env.NODE != "production";

const config = {
  mode: "development",
  context: process.cwd(),
  devtool: false,
  devServer: {
    // setupMiddlewares(middlewares /*, devServer */) {
    //   return middlewares;
    // },
    hot: true,
  },

  experiments: {
    css: true,
  },

  entry: {
    main: "./src/index",
    react: {
      import: "./src/react/index",
    },
  },

  output: {
    // publicPath,
    pathinfo: false,
    path: path.join(process.cwd(), "dist"),
  },
  optimization: {
    minimize: false,
    runtimeChunk: "single",
  },

  resolve: {
    extensions: ["...", ".jsx", ".ts", ".tsx", ".css", ".less"],
  },

  module: {
    rules: [
      {
        test: /\.svg$/,
        type: "asset",
      },
      {
        test: /\.css$/,
        use: ["postcss-loader"],
        type: "css",
      },
      {
        test: /\.[tj]sx?$/,
        exclude: /[\\/]node_modules[\\/]/,
        use: {
          loader: "babel-loader",
          options: {
            cacheDirectory: true,
            presets: [
              [
                "@babel/preset-env",
                {
                  targets: "defaults",
                  modules: false,
                },
              ],
              [
                "@babel/preset-react",
                {
                  runtime: "automatic",
                  development: isDev,
                },
              ],
              [
                "@babel/preset-typescript",
                {
                  // 视情况可调
                  allowDeclareFields: true,
                },
              ],
            ],
            plugins: [
              // 对应 swc 的 decorators + decoratorMetadata
              ["@babel/plugin-proposal-decorators", { legacy: true }],
              ["@babel/plugin-proposal-class-properties", { loose: true }],
              // 如果你需要 TypeScript 装饰器的设计时元数据（类似 emitDecoratorMetadata）
              // 可以再加一个第三方插件（可选）：
              // 'babel-plugin-transform-typescript-metadata',
              isDev && "react-refresh/babel",
            ].filter(Boolean),
          },
        },
      },
    ],
  },

  plugins: [
    new webpack.ProgressPlugin(),
    new HtmlWebpackPlugin({
      template: "./index.html",
      chunks: ["main"],
    }),
    new HtmlWebpackPlugin({
      filename: "react.html",
      template: "./index.html",
      chunks: ["react"],
    }),
    isDev && new ReactRefreshWebpackPlugin(),
  ].filter(Boolean),
};

export default config;
