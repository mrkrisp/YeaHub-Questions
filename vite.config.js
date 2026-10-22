import react from '@vitejs/plugin-react'
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
})
