<template>
<div class="Vacation">
    <div class="Vacation-header">   
        周末去哪玩
    </div>
    <div class="Vacation-item"  v-for="(item, index) in vacationList" :key="index">
        <img :src=item.imgUrl alt="">
        <div class="Vacation-message">
            <p class="Vacation-message-first">{{item.title}}</p>
            <p class="Vacation-message-second"> {{item.msg}}</p>
        </div>
    </div>
</div>
</template>

<script>
export default {
    props:['vacationList'],
    data() {
        return {
         
        }
    },
}
</script>
 
 
<style > 
    .Vacation {
        background: #f5f5f5;
        /* background: red; */
    }
    .Vacation-header {
        font-size: .36rem;
        margin: .2rem;
    }
    .Vacation-item {
        margin-top: .2rem;
        height: 4.4rem;
        background: #fff;
    }
    .Vacation-item img {
        width: 100%;
        height: 3rem;
    }
    /* .Vacation-item img{
        
    } */
    .Vacation-message {
        font-size: .32rem;
    }
    .Vacation-message-first {
        font-size: .34rem;
        font-weight: bold;
        margin: .2rem;
    }
    .Vacation-message-second {
        margin: .2rem;
        color: rgb(139, 138, 138);
    }
</style>
