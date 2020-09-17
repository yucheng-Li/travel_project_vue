# Part1-Project_environment_config
### 1.vue-cli中项目样式初始化
+ use npm to loding a plugin name reset-css than we can init our project css-style by this
### 2.配置stylus stylus-loader 全局样式
    + 配置 stylus 全局样式，比如看设计稿的时候，会有一些公用的东西，可以提前参考设计稿  配好全局，后面直接使用就好了，如果没有就后面写在抽离
    + 1. npm i stylus stylus-loader -s
    + 2. 安装好后在css下新建一个var.styl 的文件
    + 3. 然后我们就可以在 var.styl 中编写全局的变量 eg: $bgColor = red,
    + 4. 在我们import  var.styl后我们就可以在css样式中引用它, 可以直接令 background:$bgColor
    + 5. 注意我们要在style部分声明一下： <style scoped lang="stylus" > 
        因为 Sass/Scss与Less、stylus 它们都是css预处理器,这里要注意一下

### 3.vue-cli4的alias配置问题
    + const path = require('path');
      
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
          }
      };
    + 此处注意我们引入的时候要加个 ~ 才行; @import '~css/var.styl'
    + 也就是说我们在 improt 'css/xxx' 中可以直接用别名, 在 @import '~css/xxx' 中要加~ 

### 4.填坑-install swiper后出现的cannot find swiper/swiper.css 的问题
 + 唉，确实在swiper的路径下找不到这个css文件，所以只能换个路径  vue-awesome-swiper/node_modules/swiper/dist/css/swiper.css
# travel_project_vue 

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
