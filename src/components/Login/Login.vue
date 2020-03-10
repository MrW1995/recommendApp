<template>
  <mt-popup v-model="isShowUserLogin"  popup-transition="popup-fade">
    <div class="login">
      <span class="loginText">登录</span>
    </div>
    <div class="loginBody">

      <mt-tab-container v-model="selected">
        <mt-tab-container-item id="1">
            <div class="msgTitle" v-if="showMsg">
              <span class="setFont">{{msg}}</span>
            </div>
            <div class="userAcount">
               <span class="userAcountFont">用户名</span><input type="text" class="publishSetting userNameInput"v-model="userName" placeholder="请输入用户名">
            </div>
            <div class="userPwd">
              <span class="userPwdFont">密码</span><input type="password" v-model="password" class="publishSetting pwdInput" placeholder="请输入密码" v-if="!isShowPwd">
              <input type="text" placeholder="请输入密码" v-model="password" class="publishSetting pwdInput" v-else>
              <i :class="isShowPwd?'iconfont icon-xianshi':'iconfont icon-guanbixianshi'" class="showPwd" @click="isShowPwd = !isShowPwd"></i>
            </div>

            <div class="loginBtn">
              <div class="enter" @click="login">
                <span class="enterFont">登入</span>
              </div>
            </div>
            <span class="userRegister" @click="$router.push('/personaledit')">用户注册</span>
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
        userName:'',
        password:'',
        isShowPwd:false,
        selected:"1",
        isShowSendNumber:false,
        showMsg:false
       /* inputNumber:'',*/
      }
    },
    computed:{
        ...mapState(['msg','code']),
        isShowUserLogin:{
          get(){
            return this.$store.state.isShowUserLogin
          },
          set(value){
            this.$store.state.isShowUserLogin = value
          }
        },


    },
    watch:{
      code(value){
        if(value !== 0){
          this.showMsg = true
        }
        setTimeout(()=>{
          this.showMsg = false
        },2000)
      }
    },
    methods:{
      login(){
        let userName = this.userName
        let password = this.password
        this.$store.dispatch("userLogin",{userName,password})
      },
      closeLogin(){
        this.$store.commit('change_login',false)
      },

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
    height 2.1rem
    display flex
    flex-flow column
    background-color #F8F8F8
    .msgTitle
      position absolute
      width 3rem
      color white
      font-weight bold
      background-color grey
      opacity 0.3
      font-size 0.18rem
      display flex
      .setFont
        margin auto
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
        position: absolute;
        left 2.40rem
        top 0.75rem
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
      margin 0.3rem 0 0 0
      .enter
        display flex
        width 2.2rem
        height 0.4rem
        margin 0 auto 0 auto
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
    .upload
      width 3.75rem
      .phoneLogin
        margin 0.1rem 0 0 0
        display flex
        flex-flow column
        .phoneNumber
          margin 0
          .phoneInput
            width 3.75rem
            height 0.3rem
            border none
          .sendMessage
            position absolute
            top 0.11rem
            left 2.188rem
            width 0.8rem
            background-color #3366FF
            height 0.3rem
            display flex
            .getValidate
                margin auto
                color #F8F8F8
                font-size 0.15rem
       .phoneValidate
          margin-top 0.1rem
          .validateNumber
            border none
            width 3.75rem
            height 0.3rem
    .userRegister
      display flex
      margin 0.08rem 0 0 0.05rem
      font-size 0.16rem
      color grey
</style>
