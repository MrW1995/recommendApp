<template>
    <div class="commentList">
      <ul>
        <li class="settingLi" v-for="(item,index) in userCommentStudy" :key="index">
          <div class="commentSetting">
            <img src="http://img.daimg.com/uploads/allimg/120319/1-12031921534Y24.jpg" alt="" class="commentUserImg">
            <span class="commentUserName">{{item.user.userName}}</span>
            <span class="commentDate">{{dateFormat(new Date(item.commentDateTime))}}</span>
          </div>
          <div class="commentBody">
            <span class="commentContent" @click="showUserComment(index)">{{item.commentContent}}</span>
            <span class="userReply" @click="comment(item.user.userId)">评论</span>
          </div>
        </li>
      </ul>

    </div>
</template>

<script>

  export default {
    props:{
      userCommentStudy:Array,
    },
    data(){
      return{
        isCheck:false
      }
    },
    components:{

    },
    methods:{
      dateFormat(value){
        return this.util.dateFormat(value,1)
      },
      comment(value){
        this.$emit('CommentUser',value)
      },
      showUserComment(index){
        this.$router.push('/studyComment')
        let studyUserCommentUsers = this.userCommentStudy[index].userCommentUsers
        this.$store.commit('study_usercommentuser',studyUserCommentUsers)
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
      margin-bottom 0.05rem
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
          margin 0.22rem 0 0 1.5rem
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
