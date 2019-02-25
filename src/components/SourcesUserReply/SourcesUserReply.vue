<template>
  <div class="sourcesUserReply" :class="{isShow:checkIsOpen}">
    <PublicReply v-on:close="close"></PublicReply>
  </div>
</template>

<script>
  import PublicReply from '../../components/PublicReply/PublicReply'
  export default {
    data(){
      return {
        checkIsOpen:true
      }
    },
    components:{
      PublicReply
    },
    methods:{
      change(boolVal,value){
        if(boolVal === false)
          this.checkIsOpen = boolVal
        else
          this.checkIsOpen = boolVal
      },
      close(value){
        this.change(value,'')
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .sourcesUserReply
    background-color white
    position absolute
    top 0
    &.isShow
      display none
</style>

