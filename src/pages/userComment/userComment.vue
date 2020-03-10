<template>
  <div class="commentDetail">
      <div class="headerBar">
        <div class="header">
          <i class="iconfont icon-guanbi" @click="$router.back()"></i>
          <span class="commentCount">{{userCommetArticle[index].allCommentNumber}}条回复</span>
        </div>
    </div>

    <scroll class="wrapper" ref="wrapper" :data="userCommentUser" :pulldown="true">
      <div class="contentBody">
        <div class="replyDetail">
          <img :src="userCommetArticle[index].user.personImg" class="replyUser">
          <span class="publicFontSize">{{userCommetArticle[index].user.userName}}</span>
          <span class="publicFontSize comemntDate">{{userCommetArticle[index].commentDateTime}}</span>
          <span class="commentContentt">
              {{userCommetArticle[index].commentContent}}
          </span>
        </div>
        <div class="allComment">全部评论</div>
        <ul>
          <li v-for="(item ,index) in userCommentUser" >
            <div class="replyInfo">
              <div>
                <img :src="item.user.personImg" class="replyUser">
                <span class="replyName">{{item.user.userName}}</span>
                <!--<span class="comment" :class="{changeColor:reply===index}" @click="userComment(index)">评论</span>-->
              </div>
              <span class="commentContent">
                 {{item.commentContent}}
             </span>
            </div>
          </li>
        </ul>
      </div>
    </scroll>
  </div>
</template>

<script>
  import scroll from '../../components/Sroll/Scroll'
  import {mapState} from 'vuex'
  export default {
    data(){
      return {
        reply:'',
        index:0,
        isShowCommentDetail:false,

      }
    },
    mounted(){
      setTimeout(() =>{
        if(!this.scroll){

        }else {
          this.$refs.wrapper.$emit('refresh')
        }
      },20)
    },
    watch:{
      userCommentUser(value){
        console.log(value)
      }
    },
    computed:{
      ...mapState(['userCommetArticle','userCommentUser'])
    },
    components:{
      scroll,
    },
    methods:{
      showCommentDetail(value,index){
        console.log(index)
        this.isShowCommentDetail = value
      },
      userComment(value){
        this.reply = value
        setTimeout(()=>{
          this.reply = ''
        },1000)
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  ul,li
    ulAndLi()
  .commentDetail
    height 6.67rem
    display flex
    flex-flow column
    .headerBar
      width 3.75rem
      height 0.4rem
      position fixed
      background-color #3366FF
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
    .wrapper
      position relative
      top 0.4rem
      font-size 0.16rem
      overflow: hidden
      .contentBody
        display flex
        flex-flow column
        .allComment
          margin 0.09rem 0 0.03rem 0.18rem
        .replyDetail
          margin 0 0  0  0
          background-color white
          border-bottom 1px solid grey
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
            margin 0.05rem 0 0.1rem 0.36rem
            width 3.1rem
            float left
            font-size 0.13rem
        .replyInfo
          display flex
          flex-flow column
          width 3.75rem
          .replyUser
            float left
            margin 0.09rem 0 0 0.18rem
            width 0.35rem
            height 0.35rem
          .replyName
            float left
            font-size 0.14rem
            margin 0.1rem 0 0 0.1rem
          .comment
            float left
            font-size 0.14rem
            margin 0.1rem 0 0 1.85rem
            &.changeColor
              color blue
          .commentContent
            /*text-indent:0.3rem*/
            margin -0.1rem 0 0.05rem 0.65rem
            width 2.9rem
            float left
            font-size 0.14rem
</style>
