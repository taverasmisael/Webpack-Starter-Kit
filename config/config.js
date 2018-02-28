import { resolve } from 'path'
import { ProjectConfig, name } from '../package.json'

const replaceUnderscores = (string = '') => [...string].map(s => (s === '_' ? ' ' : s)).join('')

const BASE_FOLDER = resolve(__dirname, '../')
const SOURCE_FOLDER = resolve(BASE_FOLDER, ProjectConfig.source)
const DIST_FOLDER = resolve(BASE_FOLDER, ProjectConfig.dist)
const APP_NAME = ProjectConfig.displayName
const PACKAGE_NAME = replaceUnderscores(name || APP_NAME)

export default {
  BASE_FOLDER,
  SOURCE_FOLDER,
  DIST_FOLDER,
  PACKAGE_NAME,
  APP_NAME
}
