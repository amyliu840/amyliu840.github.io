import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "https://amyliu840.github.io",
  build: {
    cssMinify: 'esbuild' // 默认通常是 esbuild，但如果显式设置了 lightningcss，改回 esbuild 可避免严格语法报错
  }
})
