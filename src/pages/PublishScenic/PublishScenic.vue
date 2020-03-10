<template>
  <div class="publish" >
    <div class="header">
      <i class="iconfont icon-fanhui1" @click="showPublishScenic"></i>
    </div>
    <div class="content">
      <div>
        <textarea class="publishContent" v-model="inputScenicContent" maxlength="100" placeholder="请输入即将发表的文章标题">
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
              <uploader url="#"  maxLength="9" isShow="0">

              </uploader>
            </div>
          </mt-tab-container-item>
        </mt-tab-container>
      </div>
      <div class="addtag">
        <div class="chooseSort">
          <span class="sort">类别:
            <span v-if="!sortListResult">最多可选择三个类别</span>
            <span>{{sortListResult}}</span>
          </span>
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
                <mt-badge :type="types" @click.native="chooseSorts($event)">{{scenic}}</mt-badge>
              </td>
            </tr>
          </table>
        </div>
      </div>
      <div class="address">
        <span class="addressName">地址:</span>
        <span class="addressContext"><input class="inputAddress" placeholder="请输入地址" v-model="addressContext"></span>
      </div>
      <div class="ticket">
        <span class="ticketName">是否免费:</span>
        <input type="radio" class="free" name="radio" v-model="isFree" value="是">是
        <input type="radio" class="free" name="radio" v-model="isFree" value="否">否
      </div>
      <div class="publishBtn">
        <button class="cancel"  @click="showPublishScenic(false)">取消</button>
        <button class="publish" @click="publishContext">发布</button>
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
        isShowPublishScenic:false,
        selected:'1',
        imgs: '',
        remaindCount:0,
        allCount:100,
        inputScenicContent:'',
        number:100,
        sortListResult:'',
        isFree:'是',
        addressContext:'',
        sort:[],
        flagimg:false,
        types:'primary',
        url:'/get/travel/sort'
      }
    },
    computed:{
      ...mapState(['img_upload_cache','img_upload_flag','img_paths','uploadImgs','sortList','codeFlag']),
      scenicSortArrs () {
        return this.util.splitArr(this.sortList,4)
      },
      alreadyChooseSorts(){

      }
    },
    mounted(){
      let url = this.url
      let num = 0
      this.$store.commit("clear_arrimgs")
      this.$store.dispatch("getSort",{url,num})
    },
    watch:{
      uploadImgs(value){
       if(value != ''){
         let resultVal = JSON.stringify(value).split(" ")
         this.imgs = ''
         for(let i = 0; i < resultVal.length; i++){
           this.imgs += resultVal[i] + " "
         }
         this.flagimg = true
       }
       else{

       }
      },
      codeFlag(value){
        this.$router.back()
        MessageBox('提示', '操作成功');
      },
      img_upload_flag(newVal,oldVal) {
        let arrs = [].concat(this.img_upload_cache)
        if (oldVal > 0) {
          for (let i = 0; i < oldVal; i++) {
            arrs.splice(i, 1)
          }
        }
        let time = 1000
        if (newVal >= 3 && newVal <= 6) {
          time = 3000
        } else {
          time = 4000
        }
        if (newVal > oldVal) {

          setTimeout(() => {
            this.upload(arrs)
          }, time)
        } else {

        }
      },
      inputScenicContent(newVal,oldVal){
        const {remaindCount,allCoun} = this.util.countNumber(newVal,oldVal,this.allCount,this.number)
        this.remaindCount = remaindCount
        this.allCount = allCoun
      },

    },
    methods:{
      showPublishScenic(){
        this.$router.back()
      },
      upload (arr) {
        this.$store.dispatch('uploadImg',arr)
      },

      chooseSorts(value){
        let val = value.target.innerHTML
        if(this.sort.length > 2){
          this.sort[0] = this.sort[1]
          this.sort[1] = this.sort[2]
          this.sort.splice(2,1)
        }
        this.sort.push(val)
        this.copyValue(this.sort)
      },
      copyValue(sort){
        this.sortListResult = ""
        for(let i = 0;i<sort.length;i++){
          this.sortListResult +=  sort[i] + " "
        }
      },
      publishContext(){
          if(this.inputScenicContent == ''){
            MessageBox('提示', '请输入文章标题');
            return
          }
          let userInfo = window.localStorage.getItem("userInfo")
          let userId = JSON.parse(userInfo).userId
          let imgs = ''
          if(this.flagimg){
            imgs  = JSON.parse(this.imgs)
          }else{

          }
          let dateTime = this.util.dateFormat(new Date())+" "+this.util.dateTimeFormat(new Date())
          let valEntities = {'userId':userId,'publishDateTime':dateTime,'publishTitle':this.inputScenicContent,'travelAddress':this.addressContext,
                              'publishImg':imgs,'admissionTicket':this.isFree,'travelSort':this.sortListResult}
         this.$store.dispatch('publishTravel',valEntities)
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
      border 1px solid blue
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
      margin-left 0.207rem
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
    .ticket
      width 3.3rem
      border 1px solid blue
      display flex
      height 0.26rem
      margin 0.2rem 0 0 0.207rem
      font-size 0.16rem
      .ticketName
        margin auto 0 auto 0.1rem
      .free
        margin auto 0 auto 0.1rem
    .address
      width 3.3rem
      border 1px solid blue
      display flex
      height 0.26rem
      margin 0.2rem 0 0 0.207rem
      font-size 0.16rem
      .addressName
        margin auto 0 auto 0.1rem
      .addressContext
        margin auto 0 auto 0.1rem
        .inputAddress
          outline 0
          border 0
          width 2.2rem
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
    height 0.8rem
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
