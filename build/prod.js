const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base')
const webpack = require('webpack')

const productionConfig = merge(baseWebpackConfig, {
  mode: 'production',

  entry: './index.ts',

  plugins: [
    new webpack.DefinePlugin({
      PRODUCTION: true
    })
  ],

  devtool: 'source-map'
})

module.exports = productionConfig
