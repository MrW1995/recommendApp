<template>
  <div class="comment" v-if="isShowComment">

    <div class="mtheader">
      <span class="cancel"  @touchstart="changeColor(1)" @touchend="changeColor(2)" @click="showComment(false)">取消评论</span>
      <!--<i class="iconfont icon-guanbi"></i>-->
    </div>

    <textarea class="textareInput" placeholder="请填写你的评论" v-model="inputComent" maxlength="100">

    </textarea>
    <span class="statisticsCount" >{{remaindCount}}/{{allCount}}</span>

    <button class="mtbuttonclear" type="danger"><span class="mtpublic">清除</span></button>
    <button class="mtbuttonpublish" type="primary"><span class="mtpublic">评论</span></button>
  </div>
</template>

<script>

  export default {
    data(){
      return{
        popupVisible:false,
        remaindCount:0,
        allCount:100,
        inputComent:'',
        number:100,
        isShowComment:false
      }
    },
    computed:{

    },
    watch:{
      inputComent(newVal,oldVal){
        const {remaindCount,allCoun} = this.util.countNumber(newVal,oldVal,this.allCount,this.number)
          this.remaindCount = remaindCount
          this.allCount = allCoun
      }
    },
    methods:{
      showComment(value){
        this.$emit('changeState')
        this.isShowComment = value
      },
      changeColor(value){

      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .comment
    width 3.5rem
    height 3rem
    position fixed
    bottom: 0
    margin 0 0 0 0.125rem
    background-color white
    border 1px solid gainsboro
    .mtheader
      width 3.5rem
      height 0.3rem
      background-color #D3D3D3
      .cancel
        font-size 0.16rem
        float left
        margin 0.045rem 0 auto 0.1rem
        color white
    .textareInput
      width 3.3rem
      height 1.5rem
      display flex
      margin 0.1rem auto 0 auto
    .statisticsCount
      settingStatisticsCount()
      margin -0.26rem 0 0 3.05rem
    .mtbuttonpublish
      settingBtn()
      margin-left 0.1rem
      .mtpublic
        width 0.32rem
        font-size 0.16rem
    .mtbuttonclear
      settingBtn()
      background-color red
      margin-left 1.9rem
      .mtpublic
        width 0.32rem
        font-size 0.16rem
</style>
