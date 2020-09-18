<template>
<div class="location">
    <div class="left location-item">
        <span class="iconfont">&#xe613;</span>
        <span>定位失败</span>
    </div>
    <div class="right location-item">
        <span class="iconfont">&#xe642;</span>
        <span>玩水季</span>
    </div> 
</div>
</template>

<script>
import '../../../css/iconfont.css'
export default {
    
}
</script>
 
 
<style scoped> 
    .location{
        display: flex;
        background :#fff;
        /* margin-top: .15rem; */
    }

    .location-item {
        flex: 1;
        font-size: .3rem;
        line-height: 1rem;
        text-align: center;
        border-top: 1px solid #e0e0e0 ;
    }

    .left{
        border-right: 1px solid #e0e0e0;
    }

    
</style>
