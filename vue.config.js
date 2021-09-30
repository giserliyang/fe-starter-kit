const path = require('path')
const webpack = require('webpack')
const resolve = dir => {
  return path.join(__dirname, dir)
}
const DevServerProxy = require('./dev.proxy.js')

module.exports = {
  devServer: {
    open: true,
    port: 2020,
    proxy: DevServerProxy,
    overlay: {
      warnings: false,
      errors: true
    }
  },
  publicPath: process.env.NODE_ENV === 'production' ? process.env.BASE_URL : '/',
  lintOnSave: true,
  productionSourceMap: false,
  css: {
    sourceMap: false
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@': resolve('src')
      },
      extensions: ['.js', '.vue', '.scss', '.css', '.json']
    },
    plugins: [new webpack.ContextReplacementPlugin(/moment[/\\]locale$/, /zh-cn/)]
  },
  chainWebpack: config => {
    config.plugin('html').tap(args => {
      args[0].title = '前端学习'
      return args
    })
    config.optimization.splitChunks({
      cacheGroups: {
        elementUI: {
          name: 'element',
          priority: 20,
          test: /[\\/]node_modules[\\/]_?element-ui(.*)/,
          chunks: 'all'
        },
        highcharts: {
          name: 'highcharts',
          priority: 20,
          test: /[\\/]node_modules[\\/]_?highcharts(.*)/,
          chunks: 'all'
        }
      }
    })
  }
}
