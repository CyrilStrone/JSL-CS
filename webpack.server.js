const path = require("path")
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const nodeExternals = require('webpack-node-externals')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const webpackConfig = require('./webpack.config')

module.exports = (env, argv) => {
    const modeEnv = argv.mode || 'development'
    const config = webpackConfig(modeEnv)

    const optimizations = {
        minimizer: [
            new UglifyJsPlugin(),
        ],
    }

    return {
        plugins: [
            new CleanWebpackPlugin(),
            new MiniCssExtractPlugin(), // Подключаем плагин для CSS
        ],
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
        entry: {
            main: './src/Server.tsx', // Тут уже энтрипоинт сервера, который сделаем далее
        },
        output: {
            filename: '[name].js',
            path: path.resolve(__dirname, 'server'), // Все компилируем в папку server
        },
        performance: {
            hints: false,
        },
        optimization: optimizations,
        target: 'node', // обязательно указываем режим сборки для node js, а не браузера
        externals: [nodeExternals()], // исключаем node_modules
    }
}