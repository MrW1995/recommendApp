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
          <SortMenu :arr="arrs" :url="url" :SortVal="sortVal" v-on:sendVal="sendVal"></SortMenu>
        </div>
        <div class="SourcesSearch">
          <i class="iconfont icon-sousuo" @click="$router.push('/searchSources')"></i>
        </div>
      </div>
    </HearderTop>
    <div class="StudySortPlat" :class="{showDisplay:chooseDisplay}">
        <ul>
          <li @click="choose('综合')" :class="{changeColor:sortVal == '综合'}">综合</li>
          <li @click="choose('最新')" :class="{changeColor:sortVal == '最新'}">最新</li>
          <li @click="choose('最热')" :class="{changeColor:sortVal == '最热'}">最热</li>
        </ul>
    </div>
    <div class="SourcesBody">
      <Scroll :data="arr" class="wrapper" ref="wrapper">
        <ul>
          <li v-for="item in arr">
            <div class="individualSourceInfo">
              <span class="individualSourceInfoContext" @click="showDetail(true)">{{SourceInfoContext}}
                <table class="foreachImg">
                  <tr v-for="(SourceImg,index) in SourcesImg" :key="index">
                    <td v-for="(img,index) in SourceImg" :key="index">
                      <img class="SourceImg" :src="img" >
                    </td>
                  </tr>
                </table>
              </span>
              <div class="publisInfo">
                <publishUserName></publishUserName>
              </div>

            </div>
          </li>
        </ul>
      </Scroll>
    </div>
    <SourcesDetail ref="sourcesDetail"></SourcesDetail>
    <PublishSource ref="publishSource"></PublishSource>
    <SearchSources></SearchSources>
  </div>
</template>

<script>
  import Scroll from '../../components/Sroll/Scroll'
  import publishUserName from '../../components/PublishInfo/PublishUserName'
  import SourcesDetail from '../../components/SourcesDetail/SourcesDetail'
  import HearderTop from '../../components/HearderTop/HeaderTop'
  import SortMenu from '../../components/SortMenu/SortMenu'
  import PublishSource from '../../components/PublishSource/PublishSource'
  import SearchSources from '../SearchSources/SearchSources'
  export default {
    data(){
      return {
        sortVal:'综合',
        checkNum:0,
        sort2:'所有',
        chooseDisplay:true,
        url:'query/sort1',
        arr:['1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1'],
        SourceInfoContext:'好几十个的广泛的双方都 股见到过热豆腐几个人抚养费的托管人关于发给他如果人也非法的声音扔的发热管他人',
        arrImg:['http://img.daimg.com/uploads/allimg/120319/1-12031921534Y24.jpg',
          'http://img.daimg.com/uploads/allimg/120319/1-12031921534Y24.jpg',
          'http://img.daimg.com/uploads/allimg/120319/1-12031921534Y24.jpg',
          'http://img.daimg.com/uploads/allimg/120319/1-12031921534Y24.jpg',
          'http://img.daimg.com/uploads/allimg/120319/1-12031921534Y24.jpg',
          'http://img.daimg.com/uploads/allimg/120319/1-12031921534Y24.jpg',
          'http://img.daimg.com/uploads/allimg/120319/1-12031921534Y24.jpg',
          'http://img.daimg.com/uploads/allimg/120319/1-12031921534Y24.jpg',
          'http://img.daimg.com/uploads/allimg/120319/1-12031921534Y24.jpg'],
        arrs:["所有", "语", "数","英","史","地","生"],
      }
    },
    computed:{
      SourcesImg(){
        const {arrImg} = this
        return this.util.splitArr(arrImg,3)
      }
    },
    mounted(){
      this.$refs.wrapper.refresh()
    },
    components:{
      Scroll,
      publishUserName,
      SourcesDetail,
      HearderTop,
      SortMenu,
      PublishSource,
      SearchSources
    },
    methods:{
      showDetail(value){
        this.$refs.sourcesDetail.showSourceDetail(value)
      },
      openPublish(value){
        this.$refs.publishSource.openPublishSource(value)
      },
      sendVal(value){
        this.sort2 = value
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
      choose(value){
        this.chooseDisplay = true
        this.sortVal = value
        console.log(this.sortVal + " : "+this.sort2)
      }

    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  ul,li
    ulAndLi()

  .SourcesList
    display flex
    flex-flow column
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
        &.changeColor
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
        background-color white
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
      margin-top 0.8rem
      .wrapper
        overflow hidden
        height 5.29rem
        .individualSourceInfo
          width 3.75rem
          border-bottom 1px solid black
          display flex
          flex-flow column
          .individualSourceInfoContext
            width 3.2rem
            margin 0.05rem auto 0 auto
          .foreachImg
            margin auto
            .SourceImg
              width 0.6rem
              height 0.6rem
          .publisInfo
            margin 0 0 0.05rem 0.5rem
</style>
