<template>
<div class="home">
    <HomeHeader></HomeHeader>
    <Swiper :list=list></Swiper>
    <Icon  :iconList=iconList></Icon>
    <Location></Location>
    <Ticket1></Ticket1>
    <Hot :hotList=hotList></Hot>
    <Like :likeList=likeList></Like>
    <Vacation1 :vacationList=vacationList></Vacation1>
</div>
</template>

<script>
import {mapState} from 'vuex'
import HomeHeader from './page/Header'
import Swiper from './page/Swiper'
import Icon from './page/Icon'
import Location from './page/Location'
import Ticket1 from './page/Ticket1'
import Hot from './page/Hot'
import Like from './page/Like'
import Vacation1 from './page/Vacation1'
export default {
    components:{
        HomeHeader,
        Swiper,
        Icon,
        Location,
        Ticket1,
        Hot,
        Like,
        Vacation1
    },
    data() {
        return {
            list:[],
            iconList:[],
            hotList:[],
            likeList:[],
            vacationList:[],
            nowCity:''
        }
    },
    computed: {
        ...mapState(['city'])
    },
    methods: {
         getHttp(){
            this.$http.get('/api/dataHome.json').then((res) => {
            for(let i = 0; i < res.data.data.length; i++) {
                if(this.city == res.data.data[i].city) {
                        // this.nowCity = res.data.data[i].city
                        let place = res.data.data[i];   
                        this.list = place.swiperList;
                        this.iconList = place.iconsList;
                        this.hotList = place.hotList;
                        this.likeList = place.likeList;
                        this.vacationList = place.vacationList;
                    }
                }
            })
        }     
    },
    mounted() {
        this.getHttp()
    },
    activated() {
        if(this.city != this.newCity) {
            this.getHttp();
            this.newCity = this.city
        }
    },
}
</script>
 
 
<style scoped> 
    .home{
        background: #f5f5f5;
    }
    html{
        height: 0;
        width: 100%;;
    }
</style>
