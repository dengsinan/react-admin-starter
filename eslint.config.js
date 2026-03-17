import antfu from '@antfu/eslint-config'
import pluginQuery from '@tanstack/eslint-plugin-query'
import pluginRouter from '@tanstack/eslint-plugin-router'

export default antfu({
  react: true, // 明确开启 React 支持
  ignores: ['src/routeTree.gen.ts'],
}, ...pluginRouter.configs['flat/recommended'], ...pluginQuery.configs['flat/recommended'])
