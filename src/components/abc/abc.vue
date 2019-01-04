<template>
  <scroll class="wrapper" :data="arr" :pulldown="pulldown" @pullingDown="loadData">
    <div class="box">
      <div v-for="item in arr" class="contentImgBox">
        {{item}}
      </div>
    </div>
  </scroll>
</template>

<script>
  import scroll from '../../components/Sroll/Scroll'
  export default {
    data() {
      return {
        popupVisible:true,
        arr:['1','2','3','4','5','6','7','8','1','2','3','4','5','6','7','8','1','2','3','4','5','6','7','8','1','2','3','4','5','6','7','8','1','2','3','4','5','6','7','8','1','2','3','4','5','6','7','8','1','2','3','4','5','6','7','8','1','2','3','4','5','6','7','8','1','2','3','4','5','6','7','8'],
        pulldown: true
      }
    },
    components:{
      scroll
    },
    created() {
      this.loadData()
    },
    methods: {
      loadData() {
        console.log("123")
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  ul,li //除去ul li 的一些默认配置
    -webkit-margin-before: 0em
    -webkit-margin-after: 0em
    -webkit-margin-start: 0px
    -webkit-margin-end: 0px
    -webkit-padding-start: 0px
    text-align:left
    list-style: none
    font-size:0.18rem

    .wrapper
      width 3.75rem
      overflow: hidden
      .box
        height 6rem
        overflow hidden
</style>
