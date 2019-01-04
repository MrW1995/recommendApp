<template>
  <mt-popup class="mtPopup"
            v-model="popupVisible"
            position="bottom"
            popup-transition="popup-fade">

    <div class="mtheader">
      <i class="iconfont icon-guanbi" @click="closeComment"></i>
    </div>

    <textarea class="textareInput" placeholder="请填写你的评论" v-model="inputComent">

    </textarea>
    <span class="statisticsCount" >{{remaindCount}}/{{allCount}}</span>

    <mt-button class="mtbuttonclear" type="danger"><span class="mtpublic">清除</span></mt-button>
    <mt-button  class="mtbuttonpublish" type="primary"><span class="mtpublic">评论</span></mt-button>
  </mt-popup>
</template>

<script>
  export default {
    props:{
      popupVisible:Boolean,
      default:false
    },
    data(){
      return{
        remaindCount:0,
        allCount:100,
        inputComent:''
      }
    },
    computed:{

    },
    watch:{
      inputComent(newVal,oldVal){
        const newValLength = newVal.length
        const oldValLength = oldVal.length
        if(newValLength>oldValLength){
          this.remaindCount = newValLength
          this.allCount = (this.allCount=100) - newValLength
        }else{
          this.remaindCount = newValLength
          this.allCount = this.allCount + (oldValLength-newValLength)
        }
      },
      popupVisible(value){
        if(this.popupVisible===false)
          this.$emit('fatherMethod')
      }
    },
    methods:{
      closeComment(){
        this.popupVisible = true
      }

    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .mtPopup
    width 3.75rem
    height 3rem
    .mtheader
      width 3.75rem
      height 0.3rem
      background-color #D3D3D3
      .icon-guanbi
        font-size 0.2rem
        float left
        color white
        margin 0.04rem 0 0 0.14rem
    .textareInput
      margin 0.1rem 0 0 0.225rem
      width 3.3rem
      height 1.5rem
    .statisticsCount
      float left
      display inline
      margin -0.2rem 0 0 3.1rem
      font-size 0.11rem
      z-index 111
    .mtbuttonpublish
      width 0.6rem
      float left
      margin 0rem 0 0 0.2rem
      .mtpublic
        width 0.32rem
        font-size 0.16rem
    .mtbuttonclear
      width 0.6rem
      float left
      margin 0rem 0 0 2rem
      .mtpublic
        width 0.32rem
        font-size 0.16rem
</style>
