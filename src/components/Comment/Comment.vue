<template>
  <div class="comment" v-if="isShowComment">

    <div class="mtheader">
      <span class="cancel"  @touchstart="changeColor(1)" @touchend="changeColor(2)" @click="showComment(false)">取消评论</span>
    </div>

    <textarea class="textareInput" placeholder="请填写你的评论" v-model="inputComent" maxlength="100">

    </textarea>
    <span class="statisticsCount" >{{remaindCount}}/{{allCount}}</span>

    <button class="mtbuttonclear" type="danger"><span class="mtpublic">清除</span></button>
    <button class="mtbuttonpublish" type="primary"><span class="mtpublic" @click="sendComment">评论</span></button>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  import { MessageBox } from 'mint-ui'
  export default {
    props:{
      articleId:{
        type: Number,
        default: 0
      },
    },
    data(){
      return{
        popupVisible:false,
        remaindCount:0,
        allCount:100,
        inputComent:'',
        number:100,
        isShowComment:false,
        url:'',
        flag:0,
        userId:0
      }
    },
    computed:{
      ...mapState(['codeFlag'])
    },
    watch:{
      inputComent(newVal,oldVal){
        const {remaindCount,allCoun} = this.util.countNumber(newVal,oldVal,this.allCount,this.number)
          this.remaindCount = remaindCount
          this.allCount = allCoun
      },
      codeFlag(value){
        if(value){
          this.isShowComment = !value
          this.$emit('closeShade')
          MessageBox('提示', '操作成功');
        }
      }
    },
    methods:{
      showComment(value,url){
        this.$emit('changeState')
        this.url = url
        this.isShowComment = value
      },
      showUserComment(boolVal,userId,url,num){
        this.url = url
        this.flag = num
        this.userId = userId
        this.isShowComment = boolVal

      },
      changeColor(value){

      },
      sendComment(){
        let articleEntities = {}
        let urls = ''
        let userInfo = window.localStorage.getItem("userInfo")
        let userId = JSON.parse(userInfo).userId
        if(this.flag === 0){
          articleEntities = {"articleId":this.articleId,"userCommentArticleId":userId,"commentContent":this.inputComent,"commentDateTime":this.util.dateFormat(new Date())+" "+this.util.dateTimeFormat(new Date())}
          urls = this.url
        }else{
          articleEntities = {"articleId":this.articleId,"commentUserId":userId,"commentContent":this.inputComent,"commentDateTime":this.util.dateFormat(new Date())+" "+this.util.dateTimeFormat(new Date()),"commentedUserId":this.userId}
          urls = this.url
        }
        this.$store.dispatch('articleComment',{articleEntities,urls})
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .comment
    width 3.75rem
    height 3rem
    position fixed
    bottom: 0
    margin 0 0 0 0
    background-color white
    border 1px solid gainsboro
    .mtheader
      width 3.75rem
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
