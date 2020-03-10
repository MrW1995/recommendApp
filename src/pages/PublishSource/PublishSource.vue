<template>
  <div class="publish">
    <div class="header">
      <i class="iconfont icon-fanhui1" @click="openPublishSource(false)"></i>
    </div>
    <div class="content">
      <div>
        <textarea class="publishContent" placeholder="请输入你将要发布的内容 字数限时为100" v-model="inputScenicContent" maxlength="100">
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
              <uploader url="#" maxLength="9" isShow="0">

              </uploader>
            </div>
          </mt-tab-container-item>
        </mt-tab-container>
      </div>
      <div class="addSourcesUrl">
        <div class="addUrls">
          <span class="inputName">URL:</span>
          <input type="text" class="inputUrl" v-model="inputUrls" placeholder="请输入正确的 百度网盘链接">
        </div>
        <div class="addUrlsPwd">
          <span class="inputNamePwd">密码:</span>
          <input type="text" class="inputUrlPwd" v-model="inputUrlsPwd" placeholder="如果百度网盘有密码请输入密码">
        </div>
      </div>
      <div class="addtag">
        <div class="chooseSort">
          <span class="sort">类别:</span>
          <span class="alreadyChoose">{{chooseSort}}</span>
        </div>
        <div class="divTable">
          <table>
            <tr v-for="(scenicSortArr,index) in scenicSortArrs" :key="index" >
              <td v-for="(scenic,index) in scenicSortArr" :key="index">
                <mt-badge type="primary" @click.native="chooseSorts($event)">{{scenic}}</mt-badge>
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
  import { MessageBox } from 'mint-ui'
  export default {
    data(){
      return {
        isShowPublishSource:false,
        selected:'1',
        imgs: '',
        remaindCount:0,
        allCount:100,
        inputScenicContent:'',
        inputUrls:'',
        inputUrlsPwd:'',
        chooseSort:'',
        number:100,
        flagimg:false,
        url:'/get/study/sort'
      }
    },
    computed:{
      ...mapState(['img_upload_cache','img_upload_flag','uploadImgs','codeFlag','sortList']),
      scenicSortArrs () {
        return this.util.splitArr(this.sortList,4)
      },
    },
    watch:{
      img_upload_flag(newVal,oldVal){
        let arrs = [].concat(this.img_upload_cache)
        if(oldVal>0){
          for(let i = 0;i<oldVal;i++){
           arrs.splice(i,1)
          }
        }
        let time = 1000
        if (newVal>=3 && newVal <=6){
          time = 3000
        }else{
          time = 4000
        }
        if(newVal>oldVal){
          setTimeout(()=>{
            this.upload(arrs)
          },time)
        } else{

        }
      },
      inputScenicContent(newVal,oldVal){
        const {remaindCount,allCoun} = this.util.countNumber(newVal,oldVal,this.allCount,this.number)
        this.remaindCount = remaindCount
        this.allCount = allCoun
      },
      uploadImgs(value){
        if(value != ''){
          let resultVal = JSON.stringify(value).split(" ")
          this.imgs = ''
          for(let i = 0; i < resultVal.length; i++){
            this.imgs += resultVal[i] + " "
          }
          this.flagimg =true
        }else {

        }

      },
      codeFlag(value){
        this.$router.back()
        MessageBox('提示', '操作成功');
      },
    },
    mounted(){
      let url = this.url
      let num = 0
      this.$store.commit("clear_arrimgs")
      this.$store.dispatch("getSort",{url,num})
    },
    methods:{
      upload (arr) {
        this.$store.dispatch('uploadImg',arr)
      },
      showPublishScenic(value){
        this.isShowPublishSource = value
      },
      chooseSorts(value){
        let val = value.target.innerHTML
        this.chooseSort = val
      },
      openPublishSource(value){
        this.$router.back()
      },
      commitPublish(){
        if(this.inputScenicContent == ''){
          MessageBox('提示', '请输入文章标题');
          return
        }
        let dateTime = this.util.dateFormat(new Date())+" "+this.util.dateTimeFormat(new Date())
        let userInfo = window.localStorage.getItem("userInfo")
        let userId = JSON.parse(userInfo).userId
        let imgs = ''
        if(this.flagimg){
          imgs  = JSON.parse(this.imgs)
        }else{

        }
        let studySource = {"studyContent":this.inputScenicContent,"studyImgs":imgs,"studyUrls":this.inputUrls,
                            "studyUrlsPwd":this.inputUrlsPwd,"studySorts":this.chooseSort,"studyUserId":userId,"studyDateTime":dateTime}
        console.log(studySource)
        this.$store.dispatch('addStudySource',studySource)
      }
    }

  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .publish
    height 6.67rem
    background-color white
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
      height 1.1rem
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
      height 0.6rem
      display flex
      flex-flow column
      margin 0.2rem auto 0 auto
      border 1px solid blue
      .addUrls
        display flex
        .inputName
          font-size 0.18rem
          margin auto 0 auto 0.1rem
        .inputUrl
          width 2.7rem
          height 0.238rem
          border none
          outline none
          margin auto 0 auto 0.1rem
      .addUrlsPwd
        display flex
        .inputNamePwd
          font-size 0.18rem
          margin auto 0 auto 0.1rem
        .inputUrlPwd
          width 2.5rem
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
          margin 0.05rem 0 0.02rem 0.1rem
        .alreadyChoose
          margin 0.05rem 0 0.02rem 0.1rem
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
  .btn
    display flex
    width:0.53rem
    height: 1.2em
    margin 0 0 0.1rem 2.7rem
    background-color: green
    color: #fff
    display: flex
    font-size: 0.16rem
    justify-content: center
    align-items: center
</style>
