<template>
    <div class="Personal">
        <div class="header">
          <span class="login">{{NotLogin}}</span>
        </div>
        <div class="userLoginAndInfo">
          <div class="userlogin">
            <img @click="openPersonalInfo" src="http://img2.imgtn.bdimg.com/it/u=1813275965,321881607&fm=26&gp=0.jpg" class="userImg">
            <div class="userNotLogin" v-if="!false">
                <span class="immediatelyLogin" @click="Login">立即登录</span>
                <span class="alertTest">获取更多的操作</span>
            </div>
            <span class="alrealyLogin" v-if="false">已登录</span>
          </div>

          <div class="userRecord">
              <div class="attentionCount">
                <div class="aboutAttentionCount">
                  <span class="attentionCountNumber">{{attentionCount}}</span>
                  <span class="attentionCountText">关注数</span>
                </div>
              </div>
              <div class="publishCount">
                <div class="aboutPublishCount">
                  <span class="">{{publishCount}}</span>
                  <span class="">发布数</span>
                </div>
              </div>
              <div class="commentCount">
                <div class="aboutCommentCount">
                  <span class="">{{commentCount}}</span>
                  <span>评论数</span>
                </div>
              </div>
          </div>
        </div>
        <div class="userOperate">
            <div class="aboutUserOperate">
              <div class="dataEdit" @click="$router.push('/personaledit')" :class="{changeDataEdit:changeCss1}"  @touchstart="changeCSS(true,'data')" @touchend="changeCSS(false,'data')">
                  <div class="move">
                    <i class="iconfont icon-ziliao"></i>
                    资料编辑
                  </div>
              </div>
              <div class="advice" :class="{changeAdvice:changeCss2}"  @touchstart="changeCSS(true,'advice')" @touchend="changeCSS(false,'advice')">
                  <div class="move">
                    <i class="iconfont icon-yonghufankui"></i>
                    用户反馈
                  </div>
              </div>
              <div class="system" :class="{changeSystem:changeCss3}"  @touchstart="changeCSS(true,'system')" @touchend="changeCSS(false,'system')">
                <div class="move">
                  <i class="iconfont icon-xitongshezhi"></i>
                  系统设置
                </div>
              </div>
            </div>
        </div>
      <div class="loginOut" @click="LoginOut" :class="{ChangeLoginOut:changeCss4}"  @touchstart="changeCSS(true,'loginOut')" @touchend="changeCSS(false,'loginOut')">
          <span class="back">退出</span>
      </div>
      <Login></Login>
      <PersonalInfo></PersonalInfo>
    </div>
</template>

<script>
  import Login from '../../components/Login/Login'
  import PersonalInfo from '../../components/PersonalInfo/PersonalInfo'
  export default {
    data(){
      return {
        NotLogin:'未登录',
        attentionCount:1100,
        publishCount:100,
        commentCount:1,
        changeCss1:false,
        changeCss2:false,
        changeCss3:false,
        changeCss4:false,
      }
    },
    components:{
      Login,
      PersonalInfo,
    },
    methods:{
      Login(){
        this.$store.commit('change_login',true)

      },
      LoginOut(){
        console.log("LoginOut")
      },
      changeCSS(value,sort){
        if(sort ==='data')
          this.changeCss1 = value
        else if(sort ==='advice')
          this.changeCss2 = value
        else if(sort === 'system')
          this.changeCss3 = value
        else
          this.changeCss4 = value
      },
      openPersonalInfo(){
        this.$store.commit('change_personal',true)
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .Personal
    display flex
    flex-flow column
    .header
      display flex
      width 3.75rem
      height 0.4rem
      font-size 0.26rem
      color #F8F8F8
      font-weight bold
      background-color #3366FF
      .login
        margin 0.05rem 0 0 1.6rem
    .userLoginAndInfo
      width 3.75rem
      font-size 0.21rem
      display flex
      flex-flow column
      .userlogin
        margin 0.18rem 0 0.1rem 0.26rem
        display flex
        .userImg
          width 1rem
          height 1rem
          border-radius 100%
        .userNotLogin
          display flex
          flex-flow column
          margin 0.23rem 0 0 0.1rem
          .immediatelyLogin
            color blue
            margin 0
          .alertTest
            margin 0
        .alrealyLogin
          font-size 0.23rem
          margin 0.35rem 0 0 0.1rem

      .userRecord
        display flex
        .attentionCount
          width 1.24rem
          height 0.6rem
          border-right 1px solid black
          border-top 1px solid black
          border-bottom 1px solid black
          .aboutAttentionCount
            display flex
            flex-flow column
            text-align center
        .publishCount
          width 1.24rem
          height 0.6rem
          border-top 1px solid black
          border-bottom 1px solid black
          border-right 1px solid black
          .aboutPublishCount
            display flex
            flex-flow column
            text-align center
        .commentCount
          width 1.24rem
          height 0.6rem
          border-top 1px solid black
          border-bottom 1px solid black
          .aboutCommentCount
            display flex
            flex-flow column
            text-align center
    .userOperate
      width 3.75rem
      font-size 0.26rem
      .aboutUserOperate
        display flex
        flex-flow column
        .dataEdit
          width 3.75rem
          height 0.5rem
          line-height 0.5rem
          background-color gainsboro
          margin 0.2rem 0 0.05rem 0
          &.changeDataEdit
            background-color pink
        .advice
          width 3.75rem
          height 0.5rem
          line-height 0.5rem
          background-color gainsboro
          margin 0.1rem 0 0.05rem 0
          &.changeAdvice
            background-color pink
        .system
          width 3.75rem
          height 0.5rem
          line-height 0.5rem
          background-color gainsboro
          margin 0.1rem 0 0.05rem 0
          &.changeSystem
            background-color pink

    .loginOut
      margin-top 0.5rem
      width 3.75rem
      height 0.4rem
      line-height 0.4rem
      display flex
      background-color #FF0033
      &.ChangeLoginOut
        background-color black
        opacity 0.5
      .back
        margin 0 auto
        font-weight bold
        font-size 0.22rem
        color #F8F8F8

  .move
    margin 0 0 0 0.2rem
</style>
