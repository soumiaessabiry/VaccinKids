import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/postcss'
import autoprefixer from 'autoprefixer'
import vitePlugin404 from './vite-plugin-404.js'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), vitePlugin404()],
  base: '/VaccinKids/', // Base path pour GitHub Pages
  css: {
    postcss: {
      plugins: [
        tailwindcss(),
        autoprefixer(),
      ],
    },
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
})
