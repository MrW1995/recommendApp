<template>
  <mt-popup class="isShowSourcesDetail" v-model="isShowSourcesDetail" position="bottom" popup-transition="popup-fade">
    <div class="SourceHeader">
      <i class="iconfont icon-fanhui1" @click="closeWindow"></i>
      <span class="sourceDetailTitle">资料详情</span>
    </div>

    <PublishInfo username="张三" publishDate="2019-01-10" :publishText="publishText" :arrImg="arrImg" commentCount="27"></PublishInfo>
    <SourcesUserReply></SourcesUserReply>
  </mt-popup>
</template>

<script>
  import PublishInfo from '../../components/PublishInfo/PublishInfo'
  import Scroll from '../../components/Sroll/Scroll'
  import SourcesUserReply from '../SourcesUserReply/SourcesUserReply'
  export default {
    data(){
      return{
        publishText:'规范化的说法和服务有多的生产线额滴神而奋斗是一份热规范化的说法和服务有多少件羽绒服有多少运费的生产线额滴神而奋斗是一份热',
        arrImg:['http://img.daimg.com/uploads/allimg/120319/1-12031921534Y24.jpg',
          'http://img.daimg.com/uploads/allimg/120319/1-12031921534Y24.jpg',
          'http://img.daimg.com/uploads/allimg/120319/1-12031921534Y24.jpg',
          'http://img.daimg.com/uploads/allimg/120319/1-12031921534Y24.jpg',
          'http://img.daimg.com/uploads/allimg/120319/1-12031921534Y24.jpg',
          'http://img.daimg.com/uploads/allimg/120319/1-12031921534Y24.jpg',
          'http://img.daimg.com/uploads/allimg/120319/1-12031921534Y24.jpg',
          'http://img.daimg.com/uploads/allimg/120319/1-12031921534Y24.jpg',
          'http://img.daimg.com/uploads/allimg/120319/1-12031921534Y24.jpg'],
        arr:['1']
      }
    },
    computed:{
      isShowSourcesDetail:{
        get(){
          return this.$store.state.isShowSourcesDetail
        },
        set(value){
          this.$store.state.isShowSourcesDetail = value
        }
      }
    },
    mounted(){

    },
    components:{
      PublishInfo,
      Scroll,
      SourcesUserReply
    },
    methods:{
      closeWindow(){
        this.$store.commit('change_sources',false)
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
.isShowSourcesDetail
  .SourceHeader
    width 3.75rem
    height 0.4rem
    display flex
    color #F8F8F8
    font-size 0.23rem
    background-color #3366FF
    .icon-fanhui1
      font-size 0.26rem
      margin 0.08rem 0 0 0.1rem
    .sourceDetailTitle
      font-weight bold
      margin 0.06rem 0 0 1.1rem
</style>
