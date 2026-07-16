import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

// Plugin to copy index.html to 404.html for GitHub Pages SPA routing
function ghPagesPlugin() {
  return {
    name: 'gh-pages-404',
    closeBundle() {
      const fs = require('fs')
      const indexPath = resolve(__dirname, 'dist/index.html')
      const notFoundPath = resolve(__dirname, 'dist/404.html')
      if (fs.existsSync(indexPath)) {
        fs.copyFileSync(indexPath, notFoundPath)
      }
    },
  }
}

export default defineConfig({
  plugins: [react(), ghPagesPlugin()],
  base: '/',
  publicDir: 'public',
})
