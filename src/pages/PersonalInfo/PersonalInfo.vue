<template>
  <div class="UserInformation">

    <div class="UserInformationHeader">
      <i class="iconfont icon-fanhui1" @click="$router.back()"></i>
    </div>

    <div class="UserInformationImgAndDesc">
      <div class="UserInformationImgTop">
        <img :src="userInfo.personImg" alt="" class="UserInformationImg">
        <span class="UserInformationImgOfName">{{userInfo.userName}}</span>
      </div>
      <div class="UserInformationImgBottom">
        <span class="UserInformationDesc">{{userInfo.descript}}</span>
      </div>
    </div>

    <UserPersonalScroll></UserPersonalScroll>
  </div>
</template>

<script>
  import UserPersonalScroll from '../../components/UserPersonalScroll/UserPersonalScroll'
  export default {
    data(){
      return {
        userInfo:[]
      }
    },

    components:{
      UserPersonalScroll
    },
    mounted(){
      this.userInfo = JSON.parse(window.localStorage.getItem('userInfo'))

    },
    methods:{

    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .UserInformation
    display flex
    flex-flow column
    height 6.67rem
    .UserInformationHeader
      width 3.75rem
      height 0.4rem
      background-color #3366FF
      display flex
      .icon-fanhui1
        font-size 0.2rem
        color #F8F8F8
        margin auto 0 auto 0.1rem
      .UserInformationName
        font-size 0.2rem
        font-size 0.2rem
        color #F8F8F8
        margin auto 0 auto 1.1rem
    .UserInformationImgAndDesc
      width 3.75rem
      display flex
      flex-flow column
      border-bottom 1px solid gainsboro
      .UserInformationImgTop
        display flex
        .UserInformationImg
          width 0.8rem
          height 0.8rem
          margin 0.1rem 0 0 0.1rem
          border-radius 100%
        .UserInformationImgOfName
          font-size 0.18rem
          margin auto 0 auto 0.1rem
      .UserInformationImgBottom
        display flex
        .UserInformationDesc
          font-size 0.11rem
          margin -0.1rem 0 0.05rem 1rem

</style>

