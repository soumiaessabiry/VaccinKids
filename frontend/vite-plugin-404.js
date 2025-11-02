import { copyFile } from 'fs/promises';
import { join } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

/**
 * Vite plugin to copy index.html to 404.html for GitHub Pages SPA routing
 */
export default function vitePlugin404() {
  return {
    name: 'vite-plugin-404',
    closeBundle() {
      // This runs after the build is complete
      // Use the build.outDir from vite config or default to 'dist'
      const distDir = join(process.cwd(), 'dist');
      const indexPath = join(distDir, 'index.html');
      const notFoundPath = join(distDir, '404.html');
      
      return copyFile(indexPath, notFoundPath)
        .then(() => {
          console.log('✓ Copied index.html to 404.html for GitHub Pages');
        })
        .catch((err) => {
          // If dist/index.html doesn't exist, log warning but don't fail
          if (err.code === 'ENOENT') {
            console.warn('⚠ index.html not found in dist, skipping 404.html copy');
          } else {
            console.error('Error copying index.html to 404.html:', err);
          }
        });
    },
  };
}

