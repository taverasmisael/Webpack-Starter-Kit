import { resolve } from 'path'
import ProjectConfig from './project.json'

const replaceUnderscores = (string = '') => [...string].map(s => (s === '_' ? ' ' : s)).join('')

export const BASE_FOLDER = resolve(__dirname, '../')
export const SOURCE_FOLDER = resolve(BASE_FOLDER, ProjectConfig.source)
export const DIST_FOLDER = resolve(BASE_FOLDER, ProjectConfig.dist)
export const APP_NAME = ProjectConfig.displayName
export const PACKAGE_NAME = replaceUnderscores(APP_NAME)

export const PORT = ProjectConfig.port || process.env.PORT || 8080
export const HTMLCONFIG = {
  inject: true,
  template: resolve(SOURCE_FOLDER, 'index.html'),
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
}
