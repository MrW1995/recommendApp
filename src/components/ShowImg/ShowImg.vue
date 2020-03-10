<template>
    <div v-if="isShowImg">
      <img :src="img" alt="" class="img">
    </div>
</template>

<script>
  export default {
    props:{
      img: {
        type: String,
        default: ''
      },
    },
    data(){
      return {
        isShowImg:false
      }
    },
    methods:{
      showImg(value){
        this.isShowImg = value
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .img
    width 3.75rem
    height 2rem
    position: absolute;
    margin 2.335rem 0 0 0
    background-color: red;
</style>
