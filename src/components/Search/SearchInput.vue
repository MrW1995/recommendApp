<template>
  <div class="search-input">
    <mt-button class="button-move" @click="$router.push('/search')">
      <img src="../../assets/imgs/search.png" class="mt-button-img" slot="icon">
       查询
    </mt-button>
  </div>
</template>

<script>
  export default {}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .search-input
    float left
    margin-bottom 0
    margin:-0.78rem 0 0 0
  .mint-button--normal
    margin-bottom:0
    margin-left: 0.75rem
    width 2.3rem
    height: 0.31rem
    background-color:	#F8F8F8
    border-radius 0.8rem
    opacity 0.5
  .mt-button-img
    width 0.15rem
    height 0.15rem
    font-size: 0.15rem
  .mint-button-text
    color: black
    font-size: 0.16rem
    margin: 0 0 0 0
</style>
