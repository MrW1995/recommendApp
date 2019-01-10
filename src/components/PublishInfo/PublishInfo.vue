<template>
    <Scroll ref="wrapper":data="arr" class="PublishInfo">
      <div class="WrapperSetting">
        <div class="PublishMove">
          <img src="http://img.daimg.com/uploads/allimg/120319/1-12031921534Y24.jpg" alt="" class="PersonalImg">
          <span class="PublishName">{{username}}</span>
          <span class="PublishDate">{{publishDate}}</span>
        </div>

        <div class="PublishContent">
          <span class="PublishText">{{publishText}}</span>
        </div>

        <div class="PublishImg">
          <ul>
            <li v-for="(item,index) in arrImg" :key="index" >
              <img :src="item" alt="" class="SourcesImg">
            </li>
          </ul>
        </div>

        <div class="otherPeopleComment">
          <div class="otherPeopleCommentHeader">
            <span class="commentCount">{{commentCount}} 评论</span>
            <span class="comment">评论</span>
          </div>
          <CommentList></CommentList>
        </div>
      </div>
    </Scroll>

</template>

<script>
  import Scroll from '../../components/Sroll/Scroll'
  import CommentList from '../CommentList/CommentList'
  export default {
    props: ['publishText', 'username', 'publishDate','arrImg','commentCount'],
    data(){
      return {
        arr:['1']
      }
    },
    mounted(){
      this.$refs.wrapper.refresh()
    },
    components:{
      CommentList,
      Scroll,
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  ul,li
    ulAndLi()

  .PublishInfo
    display flex
    flex-flow column
    width 3.75rem
    height 6.37rem
    font-size 0.13rem
    overflow hidden
    .PublishMove
      display flex
      margin-bottom 0.05rem
      .PersonalImg
        width 0.35rem
        height 0.35rem
        margin 0.08rem 0 0 0.1rem
      .PublishName
        margin 0.23rem 0 0 0.05rem
      .PublishDate
        margin 0.23rem 0 0 2.2rem
    .PublishContent
      display flex
      flex-flow column
      .PublishText
        margin 0 auto 0.05rem auto
        width 3.2rem
    .PublishImg
      margin-left 0.375rem
      display flex
      flex-flow column
      .SourcesImg
        width 3rem
        height 1.3rem
    .otherPeopleComment
      display flex
      flex-flow column
      .otherPeopleCommentHeader
        width 3.75rem
        height 0.3rem
        display flex
        font-size 0.18rem
        background-color gainsboro
        .commentCount
          margin auto 0 auto 0.05rem
        .comment
          margin auto 0 auto 2.65rem
</style>
