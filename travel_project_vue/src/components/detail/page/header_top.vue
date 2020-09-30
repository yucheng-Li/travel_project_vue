<template>
<div class="header-outerside">
    <router-link to="/">
        <div class="header-back">
            <span class="iconfont header-back-icon">&#xe600;</span>
        </div>
    </router-link>
    
     
    <div class="dt-header"  :style='styleOpacity'>
        <!-- <div class="dt-header-left">
        </div>  -->

        <div class="dt-header-right">
            <p>城市选择</p> 
        </div>
    </div> 

</div>
</template>

<script>
export default {
    data() {
        return { 
            styleOpacity:{
                opacity:0
            }
        }
    },
     mounted() {
	// 监听页面滚动事件
      window.addEventListener("scroll", this.showSearch)
    },
    methods: {
    //头部fixed定位
    showSearch() {
      let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      if (scrollTop  > 130) {   // 当页面滚动到高度300px处，动态绑定class 来设置头部固定定位
        this.styleOpacity.opacity = scrollTop/130;
        console.log(this.styleOpacity)
      }else {
        this.styleOpacity.opacity = scrollTop/130;
        console.log(this.styleOpacity)
      }
    },
    

}
}
</script>
<style lang='stylus'> 
    @import '~css/var.styl'
    
    .header-back {
        position absolute;
        left .1rem;
        top .1rem;  
        width:.75rem;
        height: .75rem;
        border-radius: 50%; 
        background #000
        opacity .5
        z-index 1000
    }
    .header-back-icon {
        position: absolute;
        left: .08rem;
        top:.06rem;
        color #fff;
        font-size .6rem
    }
    .dt-header{
        width: 100%;
        line-height :.6rem;
        background:$bgColor;
        position: fixed;
        top: 0
    }
    .dt-header-left{
        color: #fff;
        height :100%
        width: .5rem;
        padding: 0 .2rem;
        position: absolute;
        z-index 1000
    }
    .dt-header-right{
        color: #fff;
        text-align: center;
        font-size: .34rem; 
        line-height 1rem;
    }
</style>
