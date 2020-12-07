const path = require('path');
const devMode = process.env.Node_ENV !== 'production';
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = {
  entry: './src/App.js',
  devtool: 'source-map',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'App.js'
  },
  mode: 'development',
  devServer: {
    contentBase: path.resolve(__dirname, 'public'),
    port:9090,
    open: 'google chrome',
    historyApiFallback: true
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },{
        test: /\.(sa|sc|c)ss$/,
        use: [
          devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: true,
              localIdentName: '[local]--[hash:base64:5]',
              sourceMap: true
            }
          },{
            loader: 'sass-loader'
          }
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: devMode ? '[name].css' : '[name].[hash].css',
      chunkFilename: devMode ? '[id].css' : '[id].[hash].css'
    })
  ]
}