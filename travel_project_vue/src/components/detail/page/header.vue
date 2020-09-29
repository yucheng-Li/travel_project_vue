<template>
<div class="detail-header">
    
    <div class="detail-header-img" @click="changeShow()">
        <img src="http://img1.qunarzz.com/sight/p0/1609/7a/7ae8ee7831836095a3.water.jpg_600x330_5d562f69.jpg" alt="">
    </div>
    <div class="detail-header-title">
        金湖风景区（AAAA级风景区）
    </div>
    <div class="detail-header-picture" v-show="flag" @click="show()">
        <swiper ref="mySwiper" :options="swiperOptions">
            <swiper-slide v-for="(item, index) in list" :key="index"><img :src=item.url :alt=item.id></swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>

        <!-- <img src="http://img1.qunarzz.com/sight/p0/1609/e4/e45d9cb483478459a3.water.jpg_r_800x800_a044eb00.jpg" alt=""> -->
    </div>

</div>
</template>

<script>
import { swiper, swiperSlide,directive } from 'vue-awesome-swiper'
import 'vue-awesome-swiper/node_modules/swiper/dist/css/swiper.css'
export default {
    data() {
        return {
            flag:false,
            swiperOptions:{
            pagination: {
                    el: ".swiper-pagination",
                    clickable: true, //允许分页点击跳转
                    type: 'fraction'
                },
              loop:false
            },
            list:[
                {
                    id:'01',
                    url:'http://img1.qunarzz.com/sight/p0/1609/e4/e45d9cb483478459a3.water.jpg_r_800x800_a044eb00.jpg'
                },
                {
                    id:'02',
                    url:'http://img1.qunarzz.com/sight/p0/1609/e4/e45d9cb483478459a3.water.jpg_r_800x800_a044eb00.jpg'
                },{
                    id:'03',
                    url:'http://img1.qunarzz.com/sight/p0/1609/e4/e45d9cb483478459a3.water.jpg_r_800x800_a044eb00.jpg'
                }
            ]
        }
    },
    methods: {
        changeShow() {
            this.flag = true;
        },
        show() {
            this.flag = false;
        }
    },
    components: {
        swiper,
        swiperSlide
    },
    directives: {
        swiper: directive
    },
}
</script>
 
 
<style scoped lang='stylus'> 

    .detail-header{
        position: relative;
    }
    .detail-header-img {
        width: 100%;
        overflow: hidden;
        height: 0;
        padding-bottom: 55%;
    }
    .detail-header-img img{
        width: 100%;
    }
    .detail-header-title {
        position:absolute;
        bottom: .3rem;
        font-size: .36rem;
        color: #fff;
        left: .4rem;
    }
    .detail-header-picture {
        position: fixed;
        top: 0;
        bottom: 0;
        background: #000;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center
    }
    .detail-header-picture img {
        /* position:absolute; */
        width: 100%;
        background: #fff;
    }
   
    .swiper-pagination-fraction, .swiper-pagination-custom, .swiper-container-horizontal > .swiper-pagination-bullets {
        position: fixed;
        font-size: .32rem;
        color: #fff;
        bottom: .6rem;
    }
</style>
