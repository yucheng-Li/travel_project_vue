<template>
<div class="place_home">
    <Header></Header>
    <Letter :hotcity=hotcity :city=city></Letter>
</div>
</template>

<script>
import Header from './page/header'
import Letter from './page/letter'
import axios from 'axios'
export default {
    data() {
        return {
            hotcity:[],
            city:[]
        }
    },
    components:{
        Header,
        Letter,
    },
    mounted() {
        axios.get('/api/city.json')
        .then((res) => {
            this.hotcity = res.data.data.hotCities;
            this.city = res.data.data.cities;
        })
    },
}
</script>
 
 
<style > 
    .place_home {
        background: #f5f5f5;
    }
</style>
