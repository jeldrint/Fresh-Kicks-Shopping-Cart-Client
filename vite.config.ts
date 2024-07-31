import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    base: '/',
    build: {
      manifest: true,
      outDir: 'dist',
      rollupOptions: {
          input: ['./src/main.tsx', './index.html']
      },
    },
    server: {
      proxy: {
        //"/techy-blog/api": "https://blog-api-server-production-7657.up.railway.app"
        "/api": "http://localhost:3000"
      }
    }
  })

 