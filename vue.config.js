module.exports = {
  transpileDependencies: ["vuetify"],
  chainWebpack: config => {
    config.module.rules.delete('eslint');
  },
  pwa: {
    manifestOptions: {
      name: "Dissemine Amor",
      short_name: "D Amor",
      start_url: "./",
      display: "standalone",
      theme_color: "#000000",
    },
  }
};
