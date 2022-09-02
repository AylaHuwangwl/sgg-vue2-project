const {
  defineConfig
} = require('@vue/cli-service')
module.exports = defineConfig({
  // 项目上线后报错可以知道是哪里报的错
  productionSourceMap:false,
  transpileDependencies: true,
  // 关闭ESLINT校验工具
  lintOnSave: false,
  //配置代理跨域
  devServer: {
    proxy: {
      "/api": {
        target: "http://gmall-h5-api.atguigu.cn",
      },
    },
  },
})