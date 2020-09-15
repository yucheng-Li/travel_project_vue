import Vue from 'vue'
import router from './router/index'
import App from './App.vue'
import "reset-css"
import FastClick from 'fastclick'
import './css/iconfont.css'

Vue.config.productionTip = false
FastClick.attach(document.body);


new Vue({
  render: h => h(App),
  router
}).$mount('#app')
