<template>
    <div>
      <div class="header-top">
        <div class="header">
          <slot name="headerbar"></slot>
          <slot name="iconfont"></slot>
        </div>
        <slot name="headerSeaAndSort"></slot>
      </div>
    </div>
</template>

<script>
  export default {

  }
</script>

<style  scoped lang="stylus" rel="stylesheet/stylus">
  .clearfloat
    clear: both
  .header-top
    position : fixed
    .header //导航栏
      width:3.75rem
      height: 0.40rem
      display: flex
      background-color: #3366FF
      border:none
      color: #F8F8F8
    .sort
      float left
      width:3.75rem
      height:0.43rem
      /*background-color: #3366FF*/
      display:flex
      flex-flow: column
      border-bottom: 1px solid red
      margin-top -1px
      z-index 11

</style>
