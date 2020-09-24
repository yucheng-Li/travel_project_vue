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

### 5.文字溢出问题
 + 文字溢出问题我们同样采用一个全局样式，在CSS目录下创建 commonmon.styl 然后编辑，注意样式的顺序不能变否则不生效
 textOverflow()
    white-space: nowrap; //不换行
    text-overflow: ellipsis; //溢出部分用省略号
    overflow: hidden; //超出部分隐藏
然后我们在我们的组件处调用它
@import '~css/common.styl'; 
.Hot-word{
        margin-top: .1rem;
        textOverflow(); //这里
    }
注意加上我们stylus css预处理器

### 6.静态资源请求问题
    + 这个问题必须说道说道，看教程的时候静态资源都是放在static下面的，？我这没有static文件夹呀，
    于是机智的我自己创建了一个（我看网上都是这样教的），然而问题出现了，这样写的时候在webpack中的proxy
    api根本就请求不到数据，当时裂开，查了一个晚上，还特意看了两天webpack官方文档，后来都要放弃了，就在这时
    我发现是不是版本问题，我怎么多了一个public文件夹，一查果然，vuecli3、4没有static文件夹了，vue/cli已经默认将静态文件改存在public文件夹下了，所以我自己写的static是请求不到的，要把资源放在public里面才行，终于，结案了。果然人嘛，都是在bug中成长的，发现问题解决问题然后收获过程。 
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
