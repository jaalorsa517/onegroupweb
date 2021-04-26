const path = require('path');

module.exports = {
  assetsDir: 'static',
  transpileDependencies: [],

  chainWebpack: config => {
    config.plugin('html').tap(args => {
      args[0].title = 'One Group Web';
      return args;
    });
  },

  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'sass',
      patterns: [
        path.resolve(__dirname, './src/styles/mixins.sass'),
        path.resolve(__dirname, './src/styles/vars.sass'),
      ],
    },
  },
};
