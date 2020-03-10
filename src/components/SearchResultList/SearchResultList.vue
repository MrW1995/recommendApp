<template>
  <scroll ref="wrapper"  class="wrapper" :scroY="scroY" :flagNum=1 :beforeScroll="true" :listenScroll="true" :data="vagueSearchArr">
    <ul>
      <li v-for="(item,index) in vagueSearchArr" :key="index" >
        <div class="searchList">
          <div>
            <table class="imgTable" @click="sendDetail(index)">
              <tr v-for="(imgSortArr,index) in imgSortArrs(item.publishImgArr)" class="tableTr" :key="index">
                <td v-for="(scenic,index) in imgSortArr" class="tableTd" :key="index">
                  <img class="vagueImg" :src="scenic" alt="">
                </td>
              </tr>
            </table>
          </div>
          <div @click="sendDetail(index)" class="searchContent" :class="{manyTitle:item.publishTitle.length>50}">{{item.publishTitle}}</div>
          <div class="dateAndName">
            <div class="searchName" >张三好</div>
            <div class="searchDate">{{getDateTime(item.publishDateTime)}}</div>
          </div>
        </div>
      </li>
    </ul>
  </scroll>
</template>

<script >
  import scroll from '../../components/Sroll/Scroll'
  import {mapState} from 'vuex'
  export default {
    props:{
      searchListFlag:String,
      url:String,
    },
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

      vagueSearch(value){
        const pageNum = this.pageNum
        let inputValue = value
        let vague = ''
        if(inputValue !== ''){
          vague = inputValue
          inputValue = ''
        }
        else {
          vague = this.vague
        }
        const urls = this.url
        this.$store.dispatch('vagueQuery',{pageNum,vague,urls})
      },
      sendDetail(index){
        const vague = this.vagueSearchArr[index]
        const num = 0
        this.$store.commit('copy_vague_value',{vague,num})
        this.$router.push('/scenicDetail')

      },
      getDateTime(dateTime){
        let monthAndDay =  this.util.getMonthAndDay(dateTime)
        return monthAndDay
      }
    }
  }
</script>

<style sscoped lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  ul,li
    ulAndLi()
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
