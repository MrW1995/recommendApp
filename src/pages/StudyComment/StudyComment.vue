<template>
  <div class="sourcesUserReply">
    <div class="publicReplyHeader">
      <i class="iconfont icon-guanbi" @click="$router.back()"></i>
      <span class="replyTitle">详细评论</span>
    </div>
    <Scroll class="wrapper" ref="wrapper" :data="userCommentUser">
      <div>
        <div class="replyContent">
          <div class="replySetting">
            <img :src="userCommentStudy[0].user.personImg" alt="" class="replyImg">
            <div class="replyUserNameAndDate">
              <span class="replyUserName">{{userCommentStudy[0].user.userName}}</span>
              <span class="replyDate">{{dateFormat(new Date(userCommentStudy[0].commentDateTime))}}</span>
            </div>
          </div>
          <div class="commentDetail">
            <span class="commentContent">{{userCommentStudy[0].commentContent}}</span>
          </div>
        </div>
        <div class="allComment">全部评价</div>
        <ul>
          <li v-for="(item,index) in userCommentUser" :key="index">
            <div class="replyInfo">
              <div class="aboutReply">
                <img :src="item.user.personImg" alt="" class="replyInfoImg">
                <span class="replyUserName">{{item.user.userName}}</span>
                <span class="replyUserDate">{{dateFormat(new Date(item.commentDateTime))}}</span>
              </div>
              <div class="replyBody">
                <span class="replyUserContent">{{item.commentContent}}</span>
                <!--<span class="reply">回复</span>-->
              </div>
            </div>
          </li>
        </ul>
      </div>
    </Scroll>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  export default {
    computed:{
      ...mapState(['userCommentStudy','userCommentUser'])
    },
    methods:{
      dateFormat(value){
        return this.util.dateFormat(value,1)
      },
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  ul,li
    ulAndLi()
  .sourcesUserReply
    height 6.67rem
    background-color white
    .publicReplyHeader
      width 3.75rem
      height 0.4rem
      position fixed
      background-color #3366FF
      font-size 0.23rem
      display flex
      z-index 111
      color #F8F8F8
      .icon-guanbi
        margin auto 0 auto 0.1rem
      .replyTitle
        margin  auto 0 auto 1.1rem
        font-weight bold
    .wrapper
      overflow hidden
      position absolute
      top 0.4rem
      .replyContent
        width 3.75rem
        display flex
        flex-flow column
        border-bottom 1px solid gainsboro
        .replySetting
          display flex
          .replyImg
            width 0.35rem
            height 0.35rem
            margin  0.1rem 0 0 0.1rem
          .replyUserNameAndDate
            font-size 0.13rem
            display flex
            margin 0.1rem 0 0 0.05rem
            .replyUserName
              margin 0.2rem 0 0 0.05rem
            .replyDate
              font-size 0.05rem
              margin 0.2rem 0 0 1.6rem
        .commentDetail
          display flex
          font-size 0.15rem
          margin 0.05rem 0 0 0.3rem
          .commentContent
            width 3.2rem
            font-size 0.16rem
            margin-bottom 0.05rem
      .allComment
        margin  0.05rem 0 0.05rem 0.1rem
        font-size 0.18rem
      .replyInfo
        display flex
        flex-flow column
        .replyInfoHeader
          width 3.75rem
          height 0.2rem
          background-color gainsboro
        .aboutReply
          display flex
          margin-bottom 0.05rem
          .replyInfoImg
            width 0.35rem
            height 0.35rem
            margin 0.05rem 0 0 0.1rem
          .replyUserName
            margin 0.2rem 0 0 0.05rem
            font-size 0.13rem
          .replyUserDate
            margin 0.2rem 0 0 1.6rem
            font-size 0.13rem
        .replyBody
          display flex
          flex-flow column
          .replyUserContent
            font-size 0.16rem
            margin auto
            width 3.2rem
          .reply
            font-size 0.16rem
            margin 0 0 0.05rem 3.1rem
</style>

