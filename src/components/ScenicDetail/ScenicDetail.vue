<template>
  <mt-popup class="scenicDetail"  v-model="isShowScenicDetail" position="bottom">
    <div class="header">
      <i class="iconfont icon-fanhui1" @click="closeWindow"></i>
      <span class="scenicTitle">详情</span>
    </div>

    <div class="contentbody">
      <scroll :data="arrs" ref="wrapper" class="wrapper" >
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
                  <img :src="item" alt="" class="pictureSetting">
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
              <span class="commentOfUser" @click="isShowComment(true)">评论</span>
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
                      <span class="commentText" @click="openReply">{{commentText}}--{{i}}
                        <span class="ReplyComment">回复</span>
                      </span>
                  </div>
                </li>
              </ul>
            </div>
          </div>

        </div>
      </scroll>
    </div>

    <Comment></Comment>
    <Reply></Reply>
  </mt-popup>
</template>

<script>
  import scroll from '../../components/Sroll/Scroll'
  import Comment from '../../components/Comment/Comment'
  import Reply from '../../components/Reply/Reply'
  import {mapState} from 'vuex'
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
        commentText:'的个所所gdfdsff所所所所所所所所所所所所所所所所所所所所所所所所所所所所所所所所所所所所所所所所所所所所所所'
      }
    },
    computed:{
      isShowScenicDetail:{
        get () {
          return this.$store.state.isShowScenicDetail
        },
        set (value) {
          this.$store.commit('change_display', value)
        }
      },

      scenicSortArrs () {
        const {scenicSort} = this
        //准备一个大的数组
        const arr = []
        //准备一个小的数组
        let minArr = []

        scenicSort.forEach(s =>{

          //当minArr的长度为4时 就创建新的数组
          if(minArr.length === 4){
            minArr = []
          }
          //当minArr为空时 说明该数组是刚创建的  与大的数组进行关联
          if(minArr.length === 0){
            arr.push(minArr)
          }
          //每遍历一个就往里面装一个
          minArr.push(s)
        })
        return arr
      }
    },
    watch:{
      imgs(){
        this.$refs.wrapper.refresh()
      }
    },
    components:{
      scroll,
      Comment,
      Reply,
    },
    mounted(){
      setTimeout(() =>{
        this.scroll.refresh()
      },20)
    },
    methods:{
      closeWindow(){
        this.$store.commit('change_display',false)
      },
      isShowComment(value){

        this.$store.commit('comment_content',true)
      },
      openReply(){
        this.$store.commit('change_reply',true)
      }
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
    font-size:0.15rem

  .scenicDetail
    height 6.67rem
    /*display flex*/
    /*flex-flow column*/
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
