const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');
const extractCss = new ExtractTextPlugin('styles.css');

const cssLoader = {
  loader: "css-loader", // translates CSS into CommonJS
  options: {
    sourceMap: true,
    root: path.resolve(__dirname, 'src'),
  }
}

module.exports = {
  devtool: 'inline-source-map',
  entry: "./src/index.jsx",
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.[hash].bundle.js',
    publicPath: '/'
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  devServer: {
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
        exclude: /(node_modules)/
      },
      {
        test: /\.css$/,
        use: extractCss.extract({
          fallback: "style-loader",
          use: [cssLoader]
        })
      },
    ]
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    extractCss,
  ]
}