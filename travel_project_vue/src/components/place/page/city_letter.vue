<template>
<div class="city-letter">
    <div class="City-hot-head">
        热门城市
    </div>
    <div class="City-hot-choose">
        <ul class="City-hot-ul">
            <li v-for="item in hotcity" :key="item.id">{{item.name}}</li>
        </ul>
    </div>
</div>
</template>

<script>

export default {
    props:['hotcity'],
    data() {
        return {
            
        }
    },
}
</script>
 
 
<style > 
     .City-hot-head {
        font-size: .32rem;
        background: #f5f5f5;
        height: .36rem;
        padding: .2rem;
    }

    .City-hot-ul li{
        text-align: center;
        font-size: .32rem;
        width: 33%;
        line-height: 1rem;
        /* margin: .3rem 0; */
        float: left;
        border-bottom: 1px solid #e0e0e0;
    }   
    .City-hot-ul {
        position: relative;
        overflow: hidden;
        background: #fff;
    }
    .City-hot-ul::before{
        position: absolute;
        content: ' ';
        height: 100%;
        width: 33.3%;
        left: 33.3%;
        /* margin: .3rem 0; */
        border-left: 1px solid #e0e0e0;
        border-right: 1px solid #e0e0e0;
    }
</style>
