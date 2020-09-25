<template>
<div class="Hot">
    <div class="Hot-header">
        <img src="http://img1.qunarzz.com/piao/fusion/1711/16/bfbb9874e8f11402.png" alt="">
        <span class="Hot-left">本周热门榜单</span>
        <span class="Hot-right">全部榜单</span>
    </div>

    <div class="Hot-buttom">
        <ul class="Hot-ul">
            <li class="Hot-li" v-for="(item, index) in hotList" :key="index">
                <img :src=item.imgUrl alt="">
                    <br>
                    <p class="Hot-word">{{item.title}}</p>
                    <p class="Hot-money">{{item.mark}}</p>
            </li>
        </ul>
    </div>
</div>
</template>

<script>
export default {
    props:['hotList'],
    data() {
        return {
            hot_list:[
                {
                    url:'http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_150x150_06cb3e52.jpg',
                    name:'故宫',
                    money:'￥20'
                },
                {
                    url:'http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_150x150_06cb3e52.jpg',
                    name:'十处名胜古迹游玩出行计划',
                    money:'￥20'
                },
                {
                    url:'http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_150x150_06cb3e52.jpg',
                    name:'故宫',
                    money:'￥20'
                },
                {
                    url:'http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_150x150_06cb3e52.jpg',
                    name:'故宫',
                    money:'￥20'
                },
                {
                    url:'http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_150x150_06cb3e52.jpg',
                    name:'故宫',
                    money:'￥20'
                },
                {
                    url:'http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_150x150_06cb3e52.jpg',
                    name:'故宫',
                    money:'￥20'
                },{
                    url:'http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_150x150_06cb3e52.jpg',
                    name:'故宫',
                    money:'￥20'
                },
            ]
        }
    },
}
</script>
 
 
<style scoped lang='stylus'>
@import '~css/common.styl'; 
    .Hot{
        margin-top: .2rem;
        background: #fff;
        font-size: .32rem;
    }
    .Hot-header{
        padding: .2rem;
        position: relative;
    }
    .Hot-header img{
        height: .3rem;
        width: .3rem;
    }
    .Hot-right{
        position: absolute;
        right:.2rem;
        margin-top:.05rem;
        font-size: .28rem;
        color: #6d6c6c;
    }
    .Hot-left{
        margin-left: .05rem;
    }
    .Hot-ul{
        margin:0 .2rem;
        overflow-x: scroll;
        white-space: nowrap;
        overflow-y:hidden;
        height: 3.15rem;
    }
    .Hot-li{
        display: flex;
        flex-direction: column;
        width: 2rem;
        text-align: center;
        display: inline-block;
        margin: 0 .17rem;
    }
    .Hot-li img {
        width: 100%;
        height: 100%;
    }
    .Hot-money{
        color: rgb(243, 167, 69);
        margin-top: .15rem;
    }
    .Hot-word{
        margin-top: .1rem;
        textOverflow();
    }


</style>
