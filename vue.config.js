module.exports = {
  transpileDependencies: ["vuetify"],
  chainWebpack: config => {
    config.module.rules.delete('eslint');
  },
  pwa: {
    name: 'Dissemine Amor', // <---- this is PWA name
  }
};
