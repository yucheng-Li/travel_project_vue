const path = require('path');


function resolve(dir) {
    return path.join(__dirname, dir);
}
module.exports = {
    configureWebpack: {
      plugins: [
      ],
      devServer: {
        proxy: {  
            '/api': {
              target: 'http://localhost:8080', //路径指向本地主机地址及端口号
              ws: true, 
              changeOrigin: true,
              pathRewrite:{
                  '^/api': '/mock' //路径转发代理
              }
            }
      }
    },
   
},
lintOnSave: true,
chainWebpack: (config) => {
    config.resolve.alias
        .set('@', resolve('src'))
        .set('css',resolve('src/css'))
    // 这里只写了两个个，你可以自己再加，按这种格式.set('', resolve(''))
},
}
