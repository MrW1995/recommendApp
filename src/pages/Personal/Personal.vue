<template>
    <div class="Personal">
        <div class="header">
          <span class="login" v-if="userInfo == null">未登录</span>
          <span class="login" v-else>已登录</span>
        </div>
        <div class="userLoginAndInfo">
          <div class="userlogin">
            <img v-if="userInfo == null"  src="http://img2.imgtn.bdimg.com/it/u=1813275965,321881607&fm=26&gp=0.jpg" class="userImg">
            <img @click="openPersonalInfo" v-else :src="userInfo.personImg" class="userImg">
            <div class="userNotLogin"  v-if="userInfo == null">
                <span class="immediatelyLogin" @click="Login">立即登录</span>
                <span class="alertTest">获取更多的操作</span>
            </div>
            <div class="alreadyExist" v-else>
              <span class="alrealyLogin">{{userInfo.userName}}</span>
              <span class="personDesc">{{userInfo.descript}}</span>
            </div>

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
              <div class="dataEdit" @click="$router.push('/personaledit')" :class="{changeDataEdit:changeCss === 1}"  @touchstart="changeCSS(1)">
                  <div class="move">
                    <i class="iconfont icon-ziliao"></i>
                    资料编辑
                  </div>
              </div>
              <div class="advice" @click="userAdvice('1')" :class="{changeAdvice:changeCss === 2}"  @touchstart="changeCSS(2)">
                  <div class="move">
                    <i class="iconfont icon-yonghufankui"></i>
                    用户反馈
                  </div>
              </div>
              <div class="system" @click="title()" :class="{changeSystem:changeCss === 3}"  @touchstart="changeCSS(3)">
                <div class="move">
                  <i class="iconfont icon-xitongshezhi"></i>
                  系统设置
                </div>
              </div>
            </div>
        </div>
      <div class="loginOut" @click="LoginOut" :class="{ChangeLoginOut:changeCss === 4}"  @touchstart="changeCSS(4)">
          <span class="back">退出</span>
      </div>
      <div class="shade" v-if="shade" @click="userAdvice('0')" ></div>
      <div class="userAdvice" v-if="advice">
        <div class="adviceHeader">
          <span class="userAdviceTitle">用户反馈</span>
        </div>
        <div class="adviceContent">
          <textarea class="inputAdvice" v-model="inputAdvice" rows="4" cols="35" placeholder="请输入您的意见"></textarea>
        </div>
        <div class="adviceSubmit">
          <span class="submit">
            <span class="submitFont" @click="submit">提交</span>
          </span>
        </div>
      </div>
      <Login></Login>

    </div>
</template>

<script>
  import Login from '../../components/Login/Login'
  import {mapState} from 'vuex'
  import { MessageBox } from 'mint-ui'
  export default {
    data(){
      return {
        attentionCount:0,
        publishCount:0,
        commentCount:0,
        changeCss:0,
        userInfo:[],
        shade:false,
        advice:false,
        inputAdvice:''
      }
    },
    computed:{
      ...mapState(['userInfos','codeFlag','msgContent'])
    },
    watch:{
      userInfos(value){
          this.publishCount = value.allPublish
          this.commentCount = value.allComment
          this.userInfo = value
      },
      deep:true,
      codeFlag(value){
        if(value){
          this.$router.back()
          MessageBox('提示', '操作成功')
        }
      }
    },
    components:{
      Login,
    },
    mounted(){
      const userInfo = JSON.parse(window.localStorage.getItem('userInfo'))
      this.userInfo = userInfo
    },
    methods:{
      title(){
        MessageBox('提示', '还在努力开发中...')
      },
      Login(){
        this.$store.commit('change_login',true)
      },
      LoginOut(){
        this.userInfo = null
        window.localStorage.clear()
      },
      changeCSS(value){
        this.changeCss = value
        setTimeout(()=>{
          this.changeCss = 0
        },1000)
      },
      openPersonalInfo(){
        this.$router.push('/personalInfo')
      },
      userAdvice(flag){
        this.inputAdvice = ''
        if(window.localStorage.getItem("token"))
          if(flag === '1'){
            this.shade = true
            this.advice = true
          }else{
            this.shade = false
            this.advice = false
          }
        else
          this.$store.commit('change_login',true)

      },
      submit(){

        this.shade = false
        this.advice = false
        let dateTime = this.util.dateFormat(new Date())+" "+this.util.dateTimeFormat(new Date())
        let advice = {"userId":this.userInfo.userId,"adviceContent":this.inputAdvice,"submitDate":dateTime}
        console.log(advice)
        this.$store.dispatch('submitAdvice',advice)
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
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
        .alreadyExist
          display flex
          flex-flow column
          .alrealyLogin
            font-size 0.23rem
            margin 0.35rem 0 0 0.1rem
          .personDesc
            font-size 0.18rem

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
            background-color  #3366FF
        .advice
          width 3.75rem
          height 0.5rem
          line-height 0.5rem
          background-color gainsboro
          margin 0.1rem 0 0.05rem 0
          &.changeAdvice
            background-color #3366FF
        .system
          width 3.75rem
          height 0.5rem
          line-height 0.5rem
          background-color gainsboro
          margin 0.1rem 0 0.05rem 0
          &.changeSystem
            background-color  #3366FF
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
  .shade
    width 3.75rem
    height 6.67rem
    background-color black
    opacity 0.1
    position absolute
  .userAdvice
    width 3rem
    height 1.53rem
    position absolute
    left 0
    right 0
    top 0
    bottom 0
    background-color white
    margin auto
    .adviceHeader
      width 3rem
      height 0.3rem
      display flex
      border-bottom 1px solid grey
      .userAdviceTitle
        margin auto
        font-size 0.18rem
        font-weight bold
    .adviceContent
      width 3rem
      height 0.93rem
      border-bottom 1px solid grey
      .inputAdvice
        display flex
        border none
        outline 0
        font-size 0.16rem
    .adviceSubmit
      width 3rem
      height 0.3rem
      .submit
        display flex
        margin 0.02rem auto 0 auto
        font-size 0.18rem
        font-weight bold
        width 0.8rem
        heigth 0.26rem
        border-radius 0.5rem
        background-color blue
        .submitFont
          margin auto

</style>
