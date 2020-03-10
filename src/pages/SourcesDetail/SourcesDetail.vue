<template>
  <div class="isShowSourcesDetail" >
    <div class="SourceHeader">
      <i class="iconfont icon-fanhui1" @click="$router.back()"></i>
      <span class="sourceDetailTitle">资料详情</span>
    </div>

    <Scroll ref="wrapper":data="studyDetail" class="PublishInfo">
      <div class="WrapperSetting">
        <div class="PublishMove">
          <img :src="studyDetail.user.personImg" alt="" class="PersonalImg">
          <span class="PublishName">{{studyDetail.user.userName}}</span>
          <span class="PublishDate">{{dateFormat(new Date(studyDetail.studyDateTime))}}</span>
        </div>

        <div class="PublishContent">
          <span class="PublishText">{{studyDetail.studyContent}}</span>
        </div>

        <div class="PublishImg">
          <ul>
            <li v-for="(item,index) in studyDetail.studyImg" :key="index" >
              <img :src="item" alt="" class="SourcesImg" @click="showImg(item)">
            </li>
          </ul>
        </div>
        <div class="studySourceTag">
            <div class="studySourceTagTitle">
            </div>
            <div class="studySourceTagBody">
              <div class="sort">
                <span class="studySort">类别:</span>
                <span class="studySort1">{{studyDetail.studySorts}}</span>
              </div>
              <div class="urls">
                <div class="url">
                  <span class="pullUrl">url:</span>
                  <span class="pullUrl1">
                    <input type="text" class="inputUrl" :value="studyDetail.studyUrls">
                  </span>
                </div>
                <div class="pwd">
                  <span class="pullPwd">提取密码:</span>
                  <span class="pullPwd1">{{studyDetail.studyUrlsPwd}}</span>
                </div>
              </div>
            </div>
        </div>
        <div class="otherPeopleComment">
          <div class="otherPeopleCommentHeader">
            <span class="commentCount">{{studyDetail.studyCount}} 评论</span>
            <span class="comment" @click="ShowComment(true)">评论</span>
          </div>
          <CommentList @CommentUser = "CommentUser":userCommentStudy="studyDetail.userCommentArticles" ></CommentList>
        </div>
      </div>
    </Scroll>
    <div class="shade" v-if="isShade" @click="closeShade(false)"></div>
    <ShowImg :img="img" ref="isShowImg" class="showImg"></ShowImg>
    <Comment ref="comment" @closeShade ="close" :articleId="studyDetail.studySourceId"  v-on:changeState="changeState()"></Comment>
  </div>
</template>

<script>
  import PublishInfo from '../../components/PublishInfo/PublishInfo'
  import Scroll from '../../components/Sroll/Scroll'
  import CommentList from '../../components/CommentList/CommentList'
  import Comment from '../../components/Comment/Comment'
  import ShowImg from '../../components/ShowImg/ShowImg'
  import {mapState} from 'vuex'
  export default {
    data(){
      return{
        url:'',
        isShade:false,
        img:'',
        userId:0
      }
    },
    computed:{
      ...mapState(['studyDetail','userId'])
    },

    components:{
      PublishInfo,
      Scroll,
      CommentList,
      Comment,
      ShowImg
    },
    methods:{
      close(){
        this.isShade = false
      },
      CommentUser(userId){
        console.log(userId)
        this.url = '/user/comment/study/add'
        this.$refs.comment.showUserComment(true,userId,this.url,1)
        this.isShade = true
      },
      dateFormat(value){
        return this.util.dateFormat(value,1)
      },
      changeState(){
        this.isShade = false
      },
      showImg(img){
        this.img = img
        this.isShade = true
        this.$refs.isShowImg.showImg(true)
        console.log(img)
      },
      closeShade(value){
        this.$refs.comment.showComment(value)
        this.$refs.isShowImg.showImg(value)
        this.isShade = false
      },
      ShowComment(value){
        this.url = '/study/comment/add'
        this.$refs.comment.showComment(value,this.url)
        this.isShade = true
      },

    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  ul,li
    ulAndLi()
  .shade
    settingShade()
  .isShowSourcesDetail
    height 6.67
    background-color white
    .SourceHeader
      width 3.75rem
      height 0.4rem
      display flex
      color #F8F8F8
      font-size 0.23rem
      background-color #3366FF
      .icon-fanhui1
        font-size 0.26rem
        margin 0.08rem 0 0 0.1rem
      .sourceDetailTitle
        font-weight bold
        margin 0.06rem 0 0 1.1rem
    .PublishInfo
      display flex
      flex-flow column
      width 3.75rem
      height 6.37rem
      font-size 0.13rem
      overflow hidden
      .PublishMove
        display flex
        margin-bottom 0.05rem
        .PersonalImg
          width 0.35rem
          height 0.35rem
          margin 0.08rem 0 0 0.1rem
        .PublishName
          margin 0.23rem 0 0 0.05rem
        .PublishDate
          margin 0.23rem 0 0 1.6rem
      .PublishContent
        display flex
        flex-flow column
        .PublishText
          margin 0 auto 0.05rem auto
          width 3.2rem
      .PublishImg
        margin-left 0.375rem
        display flex
        flex-flow column
        .SourcesImg
          width 3rem
          height 1.3rem
      .studySourceTag
        display flex
        flex-flow column
        .studySourceTagTitle
          width 3.75rem
          height 0.3rem
          background-color gainsboro
        .studySourceTagBody
          width 3.75rem
          font-size 0.16rem
          margin 0.05rem 0 0.05rem 0
          .sort
            display flex
            margin 0 0 0 0.1rem
            .studySort
              margin 0
            .studySort1
              margin 0 0 0 0.1rem
          .url
            display flex
            margin 0 0 0 0.1rem
            .pullUrl
              margin 0
            .pullUrl1
              font-size 0.13rem
              margin 0.03rem 0 0 0.1rem
              .inputUrl
                border 0
                outline 0
                width 3.25rem

          .pwd
            display flex
            margin 0 0 0 0.1rem
            .pullPwd
              margin 0
            .pullPwd1
              margin 0 0 0 0.1rem

      .otherPeopleComment
        display flex
        flex-flow column
        .otherPeopleCommentHeader
          width 3.75rem
          height 0.3rem
          display flex
          font-size 0.18rem
          background-color gainsboro
          .commentCount
            margin auto 0 auto 0.05rem
          .comment
            margin auto 0 auto 2.65rem
  .showImg
    position absolute
    top 0

</style>
