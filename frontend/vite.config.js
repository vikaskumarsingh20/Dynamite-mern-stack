/* eslint-disable no-undef */
import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig(({ mode }) => {

  const env = loadEnv(mode, process.cwd(), 'VITE_')
  
  const port = parseInt(env.VITE_PORT, 10) || 4000

  return {
    plugins: [react(), tailwindcss()],
    server: {
      port,
    },
  }
})
