<template>
    <div class="publishUserName">
      <!--:class="{usernamechild:item.publishUser.username.length<3}"-->
      <span class="user-name" >长啥撒撒旦</span>
      <span class="comment-title">12评论</span>
      <span class="read-count">2.5K 浏览</span>
      <span class="publish-date">2019-01-10</span>
    </div>
</template>

<script>

  export default {

  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .publishUserName
    display flex
    .user-name
      width:0.55rem
      display: inline-block
      overflow:hidden
      white-space:nowrap
      text-overflow:ellipsis
      &.usernamechild
        width 0.3rem
        margin-left 0.3rem
    .comment-title
      float left
      margin-left:0.1rem
    .read-count
      margin-left 0.1rem
    .publish-date
      margin 0.04rem 0 0 0.1rem
</style>
