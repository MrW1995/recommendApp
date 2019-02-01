<template>
  <div>
    <HeaderTop>
      <div class="select-sort" :class="{addbold:false}" slot="headerbar">
        <label class="select-label-1" :class="{changeColor1:changeColor1}" @click="changeColor('综合')">综合</label>
        <label class="select-label-2" :class="{changeColor2:changeColor2}" @click="changeColor('最热')">最热</label>
        <label class="select-label-3" :class="{changeColor3:changeColor3}" @click="changeColor('最近')">最近</label>
      </div>
      <i class="iconfont icon-fabu" :class="{iconfontColor:iconfontColor}" @click="showPublish"  @touchstart="changeIconfontColorDown" @touchend="changeIconfontColorUp" slot="iconfont"></i>
      <div class="sort" slot="headerSeaAndSort">
        <SearchInput v-if="!isShowSearchOrSortMenu"></SearchInput>
        <LeftMenu v-else></LeftMenu>
      </div>
    </HeaderTop>
    <ScenicList></ScenicList>
  </div>
</template>

<script>
  import HeaderTop from '../../components/HearderTop/HeaderTop'
  import LeftMenu from '../../components/SortMenu/SortMenu'
  import ScenicList from '../../components/ScenicList/ScenicList'
  import SearchInput from '../../components/Search/SearchInput'
  import {mapState} from 'vuex'
  export default {
    data(){
      return{
        changeColor1:true,
        changeColor2:false,
        changeColor3:false,
        iconfontColor:false
      }
    },
    computed:{
      ...mapState(['isShowSearchOrSortMenu'])
    },
    components:{
      HeaderTop,
      LeftMenu,
      ScenicList,
      SearchInput
    },
    methods:{
      showPublish(){
        this.$store.commit('change_publish',true)
      },
      changeColor(value){
        if(value==='综合'){
          this.changeColor1 = true
          this.changeColor2 = false
          this.changeColor3 = false
        }else if(value==='最热'){
          this.changeColor1 = false
          this.changeColor2 = true
          this.changeColor3 = false
        }else {
          this.changeColor1 = false
          this.changeColor2 = false
          this.changeColor3 = true
        }
      },
      changeIconfontColorUp(){
        console.log("333")
        this.iconfontColor = false
      },
      changeIconfontColorDown(){
        console.log("123")
        this.iconfontColor = true
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .select-sort
    /*float: left*/
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
