module.exports = {
  "transpileDependencies": [
    "vuetify"
  ],
  devServer: {
    host: '0.0.0.0',
    port: '85', //name of port
    public: '0.0.0.0:85',
    disableHostCheck: true,
    noInfo: true
  },
  publicPath: process.env.NODE_ENV ==='production' ? '/portfolio/' : '/'
} 