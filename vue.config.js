module.exports = {
  //用代理跨域
  devServer: {
    proxy: {
      '/api': {
        // 拦截器：如果请求路径中有api字段就就行拦截
        // 并将前面的主机号和端口替换成下面的target
        target: 'http://49.234.123.245:8082', // 要代理的第三方服务器
        changeOrigin: true, // 允许跨域
        pathRewrite: {
          '^/api': '' // 将路径中的api替换成''
        }
      }
    }
  }
}
