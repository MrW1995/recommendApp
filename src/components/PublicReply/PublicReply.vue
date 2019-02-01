<template>
    <div class="publicReply">
      <div class="publicReplyHeader">
        <i class="iconfont icon-guanbi"></i>
        <span class="replyTitle">详细评论</span>
      </div>

      <div class="otherUserComment">
        <Scroll class="wrapper" ref="wrapper" :data="arr">
          <div>
          <div class="replyContent">
            <div class="replySetting">
              <img src="http://img.daimg.com/uploads/allimg/120319/1-12031921534Y24.jpg" alt="" class="replyImg">
              <div class="replyUserNameAndDate">
                <span class="replyDate">2019-01-10</span>
                <span class="replyUserName">好的福建省</span>
              </div>
            </div>
            <div class="commentDetail">
              <span class="commentContent">{{commentContent}}</span>
            </div>
          </div>

          <ul>
            <li v-for="(item,index) in arr" :key="index">
              <div class="replyInfo">

                <div class="aboutReply">
                  <img src="http://img.daimg.com/uploads/allimg/120319/1-12031921534Y24.jpg" alt="" class="replyInfoImg">
                  <span class="replyUserName">叫对方回复</span>
                  <span class="replyUserDate">2019-01-10</span>
                </div>
                <div class="replyBody">
                  <span class="replyUserContent">{{replyUserContent}}</span>
                  <span class="reply">回复</span>
                </div>
              </div>
            </li>
          </ul>
          </div>
        </Scroll>
      </div>
    </div>
</template>

<script>
  import Scroll from '../../components/Sroll/Scroll'
  export default {
    data(){
      return{
        commentContent:"好的工的福建地方是工的福建省地方或是工的福建省地方或是的工的福建省地方或是的工的福建省地方或是的工会发的是的福建省地方的工会发的是的福建省地方的工会发的是的福建省地方更好的双方各发山东省的方式更好多个",
        replyUserContent:"好的工会发的是的福建省地方或是的工的福建省地方或是工的福建省地方或是工的福建省地方或是的工的福建省地方或是的工的福建省地方或是的工会发的是的福建省地方的工会发的是的福建省地方的工会发的是的福建省地方更好的双方各发山东省的方式更好多个",
        arr:['1','2','3','4']
      }
    },
    mounted(){
      setTimeout(() =>{
        this.$refs.wrapper.refresh()
      },20)

    },
    components:{
      Scroll
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import "../../common/stylus/mixins.styl"

ul,li
  ulAndLi()

.publicReply
  display flex
  height 6.67rem

  flex-flow column
  .publicReplyHeader
    width 3.75rem
    height 0.4rem
    background-color #3366FF
    font-size 0.23rem
    display flex
    color #F8F8F8
    .icon-guanbi
      margin auto 0 auto 0.1rem
    .replyTitle
      margin  auto 0 auto 1.1rem
      font-weight bold
  .otherUserComment
    width 3.75rem
    border-bottom 1px solid gainsboro
    .wrapper
      height 6.37rem
      overflow hidden
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
            flex-flow column
            margin 0.1rem 0 0 0.05rem
            .replyDate
              font-size 0.05rem
              margin-bottom 0.01rem
            .replyUserName
              margin 0 0 0 0
        .commentDetail
          display flex
          font-size 0.15rem
          margin 0.05rem 0 0 0.3rem
          .commentContent
            width 3.2rem
            margin-bottom 0.05rem
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
            margin 0.05rem 0 0 0.05rem
          .replyUserName
            margin 0.2rem 0 0 0.05rem
            font-size 0.13rem
          .replyUserDate
            margin 0.2rem 0 0 1.85rem
            font-size 0.13rem
        .replyBody
          display flex
          flex-flow column
          .replyUserContent
            margin auto
            width 3.2rem
          .reply
            margin 0 0 0.05rem 3.1rem
</style>
