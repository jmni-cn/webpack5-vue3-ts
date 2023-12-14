const { merge } = require("webpack-merge");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
const baseConfig = require("./webpack.base.config.js");

module.exports = merge(baseConfig, {
  mode: "production",
  output: {
    clean: true,
  },
  plugins: [
    new MiniCssExtractPlugin(),
    // new CopyWebpackPlugin({
    //   // from后的路径是相对于项目的根目录，to后的路径是相对于打包后的dist目录
    //   patterns: [{ from: "./static", to: "./" }],
    // }),
    new BundleAnalyzerPlugin({
      analyzerMode: "disabled",
      generateStatsFile: true,
    }),
  ],
  optimization: {
    splitChunks: {
      // 选择对哪些文件进行拆分，默认是async，即只对动态导入的文件进行拆分
      chunks: "all",
      // 提取chunk的最小体积
      minSize: 20000,
      // 要提取的chunk最少被引用次数
      minChunks: 1,
      // 对要提取的trunk进行分组
      cacheGroups: {
        // 匹配node_modules中的三方库，将其打包成一个trunk
        defaultVendors: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendors",
          priority: -10,
        },
        default: {
          // 将至少被两个trunk引入的模块提取出来打包成单独trunk
          minChunks: 2,
          name: "default",
          priority: -20,
        },
      },
    },
  },
});
