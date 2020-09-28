<template>
    <div ref="container" class="container">
            <div>
        <div class="City-hot">
            <div class="City-hot-head">
                热门城市
            </div>
            <div class="City-hot-choose">
                <ul class="City-hot-ul">
                    <li v-for="item in hotcity" :key="item.id" @click="cityChange(item.name)">{{item.name}}</li>
                </ul>
            </div>
        </div>
        <div class="letter">
            <div class="letter-header">
                字母排序
            </div>

            <div class="letter-sort">
                <ul class="letter-sort-ul" >
                    <li v-for="(item, index) in letter_sort" :key="index" @click='joinTo(item)'>{{item}}</li>
                </ul>
            </div>
            </div>
            <div class="city-letter" v-for="(item, index) of city" :key="index" :ref="index">
                <div class="City-head"  >
                    {{index}}
                </div>
                <div class="City-choose">
                    <ul class="City-ul">
                        <li v-for="item1 in item" :key="item1.id">{{item1.name}}</li>
                    </ul>
                </div>
            </div>
</div>
    </div>

</template>

<script>
import BScroll from 'better-scroll'
import {mapMutations} from 'vuex'
export default {
    data() {
        return {
            letter_sort:[
                'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','W','X','Y','Z'
            ],
            scroll:''
        }
    },
    methods: {
    joinTo(key) {
        this.scroll.scrollToElement(this.$refs[key][0])
        console.log(this.$refs[key][0])
    },
    cityChange(city_name) {
        this.changeCity(city_name);
        this.$router.push('/')
    },
    ...mapMutations(['changeCity'])
    },
    mounted() {
        this.scroll = new BScroll('.container',
        {
        })    
    },
    props:['hotcity','city']
}
</script>
 
 
<style lang='stylus'> 
    .container {
        position: absolute;
        overflow: hidden;
        left:0;
        right:0;
        bottom:0;
        top:1.1rem;
        background: #f5f5f5;
    }
    .City-hot-choose {
        height: 2rem;
        background #ccc
    }
    .letter-header {
        font-size: .32rem;
        margin: .2rem .2rem 0 .2rem;
        height: .6rem;
    }
    .letter-sort {
        font-size: .32rem;
        height: 4rem;
    }
    .letter-sort li {
        background: #fff;
        float: left;
        text-align: center;
        line-height: 1rem;
        width: 16.6%;
        /* border-bottom: 1px solid #e0e0e0; */

    }
        .City-hot-head {
        font-size: .32rem;
        background: #f5f5f5;
        height: .36rem;
        padding: .2rem;
    }

    .City-hot-ul li{
        position relative
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
    @import '~css/common.styl'
     .City-head {
        font-size: .32rem;
        background: #f5f5f5;
        height: .36rem;
        padding: .2rem;
    }

    .City-ul li{

        text-align: center;
        font-size: .32rem;
        width: 25%;
        line-height: 1rem;
        float: left;
        border-bottom: 1px solid #e0e0e0;
    }   
    .City-ul li p {
        margin: 0 .1rem;
        textOverflow()

    }
    .City-ul {
        position: relative;
        overflow: hidden;
        background: #fff;
    }
    .City-ul::before{
        position: absolute;
        content: ' ';
        height: 100%;
        width: 25%;
        left: 25%;
        /* margin: .3rem 0; */
        border-left: 1px solid #e0e0e0;
        border-right: 1px solid #e0e0e0;
    }
    .City-ul::after{
        position: absolute;
        content: ' ';
        height: 100%;
        
        right: 25%;
        /* margin: .3rem 0; */
        border-left: 1px solid #e0e0e0;
    }
</style>
