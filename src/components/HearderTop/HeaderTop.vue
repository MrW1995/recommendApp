<template>
    <div>
      <div class="header-top">
        <div class="header">
          <div class="select-sort" :class="{addbold:true}">
            <label class="select-label-1">综合</label>
            <label class="select-label-2">最热</label>
            <label class="select-label-3">最近</label>
          </div>
          <i class="iconfont icon-fabu" @click="showPublish"></i>
        </div>
        <div class="sort">
          <SearchInput v-if="!isShowSearche"></SearchInput>
          <LeftMenu v-else></LeftMenu>
          <div class="clearfloat"></div>
        </div>
      </div>
    </div>
</template>

<script>
  import LeftMenu from '../LeftMenu/LeftMenu'
  import SearchInput from '../Search/SearchInput'
  import {mapState} from 'vuex'
  export default {
    computed:{
      ...mapState(['isShowSearche'])
    },
    components:{
      LeftMenu,
      SearchInput
    },
    methods:{
      showPublish(){
        this.$store.commit('change_publish',true)
      }
    },
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .clearfloat
    clear: both
  .header-top
    position : fixed
    .header //导航栏
      width:3.75rem
      height: 0.40rem
      display: flex
      background-color: #3366FF
      border:none
      color: white
      .select-sort
        float: left
        margin: 0.02rem 0 0 0.5rem
        font-size: 0.28rem
        .select-label-2
          margin-left 0.2rem
          &.addbold
            font-weight bold
        .select-label-3
          margin-left 0.2rem
          &.addbold
            font-weight bold
      .icon-fabu
        font-size:0.3rem
        margin:0.075rem 0 0 0.5rem
    .sort
      float left
      width:3.75rem
      height:0.43rem
      /*background-color: #3366FF*/
      display:flex
      flex-flow: column
      border-bottom: 1px solid red
      margin-top -1px
      z-index 11

</style>
