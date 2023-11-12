import preact from '@preact/preset-vite'
import { visualizer } from "rollup-plugin-visualizer"
import { PluginOption, defineConfig } from 'vite'
import { checker } from 'vite-plugin-checker'

export default defineConfig({
  plugins: [
    preact(),
    checker({ typescript: true }), // , eslint: { lintCommand: 'eslint "./src/**/*.{ts,tsx}"' }
    visualizer({
      template: "treemap",
      open: false,
      gzipSize: true,
      brotliSize: true,
      filename: "bundleSizeAnalysis.html",
    }) as PluginOption,
  ],
})
