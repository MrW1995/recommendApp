<template>
  <mt-popup v-model="isShowUserLogin"  popup-transition="popup-fade">
    <div class="login">
      <span class="loginText">登录</span>
    </div>
    <div class="loginBody">
      <mt-navbar v-model="selected">
        <mt-tab-item id="1" >账号登入</mt-tab-item>
        <mt-tab-item id="2">手机登入</mt-tab-item>
      </mt-navbar>

      <mt-tab-container v-model="selected">
        <mt-tab-container-item id="1">
            <div class="userAcount">
               <span class="userAcountFont">用户名</span><input type="text" class="publishSetting userNameInput" placeholder="用户名/手机号">
            </div>
            <div class="userPwd">
              <span class="userPwdFont">密码</span><input type="password" class="publishSetting pwdInput" v-if="!false">
              <input type="text" class="publishSetting pwdInput" v-if="!true">
              <!--<i :class="imgUrl1" class="showPwd"></i>-->
            </div>
            <div class="validate">
              <span class="validateFont">验证码</span><input type="text" class="publishSetting validateInput">
              <div class="validatePicture"></div>
            </div>
            <div class="loginBtn">
              <div class="enter" @click="login">
                <span class="enterFont">登入</span>
              </div>
              <div class="cancel" @click="closeLogin">
                <span class="cancelFont">取消</span>
              </div>
            </div>
        </mt-tab-container-item>
        <mt-tab-container-item id="2">
          <div class="upload">

          </div>
        </mt-tab-container-item>
      </mt-tab-container>
    </div>
  </mt-popup>
</template>

<script>
  import {mapState} from 'vuex'
  export default {
    data(){
      return {
        selected:'1',
        imgUrl1:'iconfont icon-xianshi',
        imgUrl2:'iconfont icon-buxianshi'

      }
    },
    computed:{
        isShowUserLogin:{
          get(){
            console.log(this.$store.state.isShowUserLogin)
            return this.$store.state.isShowUserLogin
          },
          set(value){
            this.$store.state.isShowUserLogin = value
          }
        }

    },
    methods:{
      login(){
        console.log("123")
      },
      closeLogin(){
        this.$store.commit('change_login',false)
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .publishSetting
    width 1.8rem
    height 0.3rem
    border none
  .login
    width 3rem
    height 0.3rem
    display flex
    background-color #3366FF
    color #F8F8F8
    font-weight bold
    font-size 0.23rem
    .loginText
      margin auto
  .loginBody
    font-size 0.2rem
    width 3rem
    height 3rem
    display flex
    flex-flow column
    background-color #F8F8F8
    .userAcount
      display flex
      margin 0.28rem 0 0.05rem 0.15rem
      .userAcountFont
        font-size 0.24rem
      .userNameInput
        margin-left 0.05rem
    .userPwd
      display flex
      margin 0.1rem 0 0.05rem 0.25rem
      .userPwdFont
        font-size 0.24rem
        margin 0 0 0 0
      .pwdInput
        margin-left 0.19rem
      .showPwd
        float left
        color #3366FF
    .validate
      display flex
      margin 0.1rem 0 0.05rem 0.15rem
      .validateFont
        font-size 0.24rem
      .validateInput
        width 0.9rem
        margin-left 0.05rem
      .validatePicture
        width 0.8rem
        height 0.35rem
        background-color red
        margin-left 0.08rem
    .loginBtn
      font-size 0.23rem
      display flex
      margin 0.3rem 0 0 0.9rem
      .enter
        display flex
        width 0.8rem
        height 0.4rem
        border-radius 0.06rem
        background-color #3366FF
        .enterFont
          color #F8F8F8
          margin auto
      .cancel
        width 0.8rem
        height 0.4rem
        display flex
        margin-left 0.1rem
        border-radius 0.06rem
        background-color red
        .cancelFont
          color #F8F8F8
          margin auto
</style>
