<template>
  <mt-popup v-model="isShowUserComment" position="bottom" popup-transition="popup-fade">
    <PublicReply></PublicReply>
  </mt-popup>
</template>

<script>
  import PublicReply from '../../components/PublicReply/PublicReply'
  export default {
    computed:{
      isShowUserComment:{
        get(){
          return this.$store.state.isShowUserComment
        },
        set(value){
          this.$store.state.isShowUserComment = value
        }
      }
    },
    components:{
      PublicReply
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">

</style>

