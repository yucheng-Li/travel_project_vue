<template>
<div class="icon"> 
    <!-- <div v-for="(item, index) in icon_list" :key="index" class="icon-item">
        <img :src=item.url :alt=item.title>
        
    </div> -->
    <swiper ref="mySwiper" :options="swiperOptions">

        <swiper-slide v-for="(item, index) in page" :key="index">
            <div class="icon-item" v-for="(item1,index) in item" :key="index">
                <img :src=item1.url ><p>{{item1.title}}</p>
            </div>
        </swiper-slide>
    
        <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
</div>
</template>

<script>
import { swiper, swiperSlide,directive } from 'vue-awesome-swiper'
import 'vue-awesome-swiper/node_modules/swiper/dist/css/swiper.css'
export default {
    data() {
        return {
            icon_list:[
                {
                    title:'火车',
                    url:'//s.qunarzz.com/homenode/images/touchheader/train.png'
                },
                {
                    title:'火车',
                    url:'//s.qunarzz.com/homenode/images/touchheader/train.png'
                },
                {
                    title:'火车',
                    url:'//s.qunarzz.com/homenode/images/touchheader/train.png'
                },
                {
                    title:'火车',
                    url:'//s.qunarzz.com/homenode/images/touchheader/train.png'
                },
                {
                    title:'火车',
                    url:'//s.qunarzz.com/homenode/images/touchheader/train.png'
                },
                {
                    title:'火车',
                    url:'//s.qunarzz.com/homenode/images/touchheader/train.png'
                },
                {
                    title:'火车',
                    url:'//s.qunarzz.com/homenode/images/touchheader/train.png'
                },
                {
                    title:'火车',
                    url:'//s.qunarzz.com/homenode/images/touchheader/train.png'
                },
                {
                    title:'火车',
                    url:'//s.qunarzz.com/homenode/images/touchheader/train.png'
                },
                {
                    title:'火车',
                    url:'//s.qunarzz.com/homenode/images/touchheader/train.png'
                },
            ],
            swiperOptions:{}
        
        }
    },
    components: {
    swiper,
    swiperSlide
    },
     directives: {
      swiper: directive
    },
    swiperOptions:{
        pagination: {
          el: ".swiper-pagination",
          clickable: true //允许分页点击跳转
        },
          loop:true
    },
    computed: {
       page () {
           let pages = [];
           this.icon_list.forEach((item, index) => {
               let idx = Math.floor(index/8);
               if(!pages[idx]) pages[idx] = [];
               pages[idx].push(item)
           })
           return pages
       }
    },
}
</script>
 
 
<style scoped> 
    .icon{
        background: #fff;
        padding-bottom: .2rem;
    }
    .icon-item{
        /* display: inline-block; */
        float: left;
         width: 25%;
        padding-bottom: 25%;
        height: 0;
        background: #fff;
        font-size: .32rem;
    }
    .icon-item img {
        width : 1.1rem;
        height : 1.1rem;
        display: block;
        margin: 0 auto;
        margin-top: .2rem;
    }
    .icon-item p {
        margin-top: .2rem;
        text-align: center;
        font-weight: bold;
        color:#212121
    }
    
</style>
