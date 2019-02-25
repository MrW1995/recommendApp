<template>
    <div class="search">
      <div class="header">
        <i class="iconfont icon-fanhui1" @click="$router.back()"></i>
        <input class="inputSearch" placeholder="Search">
      </div>
      <div class="searchResultList">

      </div>
    </div>
</template>

<script>
  export default {

  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .search
    display flex
    color gainsboro
    flex-flow column
    border-bottom 1px solid gainsboro
    .header
      width 3.75rem
      height 0.4rem
      display flex
      background-color white
      .icon-fanhui1
        margin auto 0 auto 0.1rem
      .inputSearch
        width 3.3rem
        font-size 0.22rem
        height 0.39rem
        border none
        margin-left 0.1rem
        outline none
        background-color white
    .searchResultList
      width 3.75rem
      height 6.26rem
      background-color white
</style>
