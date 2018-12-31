<template>
      <div class="wrapper" ref="wrapper">
          <ul>
              <li class="li-wrapper" v-for="item in 8">

                <div class="top-box">
                  <div class="left-box" :class="{noImg:!true}">
                    <span class="li-title content-many">京东方是非得方是非得失大姐夫方是非得失大姐夫方是非得失大姐夫失大姐夫过多或过过过过过过过过过过过过过过过过过过过过过过</span>
                  </div>
                  <div class="right-img" v-if="false">
                    <img class="li-picture" src="http://img4.imgtn.bdimg.com/it/u=3415244797,3645437497&fm=26&gp=0.jpg">
                  </div>
                </div>

                <div class="midden-box-img">
                  <img class="img1" src="http://img4.imgtn.bdimg.com/it/u=3415244797,3645437497&fm=26&gp=0.jpg">
                  <img class="img2" src="http://img4.imgtn.bdimg.com/it/u=3415244797,3645437497&fm=26&gp=0.jpg">
                </div>
                <div class="midden-box-video" v-if="false">
                  <video poster="video/head.png" class="video" controls="controls" preload="preload">
                    <source src="./video.mp4" type='video/mp4; codecs="avc1.4D401E, mp4a.40.2"' >
                  </video>
                </div>

                <div class="bottom-box">
                  <span class="user-name">环球网球网...</span>
                  <span class="comment-title">27评论</span>
                  <span class="read-count">2.5K 浏览</span>
                  <span class="publish-date">2018-12-30 05:26</span>
                </div>
              </li>
          </ul>
      </div>
</template>

<script>
  import BScroll from 'better-scroll'
  export default {
    created(){

    },
    mounted() {
      this.$store.dispatch('receiveAb')
      this.$nextTick(() =>{
        if (!this.scroll) {
          this.scroll = new BScroll(this.$refs.wrapper, {
            click: true
          });
        } else {
          this.scroll.refresh();
        };
      })
    }

  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">

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
    width: 3.75rem
    position:absolute
    top: 0.83rem
    bottom: 0.57rem
    overflow: hidden
    z-index: 1
    background-color: darkgray
    .li-wrapper
      display:flex
      flex-flow: column
      position:relative
      width:3.75rem
      background-color white
      .top-box
        display:flex
        .left-box
          margin 0.3rem 0 0 0.13rem
          &.noImg
            margin 0.1rem 0 0.1rem 0.13rem
          .li-title
            width: 1.8rem
            position:relative
            margin: 0.08rem 0 0 0.20rem
            &.content-many
              width:3.2rem
              margin -0.2rem 0 0.1rem 0.13rem
              overflow:hidden
              text-overflow:ellipsis
              display:-webkit-box
              -webkit-box-orient:vertical
              -webkit-line-clamp:3
    .right-img
          margin 0.12rem 0.15rem 0 0
          width:1.5rem
          height 1.5rem
          .li-picture
            margin 0 0 0 0
            width: 1.4rem
            height: 1.4rem
      .midden-box-img
          display: flex
          width:3rem
          height:1.4rem
          margin: 0 auto 0.1rem auto
          .img1,.img2
            width:1.4rem
            height:1.4rem
          .img2
            margin-left 0.2rem
      .midden-box-video
        width:3rem
        height:1.4rem
        background-color darkgray
        margin: 0 auto 0.1rem auto
        .video
          width:100%
          height:100%
      .bottom-box
        display:flex
        font-size 0.13rem
        margin: 0 0 0.1rem 0.21rem

        .user-name
          width:0.55rem
          display: inline-block
          overflow:hidden
          white-space:nowrap
          text-overflow:ellipsis
        .comment-title
          margin-left:0.1rem
        .read-count
          margin-left 0.1rem
        .publish-date
          margin-left 0.1rem


</style>
