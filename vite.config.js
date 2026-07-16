import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import { copyFileSync, existsSync } from 'fs'

// Plugin to copy index.html to 404.html for GitHub Pages SPA routing
function spaFallbackPlugin() {
  return {
    name: 'spa-fallback-404',
    closeBundle() {
      const indexPath = resolve(__dirname, 'dist/index.html')
      const notFoundPath = resolve(__dirname, 'dist/404.html')
      if (existsSync(indexPath)) {
        copyFileSync(indexPath, notFoundPath)
      }
    },
  }
}

export default defineConfig({
  plugins: [react(), spaFallbackPlugin()],
  base: '/',
  publicDir: 'public',
})
