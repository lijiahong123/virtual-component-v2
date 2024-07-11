const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: process.env.NODE_ENV === 'production'
    ? '/virtual-component-v2/'
    : '/',
  configureWebpack: {
    output: {
      libraryExport: "default",
    },
  },
});
