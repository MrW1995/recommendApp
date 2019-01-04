<template>
  <div class="wrapper" v-model="popupVisible" position="bottom">
    <div>000</div>

    <div class="gudin">
        1234123243
      <abc></abc>
    </div>

    <div>
      123
    </div>

  </div>
</template>
<script>
  import abc from '../../components/abc/abc'
  export  default {
    data(){
      return {
        popupVisible:false
      }
    },
    components:{
      abc
    }
  }
</script>


<style lang="stylus" rel="stylesheet/stylus">
  .gudin
    width 3.75rem
    heigth 1rem
    background-color red
    overflow hidden
  .wrapper
    margin  0 0 0 0
    height 5rem
    font-size 0.16rem
</style>
