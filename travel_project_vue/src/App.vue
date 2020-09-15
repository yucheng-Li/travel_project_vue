<template>
  <div id="app">
    <Home> </Home>
    <router-view name="Home"></router-view>
  </div>
</template>

<script>
import Home from './components/home/Home'
export default {
  name: 'App',
  components: {
    Home
  }
}
</script>

<style>
 
</style>
