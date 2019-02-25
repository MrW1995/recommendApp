<template>
  <div>
    <HeaderTop>
      <div class="select-sort" :class="{addbold:false}" slot="headerbar">
        <label class="select-label-1" :class="{changeColor1:changeColor1}" @click="changeColor('综合')">综合</label>
        <label class="select-label-2" :class="{changeColor2:changeColor2}" @click="changeColor('最热')">最热</label>
        <label class="select-label-3" :class="{changeColor3:changeColor3}" @click="changeColor('最近')">最近</label>
      </div>
      <i class="iconfont icon-fabu" :class="{iconfontColor:iconfontColor}" @click="showPublish(true)"  @touchstart="changeIconfontColorDown" @touchend="changeIconfontColorUp" slot="iconfont"></i>
      <div class="sort" slot="headerSeaAndSort">
        <SearchInput v-if="!isShowSearchOrSortMenu"></SearchInput>
        <SortMenu :arr="arrs" :url="url" v-on:sendVal="sendVal" :SortVal="sort1" v-else></SortMenu>
      </div>
    </HeaderTop>
    <PublishScenic ref="publishScenic"></PublishScenic>
    <ScenicList></ScenicList>
  </div>
</template>

<script>
  import HeaderTop from '../../components/HearderTop/HeaderTop'
  import SortMenu from '../../components/SortMenu/SortMenu'
  import ScenicList from '../../components/ScenicList/ScenicList'
  import SearchInput from '../../components/Search/SearchInput'
  import PublishScenic from '../../components/PublishScenic/PublishScenic'
  import {mapState} from 'vuex'
  export default {
    data(){
      return{
        url:'query/sort',
        changeColor1:true,
        changeColor2:false,
        changeColor3:false,
        iconfontColor:false,
        sort1:'综合',
        sort2:'所有',
        arrs:["所有", "公园", "风景区", "游乐园", "动物园", "植物园", "博物馆", "水族馆", "名胜古迹",],
      }
    },
    computed:{
      ...mapState(['isShowSearchOrSortMenu'])
    },
    components:{
      HeaderTop,
      SortMenu,
      ScenicList,
      SearchInput,
      PublishScenic
    },
    methods:{
      showPublish(value){
          this.$refs.publishScenic.showPublishScenic(value)
      },
      changeColor(value){
        if(value==='综合'){
          this.changeColor1 = true
          this.changeColor2 = false
          this.changeColor3 = false
          this.sendReqSort(value)
        }else if(value==='最热'){
          this.changeColor1 = false
          this.changeColor2 = true
          this.changeColor3 = false
          this.sendReqSort(value)
        }else {
          this.changeColor1 = false
          this.changeColor2 = false
          this.changeColor3 = true
          this.sendReqSort(value)
        }
      },
      changeIconfontColorUp(){
        this.iconfontColor = false
      },
      changeIconfontColorDown(){
        this.iconfontColor = true
      },
      sendReqSort(value){
        this.sort1 = value
        console.log(value+this.sort2)

      },
      sendVal(value){
        this.sort2 = value
        console.log(this.sort2)
      }

    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .select-sort
    display flex
    flex-direction: row
    font-size: 0.26rem
    margin 0.01rem 0 0 0.8rem
    .select-label-1
      margin 0 0 0 0
      &.changeColor1
        color red
    .select-label-2
      margin 0 0 0 0.27rem
      &.changeColor2
        color red
    .select-label-3
      margin 0 0 0 0.27rem
      &.changeColor3
        color red
  .icon-fabu
    font-size:0.26rem
    margin:0.07rem 0 0 0.5rem
    &.iconfontColor
      color red
</style>
