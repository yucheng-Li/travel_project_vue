<template>
<div class="letter">
    <div class="letter-header">
        字母排序
    </div>

    <div class="letter-sort">
        <ul class="letter-sort-ul">
            <li>A</li>
            <li>B</li>
            <li>C</li>
            <li>D</li>
            <li>E</li>
            <li>F</li>
            <li>G</li>
            <li>H</li>
            <li>I</li>
            <li>J</li>
            <li>K</li>
            <li>L</li>
            <li>M</li>
            <li>N</li>
            <li>O</li>
            <li>P</li>
            <li>Q</li>
            <li>R</li>
            <li>S</li>
            <li>T</li>
            <li>W</li>
            <li>X</li>
            <li>Y</li>
            <li>Z</li>
        </ul>
    </div>
</div>
</template>

<script>
export default {
    
}
</script>
 
 
<style > 
    .letter-header {
        font-size: .32rem;
        margin: .2rem;
        height: .6rem;
    }
    .letter-sort {
        font-size: .32rem;
    }
    .letter-sort li {
        background: #fff;
        float: left;
        text-align: center;
        line-height: 1rem;
        width: 16.6%;
        /* border-bottom: 1px solid #e0e0e0; */

    }
    /* .letter-sort-ul {
        position: relative;
        overflow: hidden;
        background: #fff;
    }
    .letter-sort-ul::before{
        position: absolute;
        content: ' ';
        height: 100%;
        /* width: 16.6%; */
        /* left: 16.6%; */
        /* right: 16.6%; */

        /* margin: .3rem 0; */
        /* border-left: 1px solid #e0e0e0; */
        /* border-right: 1px solid #e0e0e0; */
    /* } */
</style>
