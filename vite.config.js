import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // allows external connections
    allowedHosts: ['margot-ethnological-axiologically.ngrok-free.dev'], // allow your ngrok URL
  }
})