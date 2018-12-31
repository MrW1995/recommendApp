<template>
    <div>
      <div class="left-menu" :class="{isdisplay:!true}">
        <!--遮罩层-->
        <div class="showshade"></div>
        <!--右边弹出菜单-->
        <div class="menu-sort">
          <div class="menu">
            <div class="menu-title">
              <span>分类</span>
            </div>
            <div class="setting-float ">
              <i class="iconfont icon-huwaixiuxi iconfont-float"></i>
              <span class="public-fontsize park">公园</span>
            </div>
            <div class="setting-float">
              <i class="iconfont icon-fengjing iconfont-float"></i>
              <span class="public-fontsize">风景区</span>
            </div>

            <div class="setting-float">
              <i class="iconfont  icon-youleyuan iconfont-float"></i>
              <span class="public-fontsize">游乐园</span>
            </div>
            <div class="setting-float">
              <i class="iconfont icon-dongwuyuan iconfont-float"></i>
              <span class="public-fontsize">动物园</span>
            </div>
            <div class="setting-float">
              <i class="iconfont icon-zhiwuyuan iconfont-float"></i>
              <span class="public-fontsize">植物园</span>
            </div>
            <div class="setting-float">
              <i class="iconfont icon-bowuguan iconfont-float"></i>
              <span class="public-fontsize">博物馆</span>
            </div>
            <div class="setting-float">
              <a class="a">
                <i class="iconfont icon-yu iconfont-float"></i>
                <span class="public-fontsize">水族馆</span>
              </a>
            </div>
            <div class="setting-float">
              <i class="iconfont icon-lvyoujianzhumingshenggujitourism-ribensimiao iconfont-float"></i>
              <span class="public-fontsize">名胜古迹</span>
            </div>
          </div>
          <i class="iconfont icon-guanbi"></i>
        </div>
      </div>
    </div>
</template>

<script>
  export default {}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .left-menu
    position:absolute
    top:0.74rem
    &.isdisplay
      display: none;
    .showshade
      float: left
      width: 3.75rem
      height: 5.93rem
      background: black
      position: relative
      opacity: 0.3
      z-index: 19
      /*display none*/
    .menu-sort
      float: left
      width:1.5rem
      height:5.93rem
      background-color: white
      position: fixed
      z-index: 21
      .icon-guanbi
        float: right
        font-size :0.18rem
        margin: 0.04rem 0.06rem 0 0
      .menu
        float: left
        width:1.1rem
        height:5.93rem
        background: white
        border-right:1px solid gray
        .menu-title
          float: left
          width: 1.1rem
          font-size: 0.2rem
          text-align: center
          font-weight: bold
          color: white
          background-color: #3366FF
        .setting-float
          float: left
          margin: 0.08rem 0 0.2rem 0.03rem
          &:hover
            color:#3366FF
            font-weight:bold
          .iconfont-float
            float: left
          .public-fontsize
            float: left
            margin: 0.03rem 0 0 0.03rem
            font-size: 0.18rem
          .park
            width: 0.6rem
</style>
