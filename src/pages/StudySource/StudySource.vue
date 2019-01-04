<template>
  <div>
    <div class="header">
      <i class="iconfont icon-fanhui1"></i>
    </div>
    <div class="content">
      <div>
        <textarea class="publishContent">
        </textarea>
      </div>
      <div class="uploadPictureAndVideo">
        <mt-navbar v-model="selected">
          <mt-tab-item id="1" >选项一</mt-tab-item>
          <mt-tab-item id="2">选项二</mt-tab-item>
        </mt-navbar>

        <mt-tab-container v-model="selected">
          <mt-tab-container-item id="1">
           <div class="upload">

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
  </div>

</template>

<script>
  export default {
    data(){
      return {
        selected:'1'
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
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
    height 1.686rem
    background-color pink

</style>
