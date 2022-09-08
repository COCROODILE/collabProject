const path = require('path')

module.exports = {
  dev: {
    // paths
    assetsSubDirectory:'static',
    assetsPublicPath:'/',
    proxyTable:{
      '/api':{
        target:'http://localhost:9090',
        changeOrigin:true,
        /* pathRewrite:{jh
          '^/api':''
        } */
      }
    }
  }
}