<template>
  <div>
    <HeaderTop>
      <div class="select-sort" :class="{addbold:false}" slot="headerbar">
        <label class="select-label-1" :class="{changeColor:chooseSort === '综合'}" @click="changeSort('综合')">综合</label>
        <label class="select-label-2" :class="{changeColor:chooseSort === '最热'}" @click="changeSort('最热')">最热</label>
        <label class="select-label-3" :class="{changeColor:chooseSort === '最近'}" @click="changeSort('最近')">最近</label>
      </div>
      <i class="iconfont icon-fabu" :class="{iconfontColor:iconfontColor}" @click="showPublish(true)"  @touchstart="changeIconfontColorDown" @touchend="changeIconfontColorUp" slot="iconfont"></i>
      <div class="sort" slot="headerSeaAndSort">
        <SearchInput v-if="!isShowSearchOrSortMenu"></SearchInput>
        <SortMenu :arr="sortList" :url="url" v-on:sendVal="sendVal" :SortVal="travelSort" v-else></SortMenu>
      </div>
    </HeaderTop>

    <ScenicList></ScenicList>
    <Login></Login>
  </div>
</template>

<script>
  import HeaderTop from '../../components/HearderTop/HeaderTop'
  import SortMenu from '../../components/SortMenu/SortMenu'
  import ScenicList from '../../components/ScenicList/ScenicList'
  import SearchInput from '../../components/Search/SearchInput'
  import PublishScenic from '../PublishScenic/PublishScenic'
  import Login from '../../components/Login/Login'
  import {mapState} from 'vuex'
  import { MessageBox } from 'mint-ui'
  export default {
    data(){
      return{
        url:'query/sort',
        iconfontColor:false,
        chooseSort:'综合',
        travelSort:'所有',
        url:'/get/travel/sort'
      }
    },
    computed:{
      ...mapState(['scenics','isShowSearchOrSortMenu','token','loading','pageNum','dateTime','codeFlag','msgContent','sortList'])
    },
    components:{
      HeaderTop,
      SortMenu,
      ScenicList,
      SearchInput,
      PublishScenic,
      Login,
    },
    mounted(){
      let url = this.url
      let num = 1
      this.$store.dispatch("getSort",{url,num})
      this.queryScenic()
    },
    watch:{
      loading(value){
        if(value === 'new' || value === '加载' || value === '最热' || value === '最近' || value === '最新' || value === 'travelSort'){
          if(this.loading === 'new'){
            this.chooseSort = '综合'
            this.travelSort = '所有'
            this.queryScenic()
          }else {
            this.queryScenic()
          }
        }
      },
      codeFlag(value){
        if(value){
          this.$refs.publishScenic.showPublishScenic(false)
          MessageBox('提示', '操作成功');
        }
      },
      sortList(){

      }
    },
    methods:{
      open() {
        this.$message({
          message: this.msgContent,
          type: 'success'
        });
      },
      showPublish(value){
        if(window.localStorage.getItem("token"))
          this.$router.push("/publishScenic")
        else
          this.$store.commit('change_login',true)
      },
      userLogin(){
        this.$store.commit('change_login',true)
      },
      changeSort(value){
        if(value==='综合'){
          this.chooseSort = value
          this.$store.commit('change_pagenum',0)
          this.$store.commit('change_date','')
          this.$store.commit('change_loding','最新')

        }else if(value==='最热'){
          this.chooseSort = value
          this.$store.commit('change_pagenum',0)
          this.$store.commit('change_date','')
          this.$store.commit('change_loding','最热')

        }else {
          this.chooseSort = value
          this.$store.commit('change_pagenum',0)
          this.$store.commit('change_date','')
          this.$store.commit('change_loding','最近')

        }
      },
      changeIconfontColorUp(){
        this.iconfontColor = false
      },
      changeIconfontColorDown(){
        this.iconfontColor = true
      },
      queryScenic(){
        const travelSort = this.travelSort
        const sorts = this.chooseSort
        const loading = this.loading
        const pageNum = this.pageNum
        const dateTime = this.dateTime
        console.log("travelSort "+this.travelSort,"sorts "+sorts,"loading "+loading,"dateTime "+dateTime,"pageNum "+this.pageNum)
        if(this.loading === '1')
          return
        this.$store.dispatch('queryScenic',{travelSort,sorts,loading,dateTime,pageNum})
      },
      sendVal(value){
        this.travelSort = value
        this.$store.commit('change_pagenum',0)
        this.$store.commit('change_loding','travelSort')
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
      &.changeColor
        color red
    .select-label-2
      margin 0 0 0 0.27rem
      &.changeColor
        color red
    .select-label-3
      margin 0 0 0 0.27rem
      &.changeColor
        color red
  .icon-fabu
    font-size:0.26rem
    margin:0.07rem 0 0 0.5rem
    &.iconfontColor
      color red
</style>
