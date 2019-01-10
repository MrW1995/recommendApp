<template>
  <div class="SourcesList">
    <div class="SourcesHeader">
      <span class="SourcesTitle">资源共享</span>
    </div>
    <div class="SourcesBody">
      <Scroll :data="arr" class="wrapper" ref="wrapper">
        <ul>
          <li v-for="item in arr">
            <div class="individualSourceInfo">
              <span class="individualSourceInfoContext">{{SourceInfoContext}}</span>
              <table class="foreachImg">
                <tr v-for="(SourceImg,index) in SourcesImg" :key="index">
                  <td v-for="(img,index) in SourceImg" :key="index">
                    <img class="SourceImg" :src="img">
                  </td>
                </tr>
              </table>
              <div class="publisInfo">
                <publishUserName></publishUserName>
              </div>

            </div>
          </li>
        </ul>
      </Scroll>
    </div>
  </div>
</template>

<script>
  import Scroll from '../../components/Sroll/Scroll'
  import publishUserName from '../../components/PublishInfo/PublishUserName'
  export default {
    data(){
      return {
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
          'http://img.daimg.com/uploads/allimg/120319/1-12031921534Y24.jpg']
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
      publishUserName

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
    .SourcesHeader
      width 3.75rem
      height 0.4rem
      background-color #3366FF
      display flex
      border-bottom 1px solid gainsboro
      .SourcesTitle
        font-size 0.26rem
        color #F8F8F8
        margin auto
    .SourcesBody
      width 3.75rem
      height 5.7rem
      position absolute
      top 0.4rem
      .wrapper
        overflow hidden
        height 6.37rem
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
