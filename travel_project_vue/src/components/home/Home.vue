<template>
<div class="home">
    <HomeHeader></HomeHeader>
    <Swiper></Swiper>
    <Icon></Icon>
    <Location></Location>
    <Ticket1></Ticket1>
    <Hot></Hot>
    <Like></Like>
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
export default {
    components:{
        HomeHeader,
        Swiper,
        Icon,
        Location,
        Ticket1,
        Hot,
        Like
    }
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
