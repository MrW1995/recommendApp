<template>
  <div class="wrapper" ref="wrapper">
    <ul>
      <li v-for="item in 8">{{item}}</li>
    </ul>
  </div>
</template>

<script>
  import BScroll from 'better-scroll';
  export default {
    mounted() {
      this.$nextTick(() => {
        this.scroll = new BScroll(this.$refs.wrapper);
      });
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">

  .wrapper
    width: 100%
    position:absolute
    top: 63px
    bottom: 50px
    overflow: hidden
    z-index: 1
    background-color red
  ul li
    /*height:400px;*/
</style>
