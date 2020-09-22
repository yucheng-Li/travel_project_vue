import Vue from 'vue'
import router from './router/index'
import App from './App.vue'
import "reset-css"
import FastClick from 'fastclick'
import './css/iconfont.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'
// import style
// import 'swiper/css/swiper.css'
// import 'vue-awesome-swiper/node_modules/swiper/dist/css/swiper.css'
// If you use Swiper 6.0.0 or higher
import 'swiper/swiper-bundle.css'
import axios from 'axios'

Vue.use(VueAwesomeSwiper, /* { default options with global component } */)

Vue.config.productionTip = false
FastClick.attach(document.body);

Vue.prototype.$http = axios
 axios.create({
  baseURL: '/api',  //process.env.BASE_API,
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
