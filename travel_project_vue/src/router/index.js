import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/Home.vue'
import Place from '@/components/place/place_home.vue'
import Detail from '@/components/detail/detail_home'

Vue.use(Router)

export default new Router({
    routes:[
        {
            path:'/',
            name:'Home',
            component: Home,
        },
        {
            path:'/place',
            name:'Place',
            component: Place
        },
        {
            path:'/detail',
            name:'Detail',
            component: Detail
        }
    ],
    scrollBehavior () {
        return { x: 0, y: 0 }
      }
})