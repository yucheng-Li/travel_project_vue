<template>
<div class="header">
    <div class="header-left">
        <span class="iconfont header-left-icon">&#xe600;</span>
    </div>  
    <div class="header-search">
        <span class="iconfont">&#xe617;</span>
        输入城市/景点/游玩主题
    </div>
    <div class="header-right">
        <router-link to="/place">{{city}}</router-link>
        <span class="iconfont trigon">&#xe64a;</span>
    </div>
</div>
</template>

<script>
import {mapState} from 'vuex' 
export default {
    computed: {
     ...mapState(['city'])
    },  
}
</script>
<style scoped lang="stylus" > 
@import '~css/var.styl'

    .header{
        width: 100%;
        line-height: .88rem;
        background:$bgColor;
        display: flex;
    }
    .header-search{
        flex: 1;
        height: 100%;
        background: #fff;
        font-size: 0.32rem;
        margin: .15rem 0;
        color: #a5a5a5;
        border-radius: .15rem;
        padding: 0 .1rem;
    }   
    .header-left{
        color: #fff;
        width: .5rem;
        padding: 0 .2rem;
        .header-left-icon{
            font-size: .6rem;
        }
    }
    .header-right{
        color: #fff;
        font-size: .32rem;
        padding: 0 .2rem;
        line-height: 1.1rem;
        .trigon{    
            font-size: .25rem;
        }
    }
    .header-right a {
        color :#fff;
    }
</style>
