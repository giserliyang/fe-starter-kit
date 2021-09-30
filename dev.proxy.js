module.exports = {
  '/img_verify': {
    target: 'http://10.1.192.95:8090',
    pathRewrite: {
      '^/img_verify': ''
    }
  },
  '/api_load_balance': {
    target: 'http://10.1.192.95',
    // changeOrigin: true,
    pathRewrite: {
      '^/api_load_balance': ''
    }
  }
}
