<template>
  <div class="commentDetail" v-if="isShowCommentDetail">
    <div class="headerBar">
      <div class="header">
        <i class="iconfont icon-guanbi" @click="showCommentDetail(false)"></i>
        <span class="commentCount">条回复</span>
      </div>
      <div class="replyDetail">
        <img src="http://www.51pptmoban.com/d/file/2014/01/23/f03220aa5cc066bea0d4d2d355365f18.jpg" class="replyUser">
        <span class="publicFontSize">{{userCommetArticle[index].user.userName}}</span>
        <span class="publicFontSize comemntDate">{{userCommetArticle[index].commentDateTime}}</span>
        <span class="commentContentt">
            {{userCommetArticle[index].commentContent+"啛啛喳喳错错错错错错错错错错错错错错错错错错错错错错错错错错错错错错错错错错错错错错错错错错错错错错错错错错错错错错错"}}
        </span>
      </div>
    </div>

    <div class="gudin">

    </div>
  </div>
</template>

<script>
  import scroll from '../../components/Sroll/Scroll'
  import {mapState} from 'vuex'
  export default {
    data(){
      return {
        index:0,
        commentCount:27,
        commentUser:'是可圈可点',
        pulldown:true,
        arr:['3','2','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','3','2','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1'],
        isShowCommentDetail:false
      }
    },
    computed:{
      ...mapState(['userCommetArticle'])
    },
    components:{
      scroll,
    },
    methods:{
      showCommentDetail(value,index){
        console.log(index)
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
    height 6.67rem
    position absolute
    display flex
    flex-flow column
    background-color red
    .headerBar
      position fixed
      width 3.75rem
      height 0.4rem
      background-color #3366FF
      display flex
      flex-flow column
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
        margin 0 0  0  0
        background-color white
        border-bottom 1px solid red
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
      background-color black
      font-size 0.16rem

      /*.wrapper*/
        /*position:absolute*/
        /*top:1.75rem*/
        /*bottom: 0*/
        /*overflow: hidden*/
        /*.replyInfo*/
          /*display flex*/
          /*flex-flow column*/
          /*width 3.75rem*/
          /*border 1px solid gainsboro*/
          /*.replyUser*/
            /*float left*/
            /*margin 0.09rem 0 0 0.18rem*/
            /*width 0.35rem*/
            /*height 0.35rem*/
          /*.replyName*/
            /*float left*/
            /*margin 0.25rem 0 0 0.1rem*/
          /*.commentContent*/
            /*text-indent:0.3rem*/
            /*margin 0.05rem 0 0.05rem 0.36rem*/
            /*width 3.1rem*/
            /*float left*/
            /*font-size 0.13rem*/
</style>
