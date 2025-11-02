export default function copy404() {
  return {
    name: 'copy-404',
    writeBundle() {
      const fs = require('fs');
      const path = require('path');
      
      // Read the built index.html
      const indexPath = path.resolve(__dirname, 'dist/index.html');
      const indexPathContent = fs.readFileSync(indexPath, 'utf-8');
      
      // Add redirect script at the beginning
      const redirectScript = `
    <script>
      // Single Page Apps for GitHub Pages
      // https://github.com/rafgraph/spa-github-pages
      var pathSegmentsToKeep = 1;
      var l = window.location;
      l.replace(
        l.protocol + '//' + l.hostname + (l.port ? ':' + l.port : '') +
        l.pathname.split('/').slice(0, 1 + pathSegmentsToKeep).join('/') + '/?/' +
        l.pathname.slice(1).split('/').slice(pathSegmentsToKeep).join('/').replace(/&/g, '~and~') +
        (l.search ? '&' + l.search.slice(1).replace(/&/g, '~and~') : '') +
        l.hash
      );
    </script>
`;
      
      // Insert the script before the closing </head> tag
      const modifiedContent = indexPathContent.replace('</head>', redirectScript + '</head>');
      
      // Write 404.html
      const outputPath = path.resolve(__dirname, 'dist/404.html');
      fs.writeFileSync(outputPath, modifiedContent);
    }
  };
}

