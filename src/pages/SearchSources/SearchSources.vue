<template>
    <div class="search">
      <div class="header">
        <i class="iconfont icon-fanhui1" @click="close()"></i>
        <input class="inputSearch" v-model="inputVal" placeholder="Search" @keyup.13="vagueSearch">
      </div>

      <scroll ref="wrapper"  class="wrapper" :scroY="scroY" :flagNum=1 :beforeScroll="true" :listenScroll="true" :data="vagueSearchArr">
        <ul>
          <li v-for="(item,index) in vagueSearchArr" :key="index" >
            <div class="searchList">
              <div>
                <table class="imgTable" @click="sendDetail(index)">
                  <tr v-for="(imgSortArr,index) in imgSortArrs(item.studyImg)" class="tableTr" :key="index">
                    <td v-for="(scenic,index) in imgSortArr" class="tableTd" :key="index">
                      <img class="vagueImg" :src="scenic" alt="">
                    </td>
                  </tr>
                </table>
              </div>
              <div @click="sendDetail(index)" class="searchContent" :class="{manyTitle:item.studyContent.length>50}">{{item.studyContent}}</div>
              <div class="dateAndName">
                <div class="searchName" >{{item.user.userName}}</div>
                <div class="searchDate">{{getDateTime(item.publishDateTime)}}</div>
              </div>
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
    data(){
      return{
        inputVal:'',
        scroY:75,
      }
    },
    computed:{
      ...mapState(['commentArticleFlag','pageNum','vague','vagueSearchArr','vagueFlag']),
      imgSortArrs(){
        return function(value){
          return this.util.splitArr(value,3)
        }
      }
    },
    components:{
      scroll
    },
    watch:{
      commentArticleFlag(value){
        if(this.vagueFlag){
          this.vagueSearch('')
        }
      },
      vagueSearchArr(value){
        if(this.vagueFlag)
          this.scroY = this.scroY+this.scroY
        this.$store.commit('loading_vague_flag',false)
      }
    },
    methods:{
      close(){
        this.$store.commit("clear_arr",[])
        this.$router.back()
      },
      vagueSearch(){
        let vague = ''
        if(this.inputVal !== ''){
          this.$store.commit('pagenumm',1)
          vague = this.inputVal
          this.inputVal = ''
        }
        else {
          vague = this.vague
          console.log("这是第二次加载的")
        }
        const pageNum = this.pageNum
        const urls = '/vague/query/study'
        this.$store.dispatch('vagueQuery',{pageNum,vague,urls})
      },
      sendDetail(index){
        const vague = this.vagueSearchArr[index]
        const num = 1
        this.$store.commit('copy_vague_value',{vague,num})
        this.$router.push('/sourceDetail')
      },
      getDateTime(dateTime){
        let monthAndDay =  this.util.getMonthAndDay(dateTime)
        return monthAndDay
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  ul,li
    ulAndLi()
  .search
    display flex
    color gainsboro
    height 6.67rem
    flex-flow column
    position absolute
    z-index 111
    border-bottom 1px solid gainsboro
    background-color whitesmoke
    .header
      width 3.75rem
      height 0.4rem
      display flex
      background-color white
      .icon-fanhui1
        margin auto 0 auto 0.1rem
      .inputSearch
        width 3.3rem
        font-size 0.22rem
        height 0.39rem
        border none
        margin-left 0.1rem
        outline none
        background-color white

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
