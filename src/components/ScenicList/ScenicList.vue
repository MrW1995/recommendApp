<template>
      <div>
        <scroll class="wrapper" ref="listContent" :flagNum=2 :listenScroll="true" :pullup="true" :data="scenics" :pulldown="true">
          <ul>
            <div class="pullUp" v-if="pullUpLoading">
              <div class="finishLoad" v-if="showFinish">
                <span class="finishFont" v-if="loadingCount>0">以为你更新了{{loadingCount}}条数据</span>
                <span class="finishFont" v-else>当前数据为最新数据</span>
              </div>
            </div>
              <li class="li-wrapper" v-for="(item,index) in scenics" :key="index">
                <div class="top-box">
                  <div class="left-box" :class="{noImg:item.publishImg ===''}" @click="scenicDetail(index)">
                    <span class="li-title" :class="{contentMany:item.publishTitle.length>44}">{{item.publishTitle}}</span>
                  </div>
                  <div class="right-img" v-if="item.publishTitle.length<=44 && item.publishTitle.length > 20">
                    <img class="li-picture" :src="item.publishImgArr[0]">
                  </div>
                </div>
                <div class="midden-box-img" v-if="item.publishTitle.length>44 && item.img !=='' ">
                  <img class="img1" :src="item.publishImgArr[0]">
                  <img class="img2" :src="item.publishImgArr[1]">
                  <img class="img3" :src="item.publishImgArr[2]">
                </div>
                <div class="bottom-box" :class="{dateTime:item.publishDateTime.length<=5}" >
                  <span class="user-name" :class="{usernamechild:item.user.userName.length<3}">{{item.user.userName}}</span>
                  <span class="comment-title">{{item.allComment}}评论</span>
                  <span class="publish-date">{{dateFormat(new Date(item.publishDateTime))}}</span>
                </div>
              </li>
              <div class="pullDown" v-if="pullDownLoading">
                <div class="finishLoad" v-if="showFinish">
                  <span class="finishFont" v-if="loadingCount>0">以为你加载了{{loadingCount}}条数据</span>
                  <span class="finishFont" v-else>已经到底啦</span>
                </div>
              </div>
          </ul>
        </scroll>
      </div>
</template>

<script>
  import {mapState,mapGetters} from 'vuex'
  import scroll from '../../components/Sroll/Scroll'
  export default {
    data(){
      return {
        showFinish:false
      }
    },
    computed:{
        ...mapState(['scenics','loadingCount','pullUpLoading','pullDownLoading','allPages']),
    },
    components:{
      scroll,
    },
    watch:{
      pullUpLoading(value){
        if(value == 1){
          this.$store.commit('change_date',this.util.dateFormat(new Date())+" "+this.util.dateTimeFormat(new Date()))
          this.$store.commit('change_pagenum',0)
          this.$store.commit('change_loding','new')
        }
      },
      pullDownLoading(value){
        const allPages = this.allPages
        const pageNum = parseInt(window.sessionStorage.getItem('pageNum'))
        if(value == 1 && allPages !== pageNum){
          this.$store.commit('change_loding','加载')
        }
      },
      scenics(value){
        this.$store.commit("change_uploading",0)
        this.$store.commit('change_downloading',0)
        if(value.length !== 6)
          this.showFinish = true
        setTimeout(()=>{
          this.showFinish = false
        },2000)
        this.$store.commit('change_loding','1')
      },
      loadingCount(value){
        if(value === 0){
          this.$store.commit('change_loading_count',-1)
          this.$store.commit("change_uploading",0)
          this.$store.commit('change_downloading',0)
          if(value.length !== 6)
            this.showFinish = true
          setTimeout(()=>{
            this.showFinish = false
          },2000)
          this.$store.commit('change_loding','1')
        }
      }
    },
    mounted() {
      setTimeout(() =>{
        if(!this.scroll){

        }else {
          this.$refs.listContent.$emit('refresh')
        }
      },20)
    },
    methods:{
      dateFormat(value){
        return this.util.dateFormat(value,1)
      },
      scenicDetail(index){
        this.$store.commit('scenic_detail',index)
        this.$router.push('/scenicDetail')
      },
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  ul,li
    ulAndLi()
  .pullUp
    settingLoadingPic()
    background-image: url("../../assets/imgs/loading_1.gif");
  .finishLoad
    width 3.75rem
    height 0.3rem
    display flex
    background-color #666666
    opacity 0.5
    .finishFont
      margin auto
      font-weight bold
      font-size 0.16rem
      color white
  .pullDown
    settingLoadingPic()
    background-image: url("../../assets/imgs/loading_2.gif");
  .wrapper
    width: 3.75rem
    position:absolute
    top: 0.83rem
    bottom: 0.57rem
    overflow: hidden
    z-index: 1
    background-color: white
    .li-wrapper
      display:flex
      flex-flow: column
      position:relative
      width:3.75rem
      background-color white
      border-bottom 1px solid gainsboro
      .top-box
        width 3.75rem
        display:flex
        .left-box
          margin 0.05rem 0 0 0.13rem
          &.noImg
            margin 0.05rem 0 0.05rem 0.13rem
          .li-title
            display:inline-block
            width: 2.5rem
            margin: 0.2rem 0 0.1rem 0.05rem
            &.contentMany
              width 3.3rem
              margin 0 0 0.03rem 0.13rem
              overflow:hidden
              text-overflow:ellipsis
              display:-webkit-box
              -webkit-box-orient:vertical
              -webkit-line-clamp:3
        .right-img
          margin 0.08rem 0.15rem 0.01rem 0
          .li-picture
            margin 0 0 0 0
            width: 0.9rem
            height: 0.9rem
      .midden-box-img
          display: flex
          width:3rem
          margin: 0.05rem auto 0.09rem auto
          .img1,.img2,.img3
            width:0.9rem
            height: 0.9 rem
          .img2
            margin-left 0.1rem
          .img3
            margin-left 0.1rem
      .midden-box-video
        width:3rem
        height:1.4rem
        background-color darkgray
        margin: 0 auto 0.05rem auto
        .video
          width:100%
          height:100%
      .bottom-box
        display:flex
        font-size 0.13rem
        margin: 0 0 0.05rem 0.7rem
        &.dateTime
          margin-left 1rem
        .user-name
          width:0.50rem
          display: inline-block
          overflow:hidden
          white-space:nowrap
          text-overflow:ellipsis
          &.usernamechild
            width 0.3rem
            margin-left 0.3rem
        .comment-title
          float left
          margin-left:0.4rem
        .publish-date
          margin-left 0.5rem


</style>
