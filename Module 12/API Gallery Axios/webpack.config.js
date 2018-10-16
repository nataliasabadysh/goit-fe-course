const path = require('path'); // plugin  node
const HtmlWebpackPlugin = require('html-webpack-plugin'); // plugin added
const MiniCssExtractPlugin = require('mini-css-extract-plugin');// plugin added
const CleanWebpackPlugin = require('clean-webpack-plugin');// plugin added

module.exports = {
  entry: ['babel-polyfill', './src/app.js'],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          'style-loader',
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
        ],
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
          'style-loader',
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ['file-loader'],
      },
      {
        test: /\.hbs$/,
        exclude: /node_modules/,
        use: ['handlebars-loader'],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin('build'),
    new HtmlWebpackPlugin({    // по умолчанию этот плагин добовляет линки и скрипти в файл inject
      hash: true,
        title:'API, Modules ES6, Wabpack',
      template: './public/index.html',  // от куда взять файл
      filename: 'index.html',   // куда выложить Он
    }),
    new MiniCssExtractPlugin({
      filename: 'styles.css',
    }),
  ],
  devServer: {
    historyApiFallback: true,
    noInfo: false,
    quiet: false,
    stats: 'errors-only',
    clientLogLevel: 'warning',
    compress: true,
    port: 9002,
  },
};
