const CopyWebpackPlugin = require('copy-webpack-plugin');
const BROWSER = process.env.VUE_APP_BROWSER;

let plugins = {
   chrome: [
         { from: 'src/browsers/chrome/manifest.json', to: 'manifest.json', toType: 'file'},
         { from: 'src/browsers/chrome/content.js', to: 'content.js', toType: 'file'}
   ],
   firefox: [
         { from: 'src/browsers/firefox/manifest.json', to: 'manifest.json', toType: 'file'},
         { from: 'src/browsers/firefox/content.js', to: 'content.js', toType: 'file'}
   ],
   edge: [
         { from: 'src/browsers/edge/manifest.json', to: 'manifest.json', toType: 'file'},
         { from: 'src/browsers/edge/content.js', to: 'content.js', toType: 'file'}
   ]
}

module.exports = {
    outputDir: `dist/${BROWSER}`,
    configureWebpack: {
        plugins: [new CopyWebpackPlugin(plugins[BROWSER])]
    },
    filenameHashing: false,
    productionSourceMap: false
}