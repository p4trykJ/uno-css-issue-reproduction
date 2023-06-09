import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import UnoCSS from 'unocss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    UnoCSS({
      // mode: process.env.NODE_ENV === 'development' ? 'global' : 'vue-scoped'
      mode: process.env.NODE_ENV === 'development' ? 'global' : 'shadow-dom'
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  define: {
    'process.env': process.env
  },
  build: {
    emptyOutDir: false,
    manifest: true,
    sourcemap: true,
    outDir: 'dist',
    lib: {
      name: 'aaa',
      entry: './src/webcomponents.ts',
      formats: ['esm']
    },
    cssCodeSplit: false,
    rollupOptions: {
      output: {
        entryFileNames: `wc.js`
      }
    }
  }
})
