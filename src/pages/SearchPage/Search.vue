<template>
    <div class="searchPage">
      <div class="header">
        <i class="iconfont icon-fanhui1" @click="close()"></i>
        <input type="text" v-model="inputVal" class="search-input" placeholder="搜索">
        <span class="search-button" @click="vagueSearch()">搜索</span>
      </div>

      <SearchResultList :searchListFlag="searchListFlag" :url="url" ref="searchResultList"></SearchResultList>


    </div>
</template>

<script>
  import SearchResultList from '../../components/SearchResultList/SearchResultList'
  export default {
    data(){
      return{
        inputVal:'',
        searchListFlag:'Travel',
        url:'/vague/query'
      }
    },
    components:{
      scroll,
      SearchResultList
    },
    methods:{
      close(){
        this.$store.commit("clear_arr",[])
        this.$router.back()
      },
      vagueSearch(){
        this.$store.commit('pagenumm',1)
        this.$refs.searchResultList.vagueSearch(this.inputVal)
      },
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  ul,li
    ulAndLi()
  .searchPage
    height 6.67rem
    background-color whitesmoke
    display flex
    flex-flow column
    .header
      position fixed
      width 3.75rem
      height 0.40rem
      display flex
      z-index 111
      background-color #3366FF
      .icon-fanhui1
        color #F8F8F8
        font-size 0.26rem
        margin 0.06rem 0 0 0.15rem
      .search-input
        margin 0.06rem 0 0 0.02rem
        width 2.28rem
        height 0.26rem
        border none
        color #F8F8F8
        background:rgba(0,0,0,0.2);
        background-image: url(../../assets/imgs/search-black.png)/*设置小图标*/
        background-size: 0.16rem 0.16rem/*小图标的大小*/
        background-position: 0.05rem 0.06rem/*小图标在input的位置*/
        background-repeat: no-repeat/*背景小图标不重复*/
        padding: 0 0 0 0.3rem/*设置input内边距*/
        &::-webkit-input-placeholder
          color #F8F8F8
          font-family "Microsoft YaHei"
      .search-button
        margin 0.04rem 0 0 0.1rem
        color #F8F8F8
        font-size 0.21rem
    .searchList
      position relative
      font-size 2rem
    .wrapper
      position relative
      top 0.4rem
      overflow: hidden
      .searchList
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
