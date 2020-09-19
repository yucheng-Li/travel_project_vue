<template>
<div class="header">
    <div class="header-left">
        <router-link to="/">
            <span class="iconfont header-left-icon">&#xe600;</span>
        </router-link>
    </div>  
    
    <div class="header-right">
        <p>城市选择</p> 
    </div>
</div>
</template>

<script>
export default {
    
}
</script>
<style scoped lang="stylus" > 
@import '~css/var.styl'

    .header{
        width: 100%;
        line-height :.88rem;
        background:$bgColor;
        position: relative;
    }
    .header-left{
        color: #fff;
        height :100%
        width: .5rem;
        padding: 0 .2rem;
        position: absolute;
    }
    .header-left-icon {
        font-size: .6rem
        color: #fff;
        vertical-align :middle;
        transform :translateY(-50%)
    }
    .header-right{
        color: #fff;
        text-align: center;
        font-size: .34rem; 
        line-height 1.1rem;
    }
   
</style>
