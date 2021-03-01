const { override, addWebpackAlias, addDecoratorsLegacy, fixBabelImports } = require('customize-cra')
const path = require('path')

module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: 'css',
  }),
  addWebpackAlias({
    '@': path.resolve(__dirname, './src'),
  }),
  addDecoratorsLegacy()
)
