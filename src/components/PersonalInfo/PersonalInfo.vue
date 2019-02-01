<template>
  <mt-popup class="UserInformation"  v-model="isUserPersonalInfo"  position="bottom" popup-transition="popup-fade">

    <div class="UserInformationHeader">
      <i class="iconfont icon-fanhui1" @click="closeWindow"></i>
      <span class="UserInformationName">大家是哪位</span>
    </div>

    <div class="UserInformationImgAndDesc">
      <div class="UserInformationImgTop">
        <img src="http://img.daimg.com/uploads/allimg/120319/1-12031921534Y24.jpg" alt="" class="UserInformationImg">
        <span class="UserInformationImgOfName">大家是哪位</span>
      </div>
      <div class="UserInformationImgBottom">
        <span class="UserInformationDesc">好的规范化风刀霜剑风刀霜剑风刀霜剑发货的</span>
      </div>
    </div>

    <div class="aboutUserInformationRecord">
      <mt-navbar v-model="selected">
        <mt-tab-item id="1" @click.native="Ajax(1)">发布数</mt-tab-item>
        <mt-tab-item id="2" @click.native="Ajax(2)">评论数</mt-tab-item>
        <mt-tab-item id="3" @click.native="Ajax(3)">收藏数</mt-tab-item>
      </mt-navbar>

      <!-- tab-container -->
      <mt-tab-container v-model="selected">
        <mt-tab-container-item id="1">
          <div>
            <UserPersonalScroll :arr="arr">
              <div slot="content" class="publishSetting">
                <span class="PublishContent">{{PublishContent}}</span>
              </div>
            </UserPersonalScroll>
          </div>
        </mt-tab-container-item>
        <mt-tab-container-item id="2">
          <div>
            <UserPersonalScroll :arr="arr" ref="child"></UserPersonalScroll>
          </div>
        </mt-tab-container-item>
        <mt-tab-container-item id="3">
          <div>
            <UserPersonalScroll :arr="arr">
              <div slot="content" class="collectionSetting">
                <span class="collectionTitleSetting">{{collectionTitle}}</span>
                <span class="collectionDateSetting">{{collectionDate}}</span>
              </div>
            </UserPersonalScroll>
          </div>
        </mt-tab-container-item>
      </mt-tab-container>
    </div>
  </mt-popup>
</template>

<script>
  import UserPersonalScroll from '../UserPersonalScroll/UserPersonalScroll'
  export default {
    data(){
      return {
        selected:'1',
        arr:[],
        PublishContent:'后端发送规划的共色股份减肥的舒适度好好地方妇姑荷箪后端发送规划的共色股份减肥的舒适度好好地方妇姑荷箪食',
        collectionTitle:'集合可风刀霜剑护发素叠为...',
        collectionDate:'2019-01-12'
      }
    },
    computed:{
      isUserPersonalInfo:{
        get(){
          return this.$store.state.isUserPersonalInfo
        },
        set(value){
          this.$store.state.isUserPersonalInfo = value
        }
      }

    },
    components:{
      UserPersonalScroll
    },
    mounted(){
      this.Ajax(1)
    },
    methods:{
      Ajax(val){
        this.arr = []
        setTimeout(() =>{
          if(val ===1)
            this.arr =['1','2','3','4','5','6','7','1','1','2','3','4','5','6','7','1','1','2','3','4','5','6','7','1','2','3','4','5','6','7','1','3','4','5','6','7']

          else if(val ===2)
            this.arr =['1','2','3','4','5','6','7','1','1','2','3','4','5','6','7','15','6','7','1','1','2','3','4','5','6','7','1','1','2','3','4','5','6','7','15']
          else
            this.arr =['1','2','3','4','5','6','7','111','11111','2','3','4','5','6','7','1','1','2','3','4','5','6','7','1','1','2','3','4','5','6','7','1','1','2','3','4','5','6','7','15']
        },1000)
      },
      closeWindow(){
        this.$store.commit('change_personal',false)
      }
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
    .aboutUserInformationRecord
      width 3.75rem
      border-bottom 1px solid gainsboro
      .publishSetting
        display flex
        flex-flow column
        width 3.2rem
        margin 0.05rem auto 0.1rem auto
        border-bottom 1px solid gainsboro
      .collectionSetting
        display flex
        width 3.2rem
        margin auto
        .collectionTitleSetting
          width 2rem
        .collectionDateSetting
          font-size 0.13rem
          margin-left 0.2rem
</style>

