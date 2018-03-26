import DevConfig from './webpack/webpack.dev'
import ProdConfig from './webpack/webpack.prod'

const ENVS = {
  production: ProdConfig,
  development: DevConfig
}
const currentEnv = process.env.NODE_ENV !== 'production' ? 'development' : process.env.NODE_ENV
export default ENVS[currentEnv]
