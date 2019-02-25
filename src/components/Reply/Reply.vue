<template>
  <div class="commentDetail" v-if="isShowCommentDetail">
    <div class="headerBar">
      <div class="header">
        <i class="iconfont icon-guanbi" @click="showCommentDetail(false)"></i>
        <span class="commentCount">{{commentCount}}条回复</span>
      </div>

      <div class="replyDetail">
        <img src="http://www.51pptmoban.com/d/file/2014/01/23/f03220aa5cc066bea0d4d2d355365f18.jpg" class="replyUser">
        <span class="publicFontSize">{{commentUser}}</span>
        <span class="publicFontSize comemntDate">19-01-04 01:05</span>
        <span class="commentContentt">
            大会上的罚款就很高的房价回归到房价会发生大会上的罚款就很高的房价回归到房价会发生大会上的罚款就很高的房价回归到房价会发生大会上的罚款就很高的房价回归到房价会发生大会上的罚款就很高的房价回归到房价会发生
          </span>
      </div>
    </div>
    <div class="gudin">
      <scroll class="wrapper" ref="listContent" :data="arr" :pulldown="pulldown">

        <div class="replyContent">
          <div v-for="item in arr">
            <div class="replyInfo">
              <div>
                <img src="http://www.51pptmoban.com/d/file/2014/01/23/f03220aa5cc066bea0d4d2d355365f18.jpg" class="replyUser">
                <span class="replyName">啥垂涎三尺</span>
              </div>
              <span class="commentContent">
                      大会上的罚款就很高归到房价会发生大会上的罚款就很高的房价回归到房价会发生大会上的罚款就很高的房价回归到房价会发生大会上的罚款就很高的房价回归到房价会发生大会上的罚款就很高的房价回归到房价会发生
              </span>
            </div>
          </div>
        </div>

      </scroll>
    </div>
  </div>
</template>

<script>
  import scroll from '../../components/Sroll/Scroll'
  export default {
    data(){
      return {
        commentCount:27,
        commentUser:'是可圈可点',
        pulldown:true,
        arr:['3','2','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','3','2','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1'],
        isShowCommentDetail:false
      }
    },
    components:{
      scroll,
    },
    methods:{
      showCommentDetail(value){
        this.isShowCommentDetail = value
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">

  @import "../../common/stylus/mixins.styl"
  ul,li
    ulAndLi()
  .commentDetail
    height 7.5rem
    position absolute
    display flex
    background-color gainsboro
    flex-flow column
    .headerBar
      position fixed
      width 3.75rem
      height 0.4rem
      background-color #3366FF
      display flex
      flex-flow column
      z-index 111
      .header
        margin-bottom 0.02rem
        .icon-guanbi
          float left
          font-size 0.26rem
          color #F8F8F8
          margin 0.08rem 0 0 0.15rem
        .commentCount
          float left
          color #F8F8F8
          margin 0.06rem 0 0 1.15rem
          font-size 0.23rem
          font-weight bold
      .replyDetail
        margin -0.05rem 0  0  0
        background-color white
        border-bottom 1px solid gainsboro
        .replyUser
          float left
          margin 0.09rem 0 0 0.18rem
          width 0.35rem
          height 0.35rem
        .publicFontSize
          margin 0.25rem 0 0 0.1rem
          float left
          font-size 0.13rem
        .comemntDate
          margin-left 1.35rem
        .commentContentt
          text-indent:0.3rem
          margin 0.05rem 0 0.05rem 0.36rem
          width 3.1rem
          float left
          font-size 0.13rem
  .gudin
    width 3.75rem
    font-size 0.16rem
    .wrapper
      position:absolute
      top:1.75rem
      bottom: 0
      overflow: hidden
      .replyInfo
        display flex
        flex-flow column
        width 3.75rem
        border 1px solid gainsboro
        .replyUser
          float left
          margin 0.09rem 0 0 0.18rem
          width 0.35rem
          height 0.35rem
        .replyName
          float left
          margin 0.25rem 0 0 0.1rem
        .commentContent
          text-indent:0.3rem
          margin 0.05rem 0 0.05rem 0.36rem
          width 3.1rem
          float left
          font-size 0.13rem
</style>
