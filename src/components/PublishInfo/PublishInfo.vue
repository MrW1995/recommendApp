<template>
  <div>
    <div>

    </div>
    <div class="shade" v-if="isShade" @click="closeShade(false)"></div>

    <SourcesUserReply ref="sourcesUserReply"></SourcesUserReply>
  </div>
</template>

<script>

  import SourcesUserReply from '../../pages/StudyComment/StudyComment'
  export default {
    props: ['publishText', 'username', 'publishDate','arrImg','commentCount'],
    data(){
      return {
        arr:['1'],
        img:'',
        isShade:false,
      }
    },
    mounted(){

    },
    components:{
      SourcesUserReply
    },
    methods:{
      closeShade(value){
        this.$refs.comment.showComment(value)
        this.isShade = false
      },
      ShowComment(value){
        this.$refs.comment.showComment(value)
        this.isShade = true
      },
      changeState(){
        this.isShade = false
      },
      change(value){
        this.showUserComment(false,value)
      },
      showUserComment(boolVal,value){
        this.$refs.sourcesUserReply.change(boolVal,value)
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  ul,li
    ulAndLi()
  .shade
    settingShade()

</style>
