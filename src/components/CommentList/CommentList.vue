<template>
    <div class="commentList">
      <ul>
        <li class="settingLi" v-for="(item,index) in 3" :key="index">
          <div class="commentSetting">
            <img src="http://img.daimg.com/uploads/allimg/120319/1-12031921534Y24.jpg" alt="" class="commentUserImg">
            <span class="commentUserName">回家的时候</span>
            <span class="commentDate">2019-01-10</span>
          </div>
          <div class="commentBody">
            <span class="commentContent" @click="showUserComment(isCheck)">{{commentContent}}</span>
            <span class="userReply">回复</span>
          </div>
        </li>
      </ul>

    </div>
</template>

<script>

  export default {
    data(){
      return{
        commentContent:'好地方更好的三个号发的是尽快发货的结合的苏菲不穿校服V型参加现场',
        isCheck:false
      }
    },
    components:{

    },
    methods:{
      showUserComment(){
        this.$emit('change',this.commentContent)
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  ul,li
    ulAndLi()
  .commentList
    display flex
    flex-flow column
    .settingLi
      border-bottom 1px solid red
      .commentSetting
        display flex
        .commentUserImg
          width 0.35rem
          height 0.35rem
          margin 0.05rem 0 0 0.05rem
        .commentUserName
          font-size 0.13rem
          margin 0.22rem 0 0 0.05rem
        .commentDate
          font-size 0.13rem
          margin 0.22rem 0 0 1.85rem
      .commentBody
          display flex
          flex-flow column
        .commentContent
          width 3.2rem
          margin  0.05rem 0 0 0.28rem
        .userReply
          font-size 0.14rem
          margin 0 0 0.05rem 3.1rem
</style>
