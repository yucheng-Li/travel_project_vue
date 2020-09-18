<template>
<div class="ticket">
    <div class="left ticket-item">
        <img src="http://img1.qunarzz.com/piao/fusion/1806/36/e89032c5f7714f02.png" alt="">
    </div>
    <div class="right ticket-item">
        <img src="http://img1.qunarzz.com/piao/fusion/1806/29/30427c0e0658b502.png" alt="">
    </div> 
</div>

</template>

<script>
export default {
    
}
</script>
 
 
<style scoped> 
    .ticket{
        display: flex;
        margin-top: .2rem;
        background: #fff;
    }
    .ticket-item{
        flex:1;
        height: 1.4rem;
        
    }
    .left{
        border-right: 1px solid #e0e0e0;
    }
    .ticket-item img{
        height: 100%;
        width: 100%;
    }
</style>
