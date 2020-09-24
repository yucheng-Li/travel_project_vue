<template>
<div class="place_home">
    <Header></Header>
    <Hot></Hot>
    <Letter></Letter>
</div>
</template>

<script>
import Header from './page/header'
import Hot from './page/hot_choose'
import Letter from './page/letter'
import axios from 'axios'
export default {
    data() {
        return {
            
        }
    },
    components:{
        Header,
        Hot,
        Letter
    },
    mounted() {
        axios.get('/api/city.json')
        .then((res) => {
            this.hotcity = res.data.hotCities;
        })
    },
}
</script>
 
 
<style > 
    .place_home {
        background: #f5f5f5;
    }
</style>
