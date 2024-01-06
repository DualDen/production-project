import type webpack from 'webpack'
import { type BuildPaths } from '../build/types/config'
import path from 'path'
import { buildCssLoader } from '../build/loaders/buildCssLoader'

export default ({ config }: { config: webpack.Configuration }) => {
  const paths: BuildPaths = {
    build: '',
    html: '',
    entry: '',
    src: path.resolve(__dirname, '..', '..', 'src')
  }
  if (config.resolve?.modules !== undefined) {
    config.resolve.modules.push(paths.src)
  }
  if (config.resolve?.extensions !== undefined) {
    config.resolve.extensions.push('.ts', '.tsx')
  }
  if (config.module?.rules !== undefined) {
    config.module.rules.push(buildCssLoader(true))
  }
  return config
}
