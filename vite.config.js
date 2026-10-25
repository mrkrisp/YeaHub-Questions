import react from '@vitejs/plugin-react'
import path from 'path'
import { defineConfig } from 'vite'
import svgr from 'vite-plugin-svgr'

// https://vite.dev/config/
export default defineConfig({
  server: {
    port: 3000
  },
  plugins: [react(), svgr({
    svgrOptions: {
      icon: true
    }
  })],
  resolve: {
    alias: {
      '@': path.resolve('./src/'),
      '@ui': path.resolve('./src/ui/'),
      '@assets': path.resolve('./src/assets/')
    }
  }
})
