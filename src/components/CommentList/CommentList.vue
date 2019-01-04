<template>
  <!--<div class="mtPopup" v-model="popupVisible" position="bottom" popup-transition="popup-fade">-->
    <!--<div class="showheader">-->
      <!--<i class="iconfont icon-guanbi"></i>-->
      <!--<span class="commentCount">{{commentCount}} 评论</span>-->
    <!--</div>-->

      <div class="showlist">
          <abc></abc>
      </div>

  <!--</div>-->
</template>

<script>
  import BScroll from '../../components/Sroll/Scroll'
  import abc from '../../components/abc/abc'
  export default {
    data(){
      return {
        arr:['1','2','3','4','5','6','7','8','1','2','3','4','5','6','7','8','1','2','3','4','5','6','7','8','1','2','3','4','5','6','7','8','1','2','3','4','5','6','7','8','1','2','3','4','5','6','7','8','1','2','3','4','5','6','7','8','1','2','3','4','5','6','7','8','1','2','3','4','5','6','7','8'],
        commentCount:27,
        popupVisible:true,
        pulldown:true
      }
    },
    // mounted(){
    //   this.$nextTick(() =>{
    //     if (!this.scroll) {
    //         this.scroll = new BScroll(this.$refs.wrapper, {
    //           probeType: 2
    //         });
    //       } else {
    //         this.scroll.refresh();
    //       }
    //   })
    // },
    created(){
      this.loadData()
    },
    components:{
      abc
    },
    methods:{
      loadData(){

      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  ul,li //除去ul li 的一些默认配置
    -webkit-margin-before: 0em
    -webkit-margin-after: 0em
    -webkit-margin-start: 0px
    -webkit-margin-end: 0px
    -webkit-padding-start: 0px
    text-align:left
    list-style: none
    font-size:0.18rem
  .mtPopup
    height 6.1rem
    background-color red
    display flex
    flex-flow column
    .showheader
      width 3.75rem
      height 0.3rem
      background-color  black
      .icon-guanbi
        float left
        margin 0.04rem 0 0 0.14rem
        font-size 0.2rem
        color #F8F8F8
      .commentCount
        float left
        color #F8F8F8
        margin 0.06rem 0 0 2.71rem
        font-size 0.16rem

  .showlist
    position absolute
    margin  50px 0 0 0
    /*height 5rem*/

    background-color red

</style>
