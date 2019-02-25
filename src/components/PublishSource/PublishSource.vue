<template>
  <div class="publish" v-if="isShowPublishSource">
    <div class="header">
      <i class="iconfont icon-fanhui1" @click="openPublishSource(false)"></i>
    </div>
    <div class="content">
      <div>
        <textarea class="publishContent" v-model="inputScenicContent" maxlength="100">
        </textarea>
        <span class="inputScenicContext" >{{remaindCount}}/{{allCount}}</span>
      </div>

      <div class="uploadPictureAndVideo">
        <mt-navbar v-model="selected">
          <mt-tab-item id="1" >添加图片</mt-tab-item>

        </mt-navbar>

        <mt-tab-container v-model="selected">
          <mt-tab-container-item id="1">
            <div class="upload">
              <uploader url="http://cn.ynhdkc.com/admin/uploadapiv2/uploadpics" maxLength="9" isShow="0">

              </uploader>
            </div>
          </mt-tab-container-item>
        </mt-tab-container>
      </div>
      <div class="addSourcesUrl">
        <span class="inputName">URL:</span>
        <input type="text" class="inputUrl" placeholder="请输入正确的url地址">
      </div>
      <div class="addtag">
        <div class="chooseSort">
          <span class="sort">类别:</span>
          <table class="alreadyChoose">
            <tr v-for="(scenicSortArr,index) in alreadyChooseSorts" :key="index" >
              <td v-for="(scenic,index) in scenicSortArr" :key="index">
                公园
              </td>
            </tr>
          </table>
        </div>
        <div class="divTable">
          <table>
            <tr v-for="(scenicSortArr,index) in scenicSortArrs" :key="index" >
              <td v-for="(scenic,index) in scenicSortArr" :key="index">
                <mt-badge type="primary" @click.native="chooseSorts(this)">公园</mt-badge>
              </td>
            </tr>
          </table>
        </div>
      </div>
      <div class="publishBtn">
        <button class="cancel"  @click="showPublishScenic(false)">取消</button>
        <button class="publish" @click="commitPublish()">发布</button>
      </div>
    </div>

  </div>
</template>

<script>
  import {mapState} from 'vuex'
  export default {
    data(){
      return {
        isShowPublishSource:false,
        selected:'1',
        imgs: [],
        remaindCount:0,
        allCount:100,
        inputScenicContent:'',
        number:100,
        scenicSort:['1','2','3','4','5','6','7','8'],
      }
    },
    computed:{
      ...mapState({
        imgStatus: state => state.imgstore.img_status,
        imgPaths: state => state.imgstore.img_paths
      }),
      scenicSortArrs () {
        const {scenicSort} = this
        return this.util.splitArr(scenicSort,4)
      },
      alreadyChooseSorts(){

      }
    },
    watch:{
      imgStatus () {
        if (this.imgStatus === 'finished') {
          this.submit()
        }
      },
      inputScenicContent(newVal,oldVal){
        const {remaindCount,allCoun} = this.util.countNumber(newVal,oldVal,this.allCount,this.number)
        this.remaindCount = remaindCount
        this.allCount = allCoun
      },

    },
    methods:{
      showPublishScenic(value){
        this.isShowPublishScenic = value
      },
      upload () {
        this.$store.commit('set_img_status', 'uploading')
      },
      submit () {
        let values = []
        for (let key of this.imgPaths) {
          values.push(key)
        }
        this.imgs = values
        console.log(this.imgs)
      },
      chooseSorts(value){
        console.log(value)
      },
      openPublishSource(value){
        this.isShowPublishSource = value
      },
      commitPublish(){

      }
    }

  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .publish
    height 7.3rem
    background-color white
    z-index 100
    position absolute
  .header
    width 3.75rem
    height 0.4rem
    background-color #3366FF
    .icon-fanhui1
      float left
      font-size 0.26rem
      color #F8F8F8
      margin 0.08rem 0 0 0.15rem
  .content
    display flex
    flex-flow column
    .publishContent
      border 1px solid rebeccapurple
      margin 0.1rem 0 0 0.207rem
      width 3.3rem
      height 1.5rem
    .inputScenicContext
      position absolute
      margin -0.5rem 0 0 3.1rem
      font-size 0.11rem
    .uploadPictureAndVideo
      width 3.3rem
      border 1px solid blue
      margin 0 0 0 0.207rem
    .addSourcesUrl
      width 3.3rem
      height 0.3rem
      display flex
      margin 0.2rem auto 0 auto
      border 1px solid blue
      .inputName
        font-size 0.18rem
        margin auto 0 auto 0.1rem
      .inputUrl
        width 2.7rem
        height 0.238rem
        border none
        outline none
        margin auto 0 auto 0.1rem
    .addtag
      width 3.3rem
      border 1px solid blue
      display flex
      flex-flow column
      margin 0.2rem 0 0 0.207rem
      font-size 0.16rem
      .chooseSort
        background-color gainsboro
        font-size 0.18rem
        display flex
        .sort
          margin 0.04rem 0 0 0.1rem
        .alreadyChoose
          margin 0 0 0 0.28rem
      .divTable
        margin 0.05rem auto 0.05rem auto

  .publishBtn
    display flex
    .cancel
      settingBtn()
      background-color red
      margin-left 1.8rem
    .publish
      settingBtn()
      margin-left 2.6rem

  .upload
    width 3.3rem
    height 1.2rem
  .btn
    width: 3.75rem
    height: 1em
    background-color: green
    color: #fff
    display: flex
    font-size: 0.16rem
    justify-content: center
    align-items: center
</style>
