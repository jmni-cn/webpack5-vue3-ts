const { merge } = require("webpack-merge");
const ESLintPlugin = require("eslint-webpack-plugin");
const baseConfig = require("./webpack.base.config.js");

module.exports = merge(baseConfig, {
  mode: "development",
  target: "web",
  plugins: [new ESLintPlugin({ extensions: ["js", "ts", "vue"] })],
  devServer: {
    hot: true,
    open: true,
    proxy: {
      "/api": {
        // 需要代理到的真实目标服务器，如/api/user会被代理到https://api.jmni.cn
        target: "https://api.jmni.cn/c",
        // 是否更改代理后请求的headers中host地址，某些安全级别较高的服务器会对此做校验
        changeOrigin: true,
        // 默认情况下不接受将请求转发到https的api服务器上，如果希望支持，可以设置为false
        secure: false,
        // 默认情况下/api也会写入到请求url中，通过这个配置可以将其删除
        pathRewrite: {
          "^/api": "/",
        },
      }
    }}
  });
