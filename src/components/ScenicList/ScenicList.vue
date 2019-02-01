<template>
      <div>

        <scroll class="wrapper" ref="listContent" :listenScroll="true" :pullup="true" :data="scenics" :pulldown="true">
          <ul>
            <div class="pullUp" v-if="pullUpLoading"></div>
              <li class="li-wrapper" v-for="(item,index) in scenics" :key="index">
                <div class="top-box">

                  <div class="left-box" :class="{noImg:item.img ===''}" @click="$router.push('/scenicDetail')">
                    <span class="li-title" :class="{contentMany:item.recomment.length>44}">{{item.recomment}}</span>
                  </div>

                  <div class="right-img" v-if="item.recomment.length<=44">
                    <img class="li-picture" :src="item.img">
                  </div>

                </div>

                <div class="midden-box-img" v-if="item.recomment.length>44 && item.img !=='' ">
                  <img class="img1" :src="item.img">
                  <img class="img2" :src="item.img">
                  <img class="img3" :src="item.img">
                </div>
                <div class="midden-box-video" v-if="item.video">
                  <video poster="video/head.png" class="video" controls="controls" preload="preload">
                    <source :src="item.video" type='video/mp4; codecs="avc1.4D401E, mp4a.40.2"' >
                  </video>
                </div>

                <div class="bottom-box" :class="{dateTime:item.date.length<=5}" >
                  <span class="user-name" :class="{usernamechild:item.publishUser.username.length<3}">{{item.publishUser.username}}</span>
                  <span class="comment-title">{{item.recommentContent.count}}评论</span>
                  <span class="read-count">2.5K 浏览</span>
                  <span class="publish-date">{{getDateTiem(item.date)}}</span>
                </div>
              </li>
            <div class="pullDown" v-if="pullDownLoading"></div>
          </ul>
        </scroll>
        <PublishScenic class="publishScenic"></PublishScenic>
      </div>
</template>

<script>
  import {mapState} from 'vuex'
  import scroll from '../../components/Sroll/Scroll'
  import PublishScenic from '../PublishScenic/PublishScenic'
  export default {

    computed:{
        ...mapState(['scenics','pullUpLoading','pullDownLoading']),

    },
    components:{
      scroll,
      PublishScenic
    },
    watch:{
      pullUpLoading(value){
        if(value)
          this.$store.dispatch('receiveAb')
      },
      pullDownLoading(value){
        if(value)
          this.$store.dispatch('receiveAb')
      }

    },
    mounted() {
      this.$store.dispatch('receiveAb')
      setTimeout(() =>{
        if(!this.scroll){

        }else {
          this.$refs.listContent.$emit('refresh')
        }
      },20)
    },
    methods:{
      getDateTiem(date){
        switch (date) {
          case '刚刚':
            return '刚刚'
          case '10分钟前':
            return '10分钟前'
          case '30分钟前':
            return '30分钟前'
          case '1小时前':
            return '1小时前'
          case '3小时前':
            return '3小时前'
          case '6小时前':
            return '6小时前'
          case '12小时前':
            return '12小时前'
          case '24小时前':
            return '24小时前'
          default:
            return date
        }
      },
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  ul,li
    ulAndLi()
  .pullUp
    settingLoadingPic()
    background-image: url("../../assets/imgs/loading_1.gif");
  .pullDown
    settingLoadingPic()
    background-image: url("../../assets/imgs/loading_2.gif");
  .wrapper
    width: 3.75rem
    position:absolute
    top: 0.83rem
    bottom: 0.57rem
    overflow: hidden
    z-index: 1
    background-color: white
    .li-wrapper
      display:flex
      flex-flow: column
      position:relative
      width:3.75rem
      background-color white
      border-bottom 1px solid gainsboro
      .top-box
        width 3.75rem
        display:flex
        .left-box
          margin 0.05rem 0 0 0.13rem
          &.noImg
            margin 0.05rem 0 0.01rem 0.13rem
          .li-title
            display:inline-block
            width: 2.5rem
            margin: 0.2rem 0 0 0.05rem
            &.contentMany
              width 3.3rem
              margin 0 0 0.03rem 0.13rem
              overflow:hidden
              text-overflow:ellipsis
              display:-webkit-box
              -webkit-box-orient:vertical
              -webkit-line-clamp:3
        .right-img
          margin 0.08rem 0.15rem 0.01rem 0
          .li-picture
            margin 0 0 0 0
            width: 0.9rem
            height: 0.9rem
      .midden-box-img
          display: flex
          width:3rem
          margin: 0.05rem auto 0.09rem auto
          .img1,.img2,.img3
            width:0.9rem
            height: 0.9 rem
          .img2
            margin-left 0.1rem
          .img3
            margin-left 0.1rem
      .midden-box-video
        width:3rem
        height:1.4rem
        background-color darkgray
        margin: 0 auto 0.05rem auto
        .video
          width:100%
          height:100%
      .bottom-box
        display:flex
        font-size 0.13rem
        margin: 0 0 0.05rem 0.7rem
        &.dateTime
          margin-left 1rem
        .user-name
          width:0.50rem
          display: inline-block
          overflow:hidden
          white-space:nowrap
          text-overflow:ellipsis
          &.usernamechild
            width 0.3rem
            margin-left 0.3rem
        .comment-title
          float left
          margin-left:0.1rem
        .read-count
          margin-left 0.1rem
        .publish-date
          margin-left 0.1rem


</style>
