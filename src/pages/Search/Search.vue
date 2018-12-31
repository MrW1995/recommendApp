<template>
    <div>
      <div class="header">
        <i class="iconfont icon-fanhui1" @click="$router.back()"></i>
        <input type="text" v-model="inputVal" class="search-input" placeholder="搜索">
        <span class="search-button">搜索</span>
      </div>
      <div>

      </div>
    </div>
</template>

<script>
  export default {
    data(){
      return{
        inputVal:''
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .header
    width 3.75rem
    height 0.40rem
    display flex
    background-color #3366FF
    .icon-fanhui1
      color #F8F8F8
      font-size 0.26rem
      margin 0.06rem 0 0 0.15rem
    .search-input
      margin 0.06rem 0 0 0.02rem
      width 2.28rem
      height 0.26rem
      border none
      color #F8F8F8
      background:rgba(0,0,0,0.2);
      background-image: url(../../assets/imgs/search-black.png)/*设置小图标*/
      background-size: 0.16rem 0.16rem/*小图标的大小*/
      background-position: 0.05rem 0.06rem/*小图标在input的位置*/
      background-repeat: no-repeat/*背景小图标不重复*/
      padding: 0 0 0 0.3rem/*设置input内边距*/
      &::-webkit-input-placeholder
        color #F8F8F8
        font-family "Microsoft YaHei"
    .search-button
      margin 0.04rem 0 0 0.1rem
      color #F8F8F8
      font-size 0.21rem
</style>
