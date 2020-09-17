<template>
<div class="header-swiper">
    <swiper ref="mySwiper" :options="swiperOptions">

    <swiper-slide v-for="(item, index) in swiper_List" :key="index"><img :src=item.url :alt=item.id></swiper-slide>
    <!-- <swiper-slide><img src="//imgs.qunarzz.com/vs_ceph_vcimg/7176acd77332a433af9636eb9a2c338c.jpeg" alt=""></swiper-slide> -->
    <!-- <swiper-slide><img src="//imgs.qunarzz.com/vs_ceph_vcimg/b8c4527c41649814cc4cf86880abba54.jpeg" alt=""></swiper-slide> -->
    <!-- <swiper-slide>Slide 4</swiper-slide> -->
    <!-- <swiper-slide>Slide 5</swiper-slide> -->
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</div>
</template>

<script>
import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'
// import 'swiper/css/swiper.css'
// import 'vue-awesome-swiper/node_modules/swiper/dist/css/swiper.css'
// If you use Swiper 6.0.0 or higher
import 'swiper/swiper-bundle.css'

export default {
  data() {
    return {
      swiperOptions:{
        pagination: {
            el: '.swiper-pagination'
          },
          loop:true
      },
      swiper_List:[
        {
          id:'01',
          url:require('@/assets/img/swiper1.jpeg')
        },
        {
          id:'02',
          url:require('@/assets/img/swiper2.jpeg')
        },
        {
          id:'03',
          url:require('@/assets/img/swiper3.jpeg')
        },
      ]
    }
  },
  components: {
    Swiper,
    SwiperSlide
  },
  directives: {
    swiper: directive
  }
}
</script>
 
 
<style scoped > 
    .header-swiper{
      width: 100%;
      background: #ccc;
      height: 0 ;
      padding-bottom: 26.26%;
    }
    .header-swiper img{
      width: 100%;
      height: 100%;
    }
</style>
