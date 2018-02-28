import DevConfig from './config/webpack.dev'
import ProdConfig from './config/webpack.prod'

const ENVS = {
  production: ProdConfig,
  development: DevConfig
}
const currentEnv = process.env.NODE_ENV !== 'production' ? 'development' : process.env.NODE_ENV
export default ENVS[currentEnv]
