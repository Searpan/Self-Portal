import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  // Use the repository base path on GitHub Pages.
  base: process.env.GITHUB_ACTIONS ? '/Self-Portal/' : '/',
  plugins: [react()],
})
