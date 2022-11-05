const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = (env) => {
  const modules = {
    js: {
      test: /\.ts(x?)$/,
      exclude: /node_modules/,
      use: [
        {
          loader: "ts-loader",
        },
      ],
    },
    stylus: {
      test: /\.styl$/,
      use: [
        {
          loader: "style-loader",
        },
        {
          loader: "css-loader",
        },
        {
          loader: "stylus-loader",
          options: {
            import: [
              // Тут для Stylus'а можем объявить глобальные переменные или функции, чтобы каждый раз их не импортировать
              path.resolve(__dirname, "src/Common/Styles/variables.styl"),
            ],
          },
        },
      ],
    },
    stylusIsomorph: {
      test: /\.styl$/,
      use: [
        {
          loader: MiniCssExtractPlugin.loader,
        },
        {
          loader: "css-loader",
        },
        {
          loader: "stylus-loader",
          options: {
            import: [
              path.resolve(__dirname, "./src/Common/Styles/variables.styl"),
            ],
          },
        },
      ],
    },
    rules: {
      test: /\.(png|jpe?g|gif|svg)$/,
      use: [
        {
          loader: "file-loader",
          options: {
            name: "[name].[ext]",
            outputPath: "assets/pictures/",
          },
        },
      ],
    },
    rulesStyle: {
      test: /\.css$/i,
      use: ["style-loader", "css-loader"],
    },
    rulesFonts: {
      test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
      loader: "file-loader",
      options: {
        name: "[name].[ext]",
      },
    },
  };

  if (env === "production") {
    modules.stylus.use.splice(2, 0, { loader: "postcss-loader" });
    modules.stylusIsomorph.use.splice(2, 0, { loader: "postcss-loader" });
  }

  const resolve = {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
    alias: {
      // Тут тот же момент, что и в tsconfig.json, чтобы Webpack смог понять ссылки на директории
      App: path.resolve(__dirname, "src/App/"),
      Pages: path.resolve(__dirname, "src/Pages/"),
    },
  };

  return {
    modules,
    resolve,
  };
};
