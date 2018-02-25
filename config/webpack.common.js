const path = require('path')
const webpack = require('webpack')

const FaviconsWebpackPlugin = require('favicons-webpack-plugin')
const CompressionPlugin = require('compression-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const StyleLintPlugin = require('stylelint-webpack-plugin')

const CONFIG = require('./config')

module.exports = {
  context: path.resolve(__dirname, '../'),
  entry: {
    app: [path.resolve(CONFIG.SOURCE_FOLDER, './styles/main.scss'), path.resolve(CONFIG.SOURCE_FOLDER, './js/index.js')]
  },
  output: {
    path: CONFIG.DIST_FOLDER,
    filename: '[name].[hash:8].js'
  },
  devServer: {
    contentBase: CONFIG.SOURCE_FOLDER,
    compress: true,
    hot: false
  },
  plugins: [
    new CompressionPlugin({ algorithm: 'gzip', regExp: /\.(js|html|css)$/, minRatio: 0 }),
    new ExtractTextPlugin({
      filename: '[name].[hash:8].css',
      allChunks: true
    }),
    new FaviconsWebpackPlugin(path.resolve(CONFIG.SOURCE_FOLDER, 'favicon.png')),
    new StyleLintPlugin(),
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
        test: /\.(png|jpg|gif|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'assets/[name]-[hash:8].[ext]'
            }
          }
        ]
      },
      {
        test: /\.(eot|ttf|woff|woff2|otf)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'assets/fonts/[name]-[hash:8].[ext]'
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
        use: ['css-hot-loader'].concat(
          ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: [
              {
                loader: 'css-loader',
                options: { importLoaders: 2, minimize: true, module: true }
              },
              { loader: 'sass-loader', options: { sourceMap: true } },
              { loader: 'postcss-loader', options: { sourceMap: true } }
            ]
          })
        )
      }
    ]
  }
}
