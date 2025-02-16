import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: ["5173-gomezz157-calculadoraim-b99tvpc4prb.ws-us117.gitpod.io"]
  }
})
