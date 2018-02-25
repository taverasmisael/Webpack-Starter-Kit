const path = require('path')
const webpack = require('webpack')

const CompressionPlugin = require('compression-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const CONFIG = require('./config')

module.exports = {
  context: path.resolve(__dirname, '../'),
  entry: {
    app: [path.resolve(CONFIG.SOURCE_FOLDER, './styles/main.scss'), path.resolve(CONFIG.SOURCE_FOLDER, './js/index.js')]
  },
  output: {
    path: CONFIG.DIST_FOLDER,
    filename: '[name].[hash].js'
  },
  devServer: {
    contentBase: CONFIG.SOURCE_FOLDER,
    compress: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new CompressionPlugin({ algorithm: 'gzip', regExp: /\.(js|html|css)$/, minRatio: 0 }),
    new ExtractTextPlugin({
      filename: '[name].[hash].css',
      allChunks: true
    }),
    new HtmlWebpackPlugin({
      inject: true,
      template: path.resolve(__dirname, '../src/index.html'),
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true
      }
    })
  ],
  module: {
    rules: [
      {
        test: /\.(png|jpg|gif|eot|ttf|woff|woff2|otf|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'assets/[name]-[hash].[ext]'
            }
          }
        ]
      },
      {
        test: /\.js$/,
        exclude: [/node_modules/],
        use: [{ loader: 'babel-loader' }]
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          use: [
            {
              loader: 'css-loader',
              options: { importLoaders: 1, minimize: true }
            }
          ]
        })
      },
      {
        test: /\.(scss|sass)$/,
        exclude: /node_modules/,
        use: ExtractTextPlugin.extract({
          use: [
            {
              loader: 'css-loader',
              options: { importLoaders: 1, minimize: true, modules: true }
            },
            { loader: 'postcss-loader', options: { sourceMap: true } },
            { loader: 'sass-loader', options: { sourceMap: true } }
          ]
        })
      }
    ]
  }
}
