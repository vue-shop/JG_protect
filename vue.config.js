module.exports = {
  devServer: {
    proxy: {
      '/new_mobile': {
        target: 'https://www.jmgo.com',
        ws: true,
        changeOrigin: true
      }
    }
  }
}
