import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    outDir: 'docs',
    sourcemap: false,
    assetsDir: 'node-project'
  },
  server: {
    port: 8080
  }
})
