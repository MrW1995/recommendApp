<template>
  <div class="laugh">
    <div class="header">
      <span class="fontSetting">每日一笑</span>
    </div>
    <scroll :data="everyDayLaugh" :flagNum=3 :pulldown="true" ref="wrapper"  class="wrapper">
      <ul>
        <li v-for="(item,index) in everyDayLaugh" :key="index">
          <div class="laughBody">
            <div class="laughTitle">{{item.title}}</div>
            <div class="laughContent">{{item.text}}</div>
          </div>
        </li>
      </ul>
    </scroll>
  </div>
</template>
<script>
  import scroll from '../../components/Sroll/Scroll'
  import {mapState} from 'vuex'
  export default {
    computed:{
      ...mapState(['everyDayLaugh','laughFlag','pageNum'])
    },
    mounted(){
      this.$store.commit('pagenumm',1)
      this.queryLaugh()
    },
    watch:{
      laughFlag(value){
        this.queryLaugh()
      }
    },
    methods:{
      queryLaugh(){
        let pageNum = this.pageNum
        this.$store.dispatch('everyDayLaugh',{pageNum})
      }
    },
    components:{
      scroll
    }
  }
</script>


<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  ul,li
    ulAndLi()

  .laugh
    display flex
    flex-flow column
    height 6.67rem
    background-color white
    .header
      position fixed
      width 3.75rem
      height 0.4rem
      display flex
      z-index 111
      background-color #3366FF
      .fontSetting
        margin auto
        font-size 0.26rem
        color #F8F8F8
    .wrapper
      position relative
      top 0.4rem
      overflow: hidden
      .laughBody
        display flex
        flex-flow column
        font-size 0.16rem
        border-bottom 1px solid black
        margin 0 auto 0.01rem auto
        width 3.2rem
        .laughTitle
          margin 0 auto 0.01rem auto
        .laughContent
          margin-bottom 0.03rem
</style>
