/* eslint import/no-extraneous-dependencies: 0 */
import { resolve } from 'path'
import FaviconsWebpackPlugin from 'favicons-webpack-plugin'
import CompressionPlugin from 'compression-webpack-plugin'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import ExtractTextPlugin from 'extract-text-webpack-plugin'
import StyleLintPlugin from 'stylelint-webpack-plugin'
import FlowWebpackPlugin from 'flow-webpack-plugin'

import { SOURCE_FOLDER, DIST_FOLDER, HTMLCONFIG } from './config'

module.exports = {
  context: resolve(__dirname, '../'),
  entry: {
    app: [resolve(SOURCE_FOLDER, './styles/main.scss'), resolve(SOURCE_FOLDER, './js/index.js')]
  },
  output: {
    path: DIST_FOLDER,
    filename: '[name].[hash:8].js',
    chunkFilename: '[name].[chunkhash:8].js'
  },
  devServer: {
    contentBase: SOURCE_FOLDER,
    compress: true,
    hot: false
  },
  plugins: [
    new FlowWebpackPlugin(),
    new CompressionPlugin({ algorithm: 'gzip', regExp: /\.(js|html|css)$/, minRatio: 0 }),
    new ExtractTextPlugin({
      filename: '[name].[hash:8].css',
      allChunks: true
    }),
    new FaviconsWebpackPlugin(resolve(SOURCE_FOLDER, 'favicon.png')),
    new StyleLintPlugin(),
    new HtmlWebpackPlugin(HTMLCONFIG)
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
        use: ['babel-loader', 'eslint-loader']
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
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: { importLoaders: 2, minimize: true, module: true }
            },
            { loader: 'postcss-loader', options: { sourceMap: true } },
            { loader: 'sass-loader', options: { sourceMap: true } }
          ]
        })
      }
    ]
  }
}
