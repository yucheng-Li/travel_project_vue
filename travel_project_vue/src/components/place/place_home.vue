<template>
<div class="place_home">
    <Header></Header>
    <Hot></Hot>
</div>
</template>

<script>
import Header from './page/header'
import Hot from './page/hot_choose'
export default {
    data() {
        return {
            
        }
    },
    components:{
        Header,
        Hot
    }
}
</script>
 
 
<style > 
    .place_home {
        background: #f5f5f5;
    }
</style>
