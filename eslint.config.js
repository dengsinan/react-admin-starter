import { createRequire } from 'node:module'
import antfu from '@antfu/eslint-config'
import pluginQuery from '@tanstack/eslint-plugin-query'
import pluginRouter from '@tanstack/eslint-plugin-router'

const require = createRequire(import.meta.url)
const { globals } = require('./.eslintrc-auto-import.json')

export default antfu({
  react: true,
  ignores: ['src/routeTree.gen.ts'],
}, ...pluginRouter.configs['flat/recommended'], ...pluginQuery.configs['flat/recommended'], {
  languageOptions: {
    globals,
  },
})
