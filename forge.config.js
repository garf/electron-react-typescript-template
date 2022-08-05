// If you have set config.forge to a JavaScript file path in package.json:
// Only showing the relevant configuration for brevity
module.exports = {
  plugins: [
    ['@electron-forge/plugin-webpack', {
      mainConfig: './webpack.main.config.js',
      renderer: {
        config: './webpack.renderer.config.js',
        entryPoints: [{
          name: 'main_window',
          html: './src/renderer/index.html',
          js: './src/renderer/index.js'
        }]
      }
    }]
  ]
}
