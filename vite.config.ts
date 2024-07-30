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
          input: ['./src/main.jsx', './index.html']
      },
    },
    server: {
      proxy: {
        //"/techy-blog/api": "https://blog-api-server-production-7657.up.railway.app"
        "/techy-blog/api": "http://localhost:3000"
      }
    }
  })

 