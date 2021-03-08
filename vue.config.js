module.exports = {
  devServer: {
    port: 3333
  },
  configureWebpack: {
    resolve: {
      extensions: ['.ts', '.vue', '.json']
    }
  }
};
