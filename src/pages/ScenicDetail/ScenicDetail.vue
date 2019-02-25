<template>
  <div class="scenicDetail">

    <div class="header">
      <i class="iconfont icon-fanhui1" @click="$router.back()"></i>
      <span class="scenicTitle">详情</span>
    </div>

    <div class="contentbody">
      <scroll :data="arrs" ref="wrapper" class="wrapper" :pulldown="true">
        <div>
          <div class="scenicText">
            <div class="publishInfo">
              <img src="http://wx3.sinaimg.cn/large/006DbPTnly1ftobouq00sj30dw0dwjsu.jpg" class="publishImg">
              <span class="publishName">{{publishName}}</span>
              <span class="publishDate">{{publishDate}}</span>
            </div>
            <div class="publishText">
              <span class="text">{{text}}</span>
            </div>

          </div>

          <div class="scenicImgAndVideo">
            <div class="scenicImg">
              <ul>
                <li v-for="(item,index) in imgs" :key="index" v-if="!false">
                  <img :src="item" alt="" class="pictureSetting"  @click="showImg(item)">
                </li>
              </ul>
            </div>
            <div class="scenicVideo" v-if="false">
              <video poster="video/head.png" class="video" controls="controls" preload="preload">
                <source src="../../assets/video/video.mp4" type='video/mp4; codecs="avc1.4D401E, mp4a.40.2"' >
              </video>
            </div>
          </div>

          <div class="tag">
            <div class="TagHeader"></div>
            <div class="aboutScenic">
              <span class="ticket">门票: {{ticket}}</span>
              <div class="scenicSort">
                <table>
                  <tr v-for="(scenicSortArr,index) in scenicSortArrs" :key="index">
                    <td v-for="(scenic,index) in scenicSortArr" :key="index">
                      <mt-badge type="primary"> {{scenic}}公园</mt-badge>
                    </td>
                  </tr>
                </table>
              </div>
              <div class="aboutAddress">
                <span class="address">地址: </span>
                <span class="addressSetting">{{address}}</span>
              </div>
            </div>

          </div>
          <div class="comment">
            <div class="comentHeader">
              <span class="commentCount">{{commentCount}} 评论</span>
              <span class="commentOfUser" @click="ShowComment(true)">评论</span>
            </div>
            <div class="commentContent">
              <ul>
                <li v-for="i in 8">
                  <div class="aboutComent">
                    <img src="http://wx3.sinaimg.cn/large/006DbPTnly1ftobouq00sj30dw0dwjsu.jpg" class="CommentPicture">
                    <span class="commentName">{{commentName}}</span>
                    <span class="commentDate">{{commentDate}}</span>
                  </div>
                  <div class="commentTextBox">
                      <span class="commentText" @click="showCommentDetail(true)">{{commentText}}
                        <span class="ReplyComment">评论</span>
                      </span>
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
    <Comment ref="comment" v-on:changeState="changeState()"></Comment>
    <Reply ref="commentDetail"></Reply>
  </div>
</template>

<script>
  import scroll from '../../components/Sroll/Scroll'
  import Comment from '../../components/Comment/Comment'
  import Reply from '../../components/Reply/Reply'
  import ShowImg from '../../components/ShowImg/ShowImg'
  export default {
    data(){
      return {
        popupVisible:false,
        arrs:['1'],
        publishName:'好地方角度',
        publishDate:'19-01-05 09:48',
        text:'好的东省分行反倒是范德萨熊熊的的好的公司非广东省分行反倒是范德萨熊熊的的好的公司非广东省分行反倒是范德萨熊熊的的好的公司非广东省分行反倒是范德萨熊熊的的',
        imgs:['http://pic11.nipic.com/20101126/3367900_112731025783_2.jpg',
          'http://5b0988e595225.cdn.sohucs.com/images/20181218/b93d89bf97ef4315b6a4d90c9ce72c3d.jpeg',
          'http://pic25.nipic.com/20121205/391129_153756705000_2.jpg',
          'http://pic25.nipic.com/20121205/391129_153756705000_2.jpg',
          ],
        video:"../../assets/video/video.mp4",
        ticket:'免费',
        scenicSort:['1','2','3','4','5','6','7','8'],
        address:"福建省福州市闽侯县上街镇文贤路1号闽江学院",
        commentCount:27,
        commentName:'会受到广泛',
        commentDate:'19-01-05 03:58',
        commentText:'的个所所gdfdsasff所所所所所所所所所所所所所所所所所所所所所所所所所所所所所所所所所所所所所所所所',
        img:'',
        isShade:false,
      }
    },
    computed:{
      scenicSortArrs () {
        const {scenicSort} = this
        return this.util.splitArr(scenicSort,4)
      }
    },
    watch:{

    },
    components:{
      scroll,
      Comment,
      Reply,
      ShowImg,
    },
    mounted(){

    },
    methods:{
      ShowComment(value){
        this.$refs.comment.showComment(value)
        this.isShade = true
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
      showCommentDetail(value){
        this.$refs.commentDetail.showCommentDetail(value)
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
              margin 0 0 0 0.1rem
</style>
