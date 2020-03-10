<template>
  <div class="personalEdit">
    <div class="header" @click="$router.back()">
      <i class="iconfont icon-fanhui1" ></i>
      <span class="editFont" v-if="userInfo == null">用户注册</span>
      <span class="editFont" v-else>资料编辑</span>
    </div>
    <div class="check" v-if="showPwd">
      <span class="pwdInput">{{pwdInput}}</span>
    </div>
    <div class="editBody">
      <div class="editTop">
        <div class="userPersonalImg">
          <span class="userPersonalImgChild1">头像</span>
          <span class="userPersonalImgChild2">
            <span @click="uploaderImg" class="chooseUser"   v-if="userInfo == null">选择图片</span>

            <img  v-else @click="uploaderImg"  :src="userInfo.personImg" alt="" class="imgUser">
          </span>
        </div>
        <div class="userPersonalName">
          <span class="userPersonalNameChild1">用户名</span>
          <input type="text" placeholder="请输入用户名" class="inputUserName"  v-if="userInfo == null" v-model="userName">
          <span class="userPersonalNameChild2"  :class="{userPersonalNameChild3:userName.length>3}" v-else>{{userInfo.userName}}</span>
        </div>
        <div class="userPassword">
          <div class="userPassword1">
            <span class="passwordNameSet">请输入密码</span>
            <input type="password" v-model="pwd1" placeholder="请输入密码" class="inputPasswordSetting">
          </div>
          <div  class="userPassword1">
            <span class="passwordNameSet">请再次输入</span>
            <input type="password" v-model="pwd2" placeholder="请再次输入" @blur="focu" class="inputPasswordSetting">
          </div>
        </div>
        <div class="userPersonalDesc">
          <span class="userPersonalDescChild1">介绍</span>
          <span class="userPersonalDescChild2">
            <textarea rows="3" cols="30" v-model="inputUserDesc"  placeholder="请输入自我描述" class="personalDesc">

            </textarea>
          </span>
        </div>
      </div>
      <div class="editDown">
        <div class="userPersonalSex">
          <span class="userPersonalSexChild1">性别</span>
          <span class="userPersonalSexChild2">
            <input type="radio" name="radio" value="男" v-model="sex">男
            <input type="radio" name="radio" value="女" v-model="sex">女
          </span>
        </div>
        <div class="userPersonalBrithday">
          <span class="userPersonalBrithdayChild1">生日</span>
          <span class="userPersonalBrithdayChild2" @click="openPicker" >{{dateFormat(new Date(birthday))}}</span>
        </div>
        <div class="userPersonalRegion">
          <span class="userPersonalRegionChild1">地区</span>
          <span class="userPersonalRegionChild2">
             <textarea rows="3" cols="30" v-model="inputUserAddr" placeholder="请输入所在地区" class="inputAddr">

            </textarea>

          </span>
        </div>
      </div>
      <div class="button">
        <div class="enter">
          <span class="enterFont" v-if="userInfo != null" @click="updateAndRegister('/update/person/infomation')">修改</span>
          <span class="enterFont" v-else @click="updateAndRegister('/register/person/infomation')">注册</span>
        </div>
      </div>
    </div>
    <PersonalImgUpload></PersonalImgUpload>
    <mt-datetime-picker
      ref="picker"
      type="date"
      :startDate = startDate
      year-format="{value} 年"
      month-format="{value} 月"
      date-format="{value} 日"
      @confirm="getDate"
      v-model="birthday">
    </mt-datetime-picker>
  </div>
</template>
<script>
  import PersonalImgUpload from '../../components/PersonalImgUpload/PersonalImgUpload'
  import PersonalPublicPopup from '../../components/PersonalPublicPopup/PersonalPublicPopup'
  import {mapState} from 'vuex'
  export default {
    data(){
      return {
        userName:'',
        inputUserDesc:'',
        inputUserAddr:'',
        remaindCount:0,
        allCount:30,
        number:30,
        value:'',
        pwd1:'',
        pwd2:'',
        birthday:'',
        birthday1:'',
        sex:'',
        pwdInput:'',
        showPwd:false,
        establishDate:'',
        startDate:new Date('1949'),
        inputUserName:'',
        userInfo:[]
      }
    },
    computed:{
      ...mapState(['uploadFinish','uploadImg'])
    },
    mounted(){
      this.userInfo = JSON.parse(window.localStorage.getItem('userInfo'))
      if(this.userInfo != null){
        this.inputUserName = this.userInfo.userName
        this.sex = this.userInfo.sex
        this.inputUserDesc = this.userInfo.descript
        this.inputUserAddr = this.userInfo.address
        this.establishDate = this.userInfo.establishDate
        this.birthday = this.userInfo.birthday
      }
      else{
        this.establishDate = this.dateFormat(new Date())
        this.establishDate = this.util.dateFormat(new Date(this.establishDate))
        this.birthday = new Date()
      }
    },
    watch: {
      inputUserDesc (newVal, oldVal) {
        const {remaindCount, allCoun} = this.util.countNumber(newVal, oldVal, this.allCount, this.number)
        this.remaindCount = remaindCount
        this.allCount = allCoun
      },
      uploadFinish(value){
        if(value){
          this.$store.commit('change_uploader', false)
        }
      }
    },
    components: {
      PersonalImgUpload,
      PersonalPublicPopup,
    },

    methods: {
      focu(){
        if(this.pwd2 !== this.pwd1){
          this.showPwd = true
          this.pwdInput = '您第二次输入的密码有误请再次输入'
          this.pwd2 = ''
          setTimeout(()=>{
            this.showPwd = false
          },2000)
        }
      },
      uploaderImg () {
        this.$store.commit('change_uploader', true)
      },
      openPicker () {
        this.$refs.picker.open();
      },

      getDate () {
        this.birthday = this.util.dateFormat(new Date(this.birthday))
        this.birthday1 = this.birthday
      },

      updateAndRegister(url){
        let userId = ''
        if(this.userInfo){
          userId = this.userInfo.userId
        }

        let birthday
        if(this.birthday1 !== ''){
          birthday = this.birthday1
        }else{
          birthday = this.util.dateFormat(this.birthday)
        }
        if(this.inputUserDesc == ''){
          this.inputUserDesc = '这个人很懒什么都没留下'
        }
        console.log(birthday)
        var personEntities = {"userId":userId,"userName":this.userName,"password":this.pwd1,"personImg":this.uploadImg,"establishDate":this.establishDate,"descript":this.inputUserDesc
                              ,"sex":this.sex,"birthday":birthday,"address":this.inputUserAddr}
        if(url === '/register/person/infomation'){
          if(this.pwd2 !== '' && this.pwd1 !== '' ){
            console.log(JSON.stringify(personEntities)+" personEntities 1221")
            this.$store.dispatch('userRegisterAndUpdate',{personEntities,url})
            this.$router.back()
          }else{
            this.showPwd = true
            this.pwdInput = '请输入或核对密码'
            setTimeout(()=>{
              this.showPwd = false
            },2000)
          }
        }else{
          if(this.pwd2 === '' && this.pwd1 !== ''){
            this.showPwd = true
            this.pwdInput = '请输入或核对密码'
            setTimeout(()=>{
              this.showPwd = false
            },2000)
          }else{
            this.$store.dispatch('userRegisterAndUpdate',{personEntities,url})
            this.$router.back()
          }
        }

      },
      dateFormat(value){
        return this.util.dateFormat(value,2)
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .personalEdit
    height 6.67rem
    width 3.75rem
    background-color white
    .header
      width 3.74rem
      height 0.4rem
      display flex
      background-color #F8F8F8
      border 1px solid gainsboro
      .icon-fanhui1
        float left
        margin:0.075rem 0 0 0.05rem
      .editFont
        font-size 0.26rem
        margin auto
    .check
      position absolute
      opacity 0.5
      width 3.75rem
      height 0.3rem
      display flex
      background-color pink
      .pwdInput
        margin auto
        color white
        font-size 0.16rem
        font-weight bold
    .editBody
      display flex
      flex-flow column
      font-size 0.23rem
      margin-top 0.2rem
      .editTop
        width 3.75rem
        .userPersonalImg
          background-color #F8F8F8
          height 0.4rem
          display flex
          border-bottom 1px solid gainsboro
          .userPersonalImgChild1
            margin auto 0 auto 0.05rem
          .userPersonalImgChild2
            margin 0.03rem 0 0 2.4rem
            .imgUser
              width 0.35rem
              height 0.35rem
              margin-left 0.25rem
              border-radius 100%
            .chooseUser
              font-size 0.16rem
        .userPersonalName
          background-color #F8F8F8
          height 0.4rem
          display flex
          border-bottom 1px solid gainsboro
          .userPersonalNameChild1
            margin auto 0 auto 0.05rem
          .inputUserName
            margin auto 0 auto 1.75rem
            width 1.2rem
            height 0.2rem
            font-size 0.18rem
            border: 0;
            outline: none;
            background-color: rgba(0, 0, 0, 0);
          .userPersonalNameChild2
              text-align right
              width 2.8rem
              font-size 0.2rem
              margin auto 0 auto 0
        .userPassword
          display flex
          flex-flow column
          background-color #F8F8F8
          .userPassword1
            height 0.4rem
            border-bottom 1px solid gainsboro
            display flex
            .passwordNameSet
              margin auto 0 auto 0.05rem
            .inputPasswordSetting
              background-color #F8F8F8
              margin auto 0 auto 1.3rem
              font-size 0.18rem
              width 1rem
              height 0.2rem
              border 0
              outline 0
        .userPersonalDesc
          background-color #F8F8F8
          border-bottom 1px solid gainsboro
          display flex
          .userPersonalDescChild1
            margin 0.03rem 0 0 0.05rem
          .userPersonalDescChild2
            margin-left 0.05rem
            .personalDesc
              border 0
              outline 0
              font-size 0.18rem
              margin 0.07rem 0 0 0.1rem
              background #f8f8f8
      .editDown
        width 3.75rem
        margin-top 0.2rem
        .userPersonalSex
          background-color #F8F8F8
          height 0.4rem
          display flex
          border-bottom 1px solid gainsboro
          .userPersonalSexChild1
            margin auto 0 auto 0.05rem
          .userPersonalSexChild2
            text-align right
            width 2.9rem
            font-size 0.2rem
            margin auto 0 auto 0
        .userPersonalBrithday
          background-color #F8F8F8
          height 0.4rem
          display flex
          border-bottom 1px solid gainsboro
          .userPersonalBrithdayChild1
            margin auto 0 auto 0.05rem
          .userPersonalBrithdayChild2
            text-align right
            width 3rem
            font-size 0.2rem
            margin auto 0 auto 0
        .userPersonalRegion
          background-color #F8F8F8
          display flex
          border-bottom 1px solid gainsboro
          .userPersonalRegionChild1
            margin 0.03rem 0 0 0.05rem
          .userPersonalRegionChild2
            text-align right
            width 2.9rem
            font-size 0.2rem
            margin auto 0 auto 0
            .inputAddr
              border 0
              outline 0
              font-size 0.18rem
              margin 0.07rem 0 0 0.1rem
              background #f8f8f8
    .button
      width 3.75rem
      height 1.5rem
      margin-top 0.2rem
      display flex
      background-color #F8F8F8
      .enter
        display flex
        width 2.2rem
        height 0.4rem
        margin auto
        border-radius 0.06rem
        background-color #3366FF
        .enterFont
          color #F8F8F8
          margin auto

</style>
