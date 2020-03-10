<template>
  <div class="aboutUserInformationRecord">
    <mt-navbar v-model="selected">
      <mt-tab-item id="1" @click.native="query('1')">发布数</mt-tab-item>
      <mt-tab-item id="2" @click.native="query('2')">评论数</mt-tab-item>
      <mt-tab-item id="3" @click.native="query('3')">收藏数</mt-tab-item>
    </mt-navbar>

    <mt-tab-container v-model="selected">
      <mt-tab-container-item id="1">
        <div class="loadingImg" v-if="publishCount == null">
          <div class="loading"></div>
        </div>
        <div class="publishCountSetting">
            <span class="alreadyStudyCount">已发表了关于 {{publishCount[0]}} 学习文章</span>
            <span class="alreadyTravelCount">已发表了关于 {{publishCount[1]}} 旅游文章</span>
        </div>
      </mt-tab-container-item>
      <mt-tab-container-item id="2">
        <div class="loadingImg" v-if="publishCount == null">
          <div class="loading"></div>
        </div>
        <div class="commentCountSetting">
          <span class="alreadyTravelCommentCount">已对旅游文章 {{commentCount[0]}} 进行了评论</span>
          <span class="alreadyStudyCommentCount">已对学习文章 {{commentCount[1]}} 进行了评论</span>
          <span class="alreadyTravelCommentUserCount">已对旅游文章用户评论 {{commentCount[2]}} 进行了评论</span>
          <span class="alreadyStudyCommentUserCount">已对学习文章用户评论 {{commentCount[3]}} 进行了评论</span>
        </div>
      </mt-tab-container-item>
      <mt-tab-container-item id="3">
        <div class="loadingImg" v-if="followCount == null">
          <div class="loading"></div>
        </div>
        <div class="followSetting">
          <span class="follow">还在努力实现中...</span>
        </div>
      </mt-tab-container-item>
    </mt-tab-container>

  </div>
</template>

<script>
  import Scroll from '../Sroll/Scroll'
  import {mapState} from 'vuex'
  export default {
    data(){
      return {
        selected:'1',
        flag:'1',
        arr:[]
      }
    },
    computed:{
      ...mapState(['commentCount','publishCount','followCount']),
      imgSortArrs(){
        return function(value){
          return this.util.splitArr(value,3)
        }
      }
    },
    components:{
      Scroll
    },
    mounted(){
      this.queryAboutUser()
    },
    methods:{
      sendDetail(index){
        const vague = this.vagueSearchArr[index]
        const num = 1
        this.$store.commit('copy_vague_value',{vague,num})
        this.$router.push('/sourceDetail')
      },
      query(value){
        this.flag = value
        this.queryAboutUser()
      },
      queryAboutUser(){
        const userInfo = window.localStorage.getItem('userInfo')
        let userId = "1"
        let flag = this.flag
        this.$store.dispatch('queryAboutUserInfo',{userId,flag})
      }
    },

  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  ul,li
    ulAndLi()
  .aboutUserInformationRecord
    width 3.75rem
    .publishSetting
      display flex
      flex-flow column
      width 3.2rem
      margin 0.05rem auto 0.2rem auto
      border-bottom 1px solid gainsboro
    .collectionSetting
      display flex
      width 3.2rem
      margin auto
      .collectionTitleSetting
        width 2rem
      .collectionDateSetting
        font-size 0.13rem
        margin-left 0.2rem

  .loadingImg
    position absolute
    left 0
    right 0
    top 0
    bottom 0
    font-size 0.2rem
    margin auto
    width 0.9rem
    height 0.9rem
    .loading
      width 1.5rem
      height 1.5rem
      background-image url("../../assets/imgs/loading_3.gif")
      background-repeat no-repeat
  .publishCountSetting
    display flex
    flex-flow column
    font-size 0.23rem
    margin 1.5rem auto 0.1rem auto
    .alreadyStudyCount
      margin 0 auto 0.1rem auto
    .alreadyTravelCount
      margin 0 auto 0.1rem auto
  .commentCountSetting
    display flex
    flex-flow column
    font-size 0.23rem
    margin 1.5rem auto 0 auto
    .alreadyTravelCommentCount
      margin 0 auto 0.1rem auto
    .alreadyStudyCommentCount
      margin 0 auto 0.1rem auto
    .alreadyTravelCommentUserCount
      font-size 0.21rem
      margin 0 auto 0.1rem auto
    .alreadyStudyCommentUserCount
      font-size 0.21rem
      margin 0 auto 0.1rem auto
  .followSetting
    display flex
    flex-flow column
    font-size 0.23rem
    margin 1.5rem auto 0 auto
    .follow
      font-size 0.21rem
      margin 0 auto 0.1rem auto
  .alreadyPublishList
    display flex
    font-size 0.16rem
    width 3.75rem
    background-color white
    margin 0.05rem 0 0.03rem 0
    .imgTable
      margin  0.08rem 0 0 0.1rem
      border-collapse separate
      border-spacing 0
      .tableTd
        padding-right 0.03rem
        .vagueImg
          width 0.15rem
          height 0.15rem
    .searchContent
      word-break: normal;
      width 2rem
      margin 0.03rem 0 0.05rem 0.05rem
      &.manyTitle
        margin 0 0 0.03rem 0.13rem
        overflow:hidden
        text-overflow:ellipsis
        display:-webkit-box
        -webkit-box-orient:vertical
        -webkit-line-clamp:4
    .dateAndName
      display flex
      flex-flow column
      .searchName
        font-size 0.12rem
        margin 0.02rem 0 0 0.43rem
      .searchDate
        font-size 0.12rem
        margin 0.49rem 0 0.03rem 0.1rem
</style>
