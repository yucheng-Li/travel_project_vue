<template>
<div class="like">
    <div class="like-header">
        <img src="http://img1.qunarZZ.com/piao/fusion/1711/89/ebc329f16c55bb02.png" alt="">
        猜你喜欢
    </div>
    <div class="like-item" v-for="(item, index) in likeList" :key="index">
        <img :src=item.imgUrl alt="">
        <div class="like-message">
            <p class="like-message-title">{{item.title}}</p>
            <p class="">{{item.msg}}条评论</p>
            <div class="like-message-buttom">
                <span><b>{{item.pre}}</b>起</span>
                <span class="like-message-buttom-right">{{item.map}}</span>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    props:['likeList'],
    data() {
        return {
            like_list:[
                {   
                    url:'http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_150x150_06cb3e52.jpg',
                    title:'金海湖风景区',
                    comments:'1341条评论',
                    price:'￥18.8',
                    place:'平台区'
                },
                  {
                    url:'http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_150x150_06cb3e52.jpg',
                    title:'金海湖风景区',
                    comments:'1341条评论',
                    price:'￥18.8',
                    place:'平台区'

                },
                  {
                    url:'http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_150x150_06cb3e52.jpg',
                    title:'金海湖风景区',
                    comments:'1341条评论',
                    price:'￥18.8',
                    place:'平台区'

                },
                  {
                    url:'http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_150x150_06cb3e52.jpg',
                    title:'金海湖风景区',
                    comments:'1341条评论',
                    price:'￥18.8',
                    place:'平台区'

                },
                  {
                    url:'http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_150x150_06cb3e52.jpg',
                    title:'金海湖风景区',
                    comments:'1341条评论',
                    price:'￥18.8',
                    place:'平台区'

                },
                  {
                    url:'http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_150x150_06cb3e52.jpg',
                    title:'金海湖风景区',
                    comments:'1341条评论',
                    price:'￥18.8',
                    place:'平台区'

                },
            ]
        }
    },
}
</script>
 
 
<style > 
    .like{
        margin-top: .2rem;
        background: #fff;
        /* height: 6rem; */
    }
    .like-header img{
        width: .3rem;
        height: .3rem;
    }
    .like-header{
        font-size: .32rem;
        /* margin: .2rem; */
        padding: .2rem;
    }
    .like-item{
        display: flex;
        font-size: .32rem;
        padding: .2rem;
        border-bottom: 1px solid #e0e0e0;

    }
    .like-item img {
        width: 2.4rem;
        height: 2.4rem;
    }
    .like-message{
        width: 100%;
        display: flex;
        flex-direction: column;
        /* text-align: center; */
    }
    .like-message p {
        margin: .2rem .2rem;
    }
    .like-message-title {
        font-size: .36rem;
        font-weight: bold;
    }
    .like-message-buttom {
        margin-top: .4rem;
        margin-left: .3rem;
        position: relative;
    }
    .like-message-buttom b {
        font-size: .36rem;
        color: rgb(241, 163, 60);
        margin-right: .05rem;
    }
    .like-message-buttom-right {
        position: absolute;
        right: .2rem;
    }
</style>
