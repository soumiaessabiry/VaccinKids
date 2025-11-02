import { copyFile } from 'fs/promises';
import { join } from 'path';

/**
 * Vite plugin to copy index.html to 404.html for GitHub Pages SPA routing
 */
export default function vitePlugin404() {
  return {
    name: 'vite-plugin-404',
    closeBundle() {
      // This runs after the build is complete
      const distDir = join(process.cwd(), 'dist');
      const indexPath = join(distDir, 'index.html');
      const notFoundPath = join(distDir, '404.html');
      
      return copyFile(indexPath, notFoundPath)
        .then(() => {
          console.log('✓ Copied index.html to 404.html for GitHub Pages');
        })
        .catch((err) => {
          console.error('Error copying index.html to 404.html:', err);
        });
    },
  };
}

