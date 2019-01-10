<template>
  <div class="personalEdit">
    <div class="header" @click="$router.back()">
      <i class="iconfont icon-fanhui1" ></i>
      <span class="editFont">编辑资料</span>
    </div>
    <div class="editBody">
      <div class="editTop">
        <div class="userPersonalImg">
          <span class="userPersonalImgChild1">头像</span>
          <span class="userPersonalImgChild2">
            <img @click="uploaderImg" src="http://wx3.sinaimg.cn/large/006nLajtly1fkegnmnwuxj30dw0dw408.jpg" alt="" class="imgUser">
          </span>
        </div>
        <div class="userPersonalName">
          <span class="userPersonalNameChild1">用户名</span>
          <span class="userPersonalNameChild2" :class="{userPersonalNameChild3:userName.length>3}">{{userName}}</span>
        </div>
        <div class="userPersonalDesc">
          <span class="userPersonalDescChild1">介绍</span>
          <span class="userPersonalDescChild2"></span>
        </div>
      </div>
      <div class="editDown">
        <div class="userPersonalSex">
          <span class="userPersonalSexChild1">性别</span>
          <span class="userPersonalSexChild2">男</span>
        </div>
        <div class="userPersonalBrithday">
          <span class="userPersonalBrithdayChild1">生日</span>
          <span class="userPersonalBrithdayChild2" @click="openPicker">{{birthday}}</span>
        </div>
        <div class="userPersonalRegion">
          <span class="userPersonalRegionChild1">地区</span>
          <span class="userPersonalRegionChild2">

          </span>
        </div>
      </div>
    </div>
    <PersonalImgUpload></PersonalImgUpload>
    <PersonalPublicPopup>
      <div class="updateUsernameSetting" slot="to">
        <input type="text" class="updateUsername" placeholder="请输入更改的用户名">
        <input type="button" class="btn1" value="确认">
        <input type="button" class="btn2" value="取消">
      </div>
    </PersonalPublicPopup>
    <PersonalPublicPopup>
      <div class="UpdateUserDesc" slot="to">
        <textarea class="inputDesc" v-model="inputUserDesc"></textarea>
        <span class="statisticsCount">{{remaindCount}}/{{allCount}}</span>
        <div class="btnMove">
          <input type="button" class="btn1" value="确认">
          <input type="button" class="btn2" value="取消">
        </div>
      </div>
    </PersonalPublicPopup>
    <PersonalPublicPopup>
      <div slot="to">
        <mt-radio title="选择列表" v-model="value" :options="['男','女']">
        </mt-radio>
      </div>
    </PersonalPublicPopup>

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
  import VDistpicker from 'v-distpicker'
  import PersonalImgUpload from '../../components/PersonalImgUpload/PersonalImgUpload'
  import PersonalPublicPopup from '../../components/PersonalPublicPopup/PersonalPublicPopup'
  import util from '../../Utils/Utils'
  export default {
    data(){
      return {
        userName:'吴建军',
        inputUserDesc:'',
        remaindCount:0,
        allCount:30,
        number:30,
        value:'',
        birthday:'2019/01/09',
        startDate:new Date('1949'),

      }
    },

    watch:{
      inputUserDesc(newVal,oldVal) {
        const {remaindCount,allCoun} = this.util.countNumber(newVal,oldVal,this.allCount,this.number)
        this.remaindCount = remaindCount
        this.allCount = allCoun
      }
    },
    components:{
      VDistpicker,
      PersonalImgUpload,
      PersonalPublicPopup,
    },
    methods:{
      uploaderImg(){
        this.$store.commit('change_uploader',true)
      },
      openPicker() {
        this.$refs.picker.open();
      },
      getDate(){
        const date = this.util.dateFormat(this.birthday)
        this.birthday = date
      },
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .personalEdit
    height 7.67rem
    width 3.75rem
    background-color gainsboro
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
          border-top 1px solid gray
          border-bottom 1px solid gainsboro
          .userPersonalImgChild1
            margin auto 0 auto 0.05rem
          .userPersonalImgChild2
            margin 0.03rem 0 0 2.75rem
            .imgUser
              width 0.35rem
              height 0.35rem
              margin 0
              border-radius 100%
        .userPersonalName
          background-color #F8F8F8
          height 0.4rem
          display flex
          border-bottom 1px solid gainsboro
          .userPersonalNameChild1
            margin auto 0 auto 0.05rem
          .userPersonalNameChild2
            text-align right
            width 2.8rem
            font-size 0.2rem
            margin auto 0 auto 0
        .userPersonalDesc
          background-color #F8F8F8
          border-bottom 1px solid gainsboro
          height 0.4rem
          display flex
          .userPersonalDescChild1
            margin auto 0 auto 0.05rem
          .userPersonalDescChild2
            margin-left 0.05rem
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
          height 0.4rem
          display flex
          border-bottom 1px solid gainsboro
          .userPersonalRegionChild1
            margin auto 0 auto 0.05rem
          .userPersonalRegionChild2
            text-align right
            width 2.9rem
            font-size 0.2rem
            margin auto 0 auto 0



</style>
