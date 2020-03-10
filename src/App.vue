<template>
  <div id="app">
    <router-view></router-view>
    <FootBar/>
  </div>
</template>

<script>
import FootBar from './components/FooterBar/FooterBar'

export default {
  components:{
    FootBar,
  }
}
</script>

<style>

</style>
