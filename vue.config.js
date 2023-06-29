const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  // *配置全局sass/scss，详见：https://blog.csdn.net/qq_36604536/article/details/124256300
  css: {
    extract: true,
    sourceMap: false,
    loaderOptions: {
      sass: {
        additionalData: `@import "./src/styles/_variables.scss";`,
      },
    },
  },
})
