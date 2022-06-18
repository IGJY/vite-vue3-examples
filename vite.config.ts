import { fileURLToPath, URL } from 'url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: './',
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  // 仅在本地前后端联调测试时有效，生产环境下部署无效
  server: {
    proxy: {
      '/api/': {
        // target: 'http://localhost:3001'
        target: 'http://localhost:8080',
        changeOrigin: true,
      },
    },
  },
})
