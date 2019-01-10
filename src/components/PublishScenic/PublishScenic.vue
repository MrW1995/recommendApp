<template>
  <mt-popup class="publish"  v-model="isShowPublishScenic"  position="bottom">
    <div class="header">
      <i class="iconfont icon-fanhui1" @click="closeWindow"></i>
    </div>
    <div class="content">
      <div>
        <textarea class="publishContent">
        </textarea>
      </div>
      <div class="uploadPictureAndVideo">
        <mt-navbar v-model="selected">
          <mt-tab-item id="1" >添加图片</mt-tab-item>
          <mt-tab-item id="2">添加视频</mt-tab-item>
        </mt-navbar>

        <mt-tab-container v-model="selected">
          <mt-tab-container-item id="1">
            <div class="upload">
              <uploader url="http://cn.ynhdkc.com/admin/uploadapiv2/uploadpics" maxLength="9" isShow="0">

              </uploader>
              <!--<div class="btn" @click="upload">-->
                <!--上传-->
              <!--</div>-->
            </div>
          </mt-tab-container-item>
          <mt-tab-container-item id="2">
            <div class="upload">

            </div>
          </mt-tab-container-item>
        </mt-tab-container>
      </div>
      <div class="addtag">
        11
      </div>
    </div>

  </mt-popup>
</template>

<script>
  import {mapState} from 'vuex'
  export default {
    data(){
      return {
        selected:'1',
        imgs: [],
      }
    },
    computed:{
      ...mapState({
        imgStatus: state => state.imgstore.img_status,
        imgPaths: state => state.imgstore.img_paths
      }),
     isShowPublishScenic:{
       get () {
         return this.$store.state.isShowPublishScenic
       },
       set (value) {
         this.$store.commit('change_publish', value)
       }
      }
    },
    watch:{
      imgStatus () {
        if (this.imgStatus === 'finished') {
          this.submit()
        }
      }
    },
    methods:{
      closeWindow(){
        this.$store.commit('change_publish',false)
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
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .publish
    height 6.67rem
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
    .uploadPictureAndVideo
      width 3.3rem
      border 1px solid blue
      margin 0rem 0 0 0.207rem
    /*background-color rebeccapurple*/
    .addtag
      width 3.3rem
      border 1px solid blue
      background-color palegoldenrod
      margin 0.1rem 0 0 0.207rem
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
