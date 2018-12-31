<template>
    <div>
      <div class="header-top">
        <div class="header">
          <!--<p class="font-home">首页</p>-->
          <i class="iconfont icon-chaxun1"></i>
          <i class="iconfont icon-fabu"></i>
        </div>
        <div class="sort">
          <i class="iconfont icon-caidan" :class="{isshow:true}"></i>
          <i class="iconfont icon-caidan transform" :class="{isshow:false}" ></i>
          <div class="radiochoose">
            <label>综合<input type="radio" name="change" value=""></label>
            <label>最新<input type="radio" name="change" value=""></label>
            <label>最热<input type="radio" name="change" value=""></label>
          </div>
          <div class="clearfloat"></div>
        </div>
      </div>
    </div>
</template>

<script>

  export default {

  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .clearfloat
    clear: both
  .header-top
    position : fixed
    .header //导航栏
      width:3.75rem
      height: 0.40rem
      display: flex
      background-color: #3366FF
      color: white
      .icon-chaxun1
        margin:0.075rem 0 0 2.8rem
      .icon-fabu
        margin:0.075rem 0 0 0.2rem
    .sort
      width:3.75rem
      background-color: white
      margin:0
      border-bottom: 1px solid gray
      /*display none*/
      .radiochoose
        float: left
        margin: 0.04rem 0 0 0.12rem
        font-size: 0.2rem
      .icon-caidan
        float: left
        margin: 0.05rem 0 0 0.08rem
        &.transform
          transform: rotate(90deg)
        &.isshow
          display: none
</style>
