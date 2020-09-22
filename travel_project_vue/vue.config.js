const path = require('path');


function resolve(dir) {
    return path.join(__dirname, dir);
}
module.exports = {
    lintOnSave: true,
    chainWebpack: (config) => {
        config.resolve.alias
            .set('@', resolve('src'))
            .set('css',resolve('src/css'))
        // 这里只写了两个个，你可以自己再加，按这种格式.set('', resolve(''))
    },
    devServer: {
        open: true,                                 //配置自动启动浏览器
        host: 'localhost',
        port: 8080,                                 // 端口号
        https: false,
        publicPath: '/',
        proxy: {
			"/api/*": {
				target: "http://localhost:8080", //设置调用的接口域名和端口
				changeOrigin: true, //是否跨域
				ws:true,
				pathRewrite: {
					"^/api": "/"
				}
			}
		}
      }
};