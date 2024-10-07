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
        "/api": "https://artificial-ilyse-john-eldrin-8ddb21dc.koyeb.app"
        //"/api": "http://localhost:3000"
      }
    }
  })

 