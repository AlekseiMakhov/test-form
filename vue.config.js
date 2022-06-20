const path = require('path');
module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "https://alekseimakhov.github.io/test-form/" : "/",
  css: {
    loaderOptions: {
      sass: {
        prependData: `
            @import "@/assets/css/variables.scss";
            `,
      },
    },
  },
  chainWebpack: (config) => {
    config.resolve.alias
      .set('@', path.join(__dirname, 'src'));
  },
  devServer: {
    disableHostCheck: true,
    inline: false,
  },
};