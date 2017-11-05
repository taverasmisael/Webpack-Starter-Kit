const path = require('path')
const pkg = require('../package.json')
const ProjectConfig = pkg.ProjectConfig

const replaceUnderscores = (string = '') => [...string].map(s => (s === '_' ? ' ' : s)).join('')

const BASE_FOLDER = path.resolve(__dirname, '../')
const SOURCE_FOLDER = path.resolve(BASE_FOLDER, ProjectConfig.source)
const DIST_FOLDER = path.resolve(BASE_FOLDER, ProjectConfig.dist)
const APP_NAME = ProjectConfig.displayName
const PACKAGE_NAME = replaceUnderscores(pkg.name || APP_NAME)

module.exports = {
  BASE_FOLDER,
  SOURCE_FOLDER,
  DIST_FOLDER,
  PACKAGE_NAME,
  APP_NAME
}
