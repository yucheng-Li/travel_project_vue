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
            vacationList:[]
        }
    },
    mounted() {
        this.$http.get('/api/dataHome.json').then((res) => {
            this.list = res.data.data[0].swiperList;
            this.iconList = res.data.data[0].iconsList;
            this.hotList = res.data.data[0].hotList;
            this.likeList = res.data.data[0].likeList;
            this.vacationList = res.data.data[0].vacationList;

            console.log(res)
            }
        )
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
