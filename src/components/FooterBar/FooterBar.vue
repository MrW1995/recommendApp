<template>
  <div class="footer" v-if="$route.meta.isShowFooter">
    <div class="move">
      <div class="home" :class="{on:'/scenic'===$route.path}" @click="goTo('/scenic')">
        <i class="iconfont icon-shouye" ></i>
        <div>首页</div>
      </div>
      <div class="share" :class="{on:'/studySource'===$route.path}" @click="goTo('/studySource')">
        <i class="iconfont icon-ziyuangw public" ></i>
        <div>资源共享</div>
      </div>
      <div class="laugh" :class="{on:'/laugh'===$route.path}" @click="goTo('/laugh')">
        <i class="iconfont icon-bqxiao public" ></i>
        <div>每日一笑</div>
      </div>
      <div class="personal" :class="{on:'/personal'===$route.path}" @click="goTo('/personal')">
        <i class="iconfont icon-geren6" ></i>
        <div>我的</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    methods:{
      goTo(path){
        this.$router.replace(path)
      }
    }
  }
</script>

<style  lang="stylus" rel="stylesheet/stylus" >
  /*@import "../../common/stylus/mixins.styl"*/
  .iconfont
    font-weight: bold;
    font-size:0.25rem;
  .footer
    //iconfont()
    width:3.75rem
    height: 0.57rem
    background-color:white
    border-top:1px solid gray
    position: fixed
    bottom: 0
    display: flex
    font-size:0.15rem
    color:gray
    .move
      float: left
      margin-top:0.05rem
      .home
        float: left
        margin-left: 0.3rem
        .icon-shouye
          margin-left: 0.03rem
        &.on
          color:#3366FF

      .share
        float: left
        margin-left: 0.48rem
        .public
          margin-left:0.18rem
        &.on
          color:#3366FF

      .laugh
        float: left
        margin-left: 0.36rem
        .public
          margin-left:0.18rem
        &.on
          color:#3366FF
      .personal
        float: left
        margin-left: 0.48rem
        .icon-geren6
          margin-left: 0.02rem
        &.on
          color:#3366FF

</style>
