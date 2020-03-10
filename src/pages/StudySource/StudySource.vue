<template>
  <div class="SourcesList">
    <HearderTop>
      <div class="SourcesHeader" slot="headerbar">
        <span class="SourcesTitle">资源共享</span>
        <i class="iconfont icon-fabiaowenzhang" @click="openPublish(true)"></i>
        <i class="iconfont icon-paixu" @click="sortStudy(checkNum)"></i>

      </div>
      <div class="SearchAndSort" slot="headerSeaAndSort">
        <div class="Sourcessort">
          <SortMenu :arr="sortList"  :SortVal="studySort" v-on:sendVal="sendVal"></SortMenu>
        </div>
        <div class="SourcesSearch">
          <i class="iconfont icon-sousuo" @click="$router.push('/searchSources')"></i>
        </div>
      </div>
    </HearderTop>
    <div class="StudySortPlat" :class="{showDisplay:chooseDisplay}">
        <ul>
          <li @click="choose('new')" :class="{change:sorts == 'new'}">综合</li>
          <li @click="choose('最新')" :class="{change:sorts == '最新'}">最新</li>
          <li @click="choose('最热')" :class="{change:sorts == '最热'}">最热</li>
        </ul>
    </div>
    <div class="SourcesBody" >
      <Scroll :data="studyArr" class="wrapper" ref="wrapper" :loading=1 :pulldown="true">
        <ul>
          <li v-for="(item,index) in studyArr" :key="index">
            <div class="individualSourceInfo">
              <span class="individualSourceInfoContext" @click="showDetail(index)">{{item.studyContent}}
                <table class="foreachImg">
                  <tr v-for="(SourceImg,index) in SourcesImg(item.studyImg)" :key="index">
                    <td v-for="(img,index) in SourceImg" :key="index">
                      <img class="SourceImg" :src="img" >
                    </td>
                  </tr>
                </table>
              </span>
              <div class="publisInfo">
                <div class="publishUserName">
                  <span class="user-name" >{{item.user.userName}}</span>
                  <span class="comment-title">{{item.studyCount}}评论</span>
                  <span class="publish-date">{{dateFormat(new Date(item.studyDateTime))}}</span>
                </div>
              </div>
            </div>
          </li>
          <div class="loadingState" v-if="studyPullDown"></div>
          <div class="fontAlert" v-if="showState">
            <span class="fontSetting" v-if="studyCount>0">以为你加载{{studyCount}}条数据</span>
            <span class="fontSetting" v-else>到底啦</span>
          </div>
        </ul>
      </Scroll>
    </div>

    <Login></Login>
  </div>
</template>

<script>
  import Scroll from '../../components/Sroll/Scroll'
  import HearderTop from '../../components/HearderTop/HeaderTop'
  import SortMenu from '../../components/SortMenu/SortMenu'
  import Login from '../../components/Login/Login'
  import {mapState} from 'vuex'
  import { MessageBox } from 'mint-ui'
  export default {
    data(){
      return {
        sorts:'new',
        checkNum:0,
        studySort:'所有',
        loading:'',
        chooseDisplay:true,
        url:'query/sort1',
        arrs:["所有", "语文", "数学","英语","历史","地理","生物","物理","化学"],
        url1:'/get/study/sort'
      }
    },
    computed:{
      ...mapState(['studyArr','studyPullDown','executeMethod','pageNum','showState','studyCount','codeFlag','sortList']),
      SourcesImg(){
        return function(value){
          return this.util.splitArr(value,3)
        }
      },
    },
    watch:{
      executeMethod(){
        if(this.studyPullDown){
          this.queryStudySources()
        }
      },
      codeFlag(value){
        if(value){
          MessageBox('提示', '操作成功');
        }
      },
      showState(){
        setTimeout(()=>{
          this.$store.commit('show_state',false)
        },2000)
      },
      studyArr(){
        this.$store.commit('study_pulldown',false)
        this.$store.commit('execute_method',false)
        this.$store.commit('show_state',true)
        setTimeout(()=>{
          this.$store.commit('show_state',false)
        },2000)
      }
    },
    mounted(){
      let url = this.url1
      let num = 1
      this.$store.dispatch("getSort",{url,num})
      this.$store.commit('pagenumm',1)
      this.queryStudySources()
    },
    components:{
      Scroll,
      HearderTop,
      SortMenu,
      Login,
    },
    methods:{
      dateFormat(value){
        return this.util.dateFormat(value,1)
       },
      showDetail(index){
        this.$store.commit('study_detail',index)
        this.$router.push('/sourceDetail')
      },
      openPublish(value){
        console.log(value)
        if(window.localStorage.getItem("token"))
          this.$router.push("/publishSource")
        else
          this.$store.commit('change_login',true)

      },
      sendVal(value){
        this.studySort = value
        this.$store.commit('pagenumm',1)
        this.queryStudySources()
      },
      sortStudy(value){
        if(value === 1){
          this.checkNum = 0
          this.chooseDisplay = true
        }else{
          this.checkNum = 1
          this.chooseDisplay = false
        }
      },
      queryStudySources(){
        let dateTime = ''
        console.log({"studySort":this.studySort,"sorts":this.sorts,"loading":this.loading,"dateTime":dateTime,"pageNum":this.pageNum})
        this.$store.dispatch('queryStudySource',{"studySort":this.studySort,"sorts":this.sorts,"loading":this.loading,"dateTime":dateTime,"pageNum":this.pageNum})
      },
      choose(value){
        this.$store.commit('pagenumm',1)
        this.chooseDisplay = true
        this.sorts = value
        this.queryStudySources()
      }

    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  ul,li
    ulAndLi()

  .SourcesList
    height 6.67rem
    display flex
    .StudySortPlat
      width 0.6rem
      height 1rem
      position absolute
      z-index 1
      display flex
      margin 0.394rem 0 0 3.1rem
      background-color #3366FF
      &.showDisplay
        display none
      li
        font-size 0.2rem
        line-height 0.3rem
        color white
        margin 0 0 0 0.08rem
        &.change
          color red
          font-weight bold
    .SourcesHeader
      width 3.75rem
      height 0.4rem
      background-color #3366FF
      display flex
      .SourcesTitle
        font-size 0.26rem
        color #F8F8F8
        margin  auto 0 auto 1.2rem
      .icon-fabiaowenzhang
        font-size 0.33rem
        display flex
        margin 0.05rem 0 0 0.8rem
      .icon-paixu
        font-size 0.23rem
        display flex
        margin auto 0 auto 0.05rem
    .SearchAndSort
      width 3.75rem
      height 0.4rem
      display flex
      .Sourcessort
        width 3.2rem
        height 0.4rem
        box-shadow: 0 0 1px gainsboro;
      .SourcesSearch
        width 0.6rem
        height 0.4rem
        box-shadow: 0 0 1px gainsboro;
        background-color white
        .iconfont
          font-size 0.26rem
          display flex
          margin 0.08rem 0 0 0.15rem
    .SourcesBody
      width 3.75rem
      display flex
      margin-top 0.4rem
      .wrapper
        overflow hidden
        .individualSourceInfo
          width 3.75rem
          border-bottom 1px solid black
          display flex
          flex-flow column
          .individualSourceInfoContext
            width 3.2rem
            margin 0.05rem auto 0 auto
          .foreachImg
            margin 0.05rem auto 0 auto
            .SourceImg
              width 0.6rem
              height 0.6rem
          .publisInfo
            margin 0 0 0.05rem 0.5rem
            .publishUserName
              display flex
              .user-name
                width:0.55rem
                display: inline-block
                overflow:hidden
                white-space:nowrap
                text-overflow:ellipsis
                &.usernamechild
                  width 0.3rem
                  margin-left 0.3rem
              .user-name
                float left
                margin-left:0.2rem
              .comment-title
                float left
                margin-left:0.2rem
              .publish-date
                margin 0 0 0 0.3rem
  .loadingState
    width 3.75rem
    height 0.4rem
    background-image url("../../assets/imgs/loadingPic.gif")
    background-repeat no-repeat
    background-position center
  .fontAlert
    width 3.75rem
    height 0.4rem
    background-color grey
    opacity 0.3
    display flex
    .fontSetting
      margin auto
      font-size 0.18rem
      font-weight bold
      color white
</style>
