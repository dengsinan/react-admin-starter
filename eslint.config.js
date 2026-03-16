import antfu from '@antfu/eslint-config'
import pluginRouter from '@tanstack/eslint-plugin-router'

export default antfu({
  react: true, // 明确开启 React 支持
  ignores: ['src/routeTree.gen.ts'],
}, ...pluginRouter.configs['flat/recommended'])
