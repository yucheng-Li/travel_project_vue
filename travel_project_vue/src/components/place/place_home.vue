<template>
<div class="place_home">
    <Header></Header>
    <Hot :hotcity=hotcity></Hot>
    <Letter></Letter>
    <CityLetter :hotcity=hotcity></CityLetter>
</div>
</template>

<script>
import Header from './page/header'
import Hot from './page/hot_choose'
import Letter from './page/letter'
import CityLetter from './page/city_letter'
import axios from 'axios'
export default {
    data() {
        return {
            hotcity:[]
        }
    },
    components:{
        Header,
        Hot,
        Letter,
        CityLetter
    },
    mounted() {
        axios.get('/api/city.json')
        .then((res) => {
            this.hotcity = res.data.data.hotCities;
            console.log(this.hotcity)
        })
    },
}
</script>
 
 
<style > 
    .place_home {
        background: #f5f5f5;
    }
</style>
