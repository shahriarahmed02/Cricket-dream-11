import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  // If we are on GitHub Actions, use the subfolder, otherwise use root
  base: process.env.GITHUB_ACTIONS ? '/Cricket-dream-11/' : '/',
  plugins: [
    react(),
    tailwindcss(),
  ],
})