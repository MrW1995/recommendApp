<template>
  <mt-popup v-model="isShowUploaderImg" class="PersonalImgUpload" popup-transition="popup-fade">
    <div class="header">
      <i @click="closeUploader" class="iconfont icon-guanbi"></i>
      <span class="UploaderImg">图片上传</span>

    </div>
    <div class="uploaderMove">
      <uploader url="#"  maxLength="1" isShow="0"></uploader>

    </div>
  </mt-popup>
</template>

<script>
  import {mapState} from 'vuex'
  export default {
    data(){
      return {
        popupVisible:true
      }
    },
    computed:{
      ...mapState(['img_upload_cache','img_upload_flag']),
      isShowUploaderImg:{
        get(){
          return this.$store.state.isShowUploaderImg
        },
        set(value){
          this.$store.commit('change_uploader',value)
        }
      }
    },
    watch:{
      img_upload_flag(newVal,oldVal) {
        if (newVal > oldVal) {
          setTimeout(() => {
            this.upload(this.img_upload_cache)
          }, 500)
        } else {
        }
      }
    },
    methods:{
      closeUploader(){
        this.$store.commit('change_uploader',false)
      },
      upload (arr) {
        this.$store.dispatch('uploadImg',arr)
      },

    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .PersonalImgUpload
    width 2rem
    height 1.5rem
    display flex
    flex-flow column
    .header
      width 2rem
      height 0.3rem
      font-size 0.16rem
      display flex
      background-color #7e8c8d
      .icon-guanbi
        font-size 0.18rem
        margin auto 0 auto 0.05rem
      .UploaderImg
        margin auto
    .uploaderMove
      margin auto

  .btn
    margin-left 1.4rem
    width: 0.5rem;
    background-color: #3366FF
    color: #fff
    font-size 0.18rem
    display: flex
    justify-content: center
    align-items: center

</style>
