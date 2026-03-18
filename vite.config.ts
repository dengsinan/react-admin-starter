import { fileURLToPath, URL } from 'node:url'
import babel from '@rolldown/plugin-babel'
import tailwindcss from '@tailwindcss/vite'
import { tanstackRouter } from '@tanstack/router-plugin/vite'
import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import AutoImport from 'unplugin-auto-import/vite'
import { FileSystemIconLoader } from 'unplugin-icons/loaders'
import IconsResolver from 'unplugin-icons/resolver'
import Icons from 'unplugin-icons/vite'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tanstackRouter({
      target: 'react',
      autoCodeSplitting: true,
    }),
    react(),
    babel({ presets: [reactCompilerPreset()] }),
    tailwindcss(),
    react(),
    babel({ presets: [reactCompilerPreset()] }),
    AutoImport({
      include: [
        /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
      ],
      imports: ['react', 'react-dom', {
        from: 'react',
        imports: ['FC'],
        type: true,
      }],
      resolvers: [
        IconsResolver({
          prefix: 'icon',
          extension: 'jsx',
          customCollections: ['custom'],
        }),
      ],
      eslintrc: {
        enabled: true,
      },
    }),
    Icons({
      compiler: 'jsx',
      jsx: 'react',
      scale: 1.0,
      customCollections: {
        custom: FileSystemIconLoader(
          './src/assets/icons',
          // eslint-disable-next-line e18e/prefer-static-regex
          svg => svg.replace(/^<svg /, '<svg fill="currentColor" '),
        ),
      },

    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
