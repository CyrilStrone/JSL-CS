const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const WebpackNotifierPlugin = require("webpack-notifier");
const TerserPlugin = require("uglifyjs-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const webpackConfig = require("./webpack.config");

module.exports = (env, argv) => {
  const watchMode = argv.liveReload || false;
  const modeEnv = argv.mode || "development";
  const isProd = modeEnv === "production";
  const config = webpackConfig(modeEnv);

  const optimizations = {
    splitChunks: {
      // Чанки для нашего приложения. Все наши npm-пакеты вынесем в отдельный файл с определенным хешем, чтобы клиент каждый раз при изменениях не выкачивал все по-новой
      cacheGroups: {
        vendors: {
          name: "vendors",
          test: /node_modules/,
          chunks: "all",
          enforce: true,
        },
      },
    },
    minimizer: [],
  };

  if (isProd) {
    optimizations.minimizer.push(new TerserPlugin());
  }

  return {
    devServer: {
      static: {
        directory: path.join(__dirname, "dist/"),
      },
      port: 4000,
      hot: "only",
    },
    resolve: config.resolve,
    module: {
      rules: [
        config.modules.js,
        config.modules.stylus,
        config.modules.rules,
        config.modules.rulesStyle,
        config.modules.rulesFonts,
      ],
    },
    plugins: [
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        template: "./src/Html/Browser.html", // Скармливаем наш HTML-темплейт
      }),
      new WebpackNotifierPlugin({ alwaysNotify: false }),
    ],
    entry: {
      main: "./src/Client.tsx", // Энтрипоинт-файл, с которого и начнется наша сборка
    },
    output: {
      filename: watchMode
        ? "assets/[name].[hash].js"
        : "assets/[name].[chunkhash].js", // небольшое условие, т.к. WDS не будет работать с chunkhash
      path: path.resolve(__dirname, "dist"), // Весь наш результат складываем в папку dist
      publicPath: "/",
    },
    performance: {
      hints: false,
    },
    optimization: optimizations,
  };
};
