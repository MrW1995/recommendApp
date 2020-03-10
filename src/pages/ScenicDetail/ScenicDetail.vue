<template>
  <div class="scenicDetail">

    <div class="header">
      <i class="iconfont icon-fanhui1" @click="$router.back()"></i>
      <span class="scenicTitle">详情</span>
    </div>

    <div class="contentbody">
      <scroll :data="singleScenic" ref="wrapper" class="wrapper" :pulldown="true">
        <div>
          <div class="scenicText">
            <div class="publishInfo">
              <img :src="singleScenic.user.personImg" class="publishImg">
              <span class="publishName">{{singleScenic.user.userName}}</span>
              <span class="publishDate">{{singleScenic.publishDateTime}}</span>
            </div>
            <div class="publishText">
              <span class="text">{{singleScenic.publishTitle}}</span>
            </div>

          </div>

          <div class="scenicImgAndVideo">
            <div class="scenicImg">
              <ul>
                <li v-for="(item,index) in singleScenic.publishImgArr" :key="index" v-if="!false">
                  <img :src="item" alt="" class="pictureSetting"  @click="showImg(item)">
                </li>
              </ul>
            </div>
          </div>

          <div class="tag">
            <div class="TagHeader"></div>
            <div class="aboutScenic">
              <span class="ticket">门票: {{singleScenic.admissionTicket}}</span>
              <div class="scenicSort">
                <span class="sortName">类别:</span>
                <table>
                  <tr v-for="(scenicSortArr,index) in scenicSortArrs" :key="index">
                    <td v-for="(scenic,index) in scenicSortArr" :key="index">
                      <mt-badge type="primary"> {{scenic}}</mt-badge>
                    </td>
                  </tr>
                </table>
              </div>
              <div class="aboutAddress">
                <span class="address">地址: </span>
                <span class="addressSetting">{{singleScenic.travelAddress}}</span>
              </div>
            </div>

          </div>
          <div class="comment">
            <div class="comentHeader">
              <span class="commentCount">{{singleScenic.allComment}} 评论</span>
              <span class="commentOfUser" @click="ShowComment(true)">评论</span>
            </div>
            <div class="commentContent">
              <ul>
                <li v-for="(item,index) in userCommetArticle" :key="index">
                  <div class="aboutComent">
                    <img :src="item.user.personImg" class="CommentPicture">
                    <span class="commentName">{{item.user.userName}}</span>
                    <span class="commentDate">{{dateFormat(new Date(item.commentDateTime))}}</span>
                  </div>
                  <div class="commentTextBox">
                      <span class="commentText" @click="showCommentDetail(true,index)">{{item.commentContent}}</span>
                      <span class="ReplyComment" @click="CommentUser(true,item.user.userId)">评论</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </scroll>
    </div>
    <div class="shade" v-if="isShade" @click="closeShade(false)"></div>
    <ShowImg :img="img" ref="showImg"></ShowImg>
    <Comment ref="comment" @closeShade ="close" :articleId="singleScenic.publishTravelId" v-on:changeState="changeState()"></Comment>
    <Reply ref="commentDetail"></Reply>
  </div>
</template>

<script>
  import scroll from '../../components/Sroll/Scroll'
  import Comment from '../../components/Comment/Comment'
  import Reply from '../../components/Reply/Reply'
  import ShowImg from '../../components/ShowImg/ShowImg'
  import {mapState} from 'vuex'
  export default {
    data(){
      return {
        url:'',
        flag:'',
        popupVisible:false,
        scenicSort:[],
        img:'',
        isShade:false,
      }
    },
    computed:{
      ...mapState(['singleScenic','userCommetArticle','codeFlag']),
      scenicSortArrs () {
        return this.util.splitArr(this.singleScenic.sorts,4)
      },
    },

    components:{
      scroll,
      Comment,
      Reply,
      ShowImg,
    },
    methods:{
      CommentUser(boolVal,userId){
        this.url = '/user/comment/add'
        this.$refs.comment.showUserComment(boolVal,userId,this.url,1)
        this.isShade = true
      },
      dateFormat(value){
        return this.util.dateFormat(value,1)
      },
      ShowComment(value){
        if (window.localStorage.getItem('token')!= ''){
          this.url = '/article/comment/add'
          this.$refs.comment.showComment(value,this.url)
          this.isShade = true
        }else{
          this.$store.commit('change_login',true)
        }
      },
      close(){
        this.isShade = false
      },
      showImg(value){
        this.img = value
        this.$refs.showImg.showImg(true)
        this.isShade = true
      },
      closeShade(value){
        this.$refs.comment.showComment(value)
        this.$refs.showImg.showImg(value)
        this.isShade = false
      },
      changeState(){
        this.isShade = false
      },
      showCommentDetail(value,index){
        this.$router.push('/userComment')
      }
    }
  }
</script>


<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  ul,li
    ulAndLi()
  .shade
    settingShade()
  .scenicDetail
    height 6.5rem
    .header
      width 3.75rem
      height 0.4rem
      display flex
      position fixed
      background-color #3366FF
      .icon-fanhui1
        float left
        font-size 0.26rem
        color #F8F8F8
        margin 0.08rem 0 0 0.15rem
      .scenicTitle
        margin 0.06rem 0 0 1.3rem
        font-size 0.23rem
        color #F8F8F8
        font-weight bold
    .contentbody
      width 3.75rem
      flex-flow column
      .wrapper
        position:absolute
        top:0.4rem
        bottom: 0.02rem
        overflow: hidden
        .scenicText
          width 3.75rem
          margin-top 0.4rem
          .publishInfo //这是关于发布信息作者的相关信息
            display flex
            font-size 0.13rem
            .publishImg
              width 0.35rem
              height 0.35rem
              margin 0.09rem 0 0 0.18rem
            .publishName
              margin 0.25rem 0 0 0.1rem
            .publishDate
              margin 0.25rem 0 0 1.35rem
          .publishText //这是关于发布信息的介绍
            display flex
            width 3.2rem
            margin 0.05rem 0 0.05rem 0.36rem
            .text
              font-size 0.13rem
        .scenicImgAndVideo //关于图片或是视频的展示
          width 3.75rem
          .scenicImg
            margin 0 0 0.03rem 0.375rem
            .pictureSetting
              width 3rem
              height 1.3rem
          .scenicVideo
            margin 0 0 0.03rem 0.275rem
            .video
              width 3.2rem
              height 1.5rem
        .tag
          width 3.75rem
          display flex
          flex-flow column
          .TagHeader
            width 3.75rem
            height 0.2rem
            background-color gainsboro
          .aboutScenic
            display flex
            flex-flow column
            margin 0.05rem 0 0.05rem 0.36rem
            font-size 0.16rem
            .scenicSort
              display flex
              .sortName
                margin auto 0 auto 0
            .aboutAddress
              display flex
              .addressSetting
                margin-left 0.05rem
                width 2.85rem
        .comment
          width 3.75rem
          font-size 0.13rem
          .comentHeader
            width 3.75rem
            height 0.2rem
            display flex
            background-color gainsboro
            .commentCount
              margin 0.02rem 0 0 0.1rem
            .commentOfUser
              margin 0.02rem 0 0 2.7rem
          .aboutComent
            display flex
            font-size 0.13rem
            margin 0 0 0 0
            .CommentPicture
              width 0.35rem
              height 0.35rem
              margin 0.09rem 0 0 0.18rem
            .commentName
              margin 0.25rem 0 0 0.1rem
            .commentDate
              margin 0.25rem 0 0 1.35rem
          .commentTextBox
            display flex
            flex-flow column
            width 3.2rem
            margin 0.05rem 0 0.05rem 0.36rem
            .ReplyComment
              color blue
              margin 0.03rem 0 0 2.8rem
</style>
