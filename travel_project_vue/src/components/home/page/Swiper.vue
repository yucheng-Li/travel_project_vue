<template>
<div class="header-swiper">
    <swiper ref="mySwiper" :options="swiperOptions">

    <swiper-slide v-for="(item, index) in list" :key="index"><img :src=item.imgUrl :alt=item.id></swiper-slide>
  
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
      swiperOptions:{
        pagination: {
          el: ".swiper-pagination",
          clickable: true //允许分页点击跳转
        },
          loop:true
      },
      // swiper_List:list
    }
  },
  components: {
    swiper,
    swiperSlide
  },
  directives: {
    swiper: directive
  },
  props:['list']

}
</script>
 
 
<style lang='stylus' scoped > 
  
    .header-swiper{
      width: 100%;
      background: #ccc;
      height: 0 ;
      padding-bottom: 26.26%;
    }
    .header-swiper img{
      width: 100%;
      height: 2rem;
    }
    .header-swiper >>> .swiper-pagination-bullet-active{
        background: white !important
    }

</style>
