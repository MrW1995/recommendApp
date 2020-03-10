/*
* 该文件的主要作用是用于修改state的状态
* */
import {
  /*异步mutations-types类型*/

  CHANGE_LOGIN,
  CHANGE_UPLOADER,
  LOGIN,
  LOGOUT,
  QUERY_SCENIC,
  ARTICLE_COMMENT,
  LOADING_VAGUE_SEARCH,
  EVERYDAY_LAUGH,
  QUERY_STUDY,
  QUERY_USER_ABOUT_INFO,
  ADD_STUDY_SOURCE,
  USER_UPDATE_REGISTER,
  SUBMIT_ADVICE,
  SUCCESS_SORT,
  /*同步mutations-types类型*/
  CHANGE_LODING,
  CHANGE_PAGENUM,
  CHANGE_DATE,
  SCENIC_DETAIL,
  LOADING_VAGUE,
  LOADING_VAGUE_FLAG,
  COPY_VAGUE_VALUE,
  CHANGE_LOADING_COUNT,
  STUDY_PULLDOWN,
  EXECUTE_METHOD,
  PAGENUMM,
  SHOW_STATE,
  STUDY_DETAIL,
  CLEAR_ARR,
  CHANGE_LAUGH,
  STUDY_USERCOMMENTUSER,
  CHANGE_SHOWSTATE,
  CHANGE_UPLOADING,
  CHANGE_DOWNLOADING,
  UPLOAD_IMG,
  PUBLISH_TRAVEL,
  CLEAR_ARRIMGS,
} from './mutations-types'
export default {

  /*异步修改state的方法*/

  [LOGIN]: (state, {result}) => {
    state.code = result.code
    state.msg = result.msg
    if(state.code === 0){
      window.localStorage.setItem('token',result.token)
      const userInfo = result.userInfo
      window.localStorage.setItem('userInfo',JSON.stringify(userInfo))
      state.isShowUserLogin = false
      state.token = result.token;
      state.userInfos = result.userInfo

    }
  },
  [LOGOUT]: (state) => {
    localStorage.removeItem('token');
    state.token = null
  },
  [QUERY_SCENIC]:(state,{pageList,pageNum,allPage}) =>{
    if (state.loading === 'new'){
       state.loadingCount = pageList.length
       for (let i = 0 ; i < pageList.length;i++){
         state.scenics.unshift(pageList[i])
       }
    }else if (state.loading === '加载'){
        state.loadingCount = pageList.length
        for (let i = 0 ; i < pageList.length;i++){
          state.scenics.push(pageList[i])
        }
        window.sessionStorage.setItem('pageNum',pageNum)
    }else {
        state.scenics =pageList
    }
    state.allPages = allPage
    if (pageList.length>=6)
      state.pageNum = pageNum+1

  },
  [PUBLISH_TRAVEL](state,{result}){
    if(result.code === 0){
      state.codeFlag = true
      state.msgContent = result.msg
    }

  },
  [LOADING_VAGUE_SEARCH](state,{searchList,vague1}){

    for(let i = 0;i < searchList.length; i++) {
      state.vagueSearchArr.push(searchList[i])
    }
      state.vague = vague1
    if(searchList.length>0)
      state.pageNum = state.pageNum + 1
  },
  [ARTICLE_COMMENT](state,{result}){
    if(result.code === "0"){
      state.codeFlag = true
      state.msgContent = result.msg
    }
  },
  [EVERYDAY_LAUGH](state,result){
    let result1 = result.showapi_res_body.contentlist
    for(let i = 0; i < result1.length; i++){
      state.everyDayLaugh.push(result1[i])
    }
    state.laughFlag = false
    state.pageNum = state.pageNum + 1
  },
  [ADD_STUDY_SOURCE](state,{result}){
    if(result.code === 0){
      state.codeFlag = true
      state.msgContent = result.msg
    }
  },
  [QUERY_STUDY](state,result){
    if(state.studyPullDown){
      for(let i = 0; i < result.length; i++){
        state.studyArr.push(result[i])
      }
    }else{
      state.studyArr = result
    }
    if(result.length === 0){
      state.studyPullDown = false
      state.executeMethod = false
      state.showState = true

    }else{
      state.pageNum = state.pageNum+1
    }
    state.studyCount = result.length
  },
  [USER_UPDATE_REGISTER](state,{result}){
    if(result.code === "0"){
      state.codeFlag = true
      state.msgContent = result.msg
    }
  },
  [SUBMIT_ADVICE](state,{result}){
    if(result.code === "0"){
      state.codeFlag = true
      state.msgContent = result.msg
    }
  },

  [QUERY_USER_ABOUT_INFO](state,{result,flag}){
    if(flag === '1'){
      state.publishCount = []
      state.publishCount.push(result.studySources)
      state.publishCount.push(result.travelPublishes)
    }else if(flag === '2'){
      state.commentCount = []
      state.commentCount.push(result.userCommentArticles)
      state.commentCount.push(result.userCommentArticles1)
      state.commentCount.push(result.userCommentUsers)
      state.commentCount.push(result.userCommentUsers1)
    }
  },
  [SUCCESS_SORT](state,{result,num}){
    state.sortList = []
    for(let i = 0 ; i < result.sort.length; i++){
      state.sortList.push(result.sort[i].sort)
    }
    if(num === 1){
      state.sortList.unshift("所有")
    }

  },


  /*同步修改state的方法*/
  [CHANGE_LODING](state,loadingVal){
    state.loading = loadingVal
  },

  [CHANGE_PAGENUM](state,num){
    if(num>0){
      if(window.sessionStorage.getItem('pageNum') == null)
        state.pageNum = state.pageNum + num
      else
        state.pageNum = parseInt(window.sessionStorage.getItem('pageNum')) + num
      window.sessionStorage.clear()
    }
    else
      state.pageNum = 1
  },

  [CHANGE_DATE](state,dateTime){
    state.dateTime = dateTime
  },

  [SCENIC_DETAIL](state,index){
    state.singleScenic = state.scenics[index]
    state.userCommetArticle = state.scenics[index].lists
    if(state.userCommetArticle.length > 0){

      let userCommentUser = state.userCommetArticle[0].userCommentUsers
      for(let i = 0;i<userCommentUser.length;i++){
        state.userCommentUser.push(userCommentUser[i])
      }
    }
  },

  [CHANGE_LOGIN](state,boolVal){
    state.isShowUserLogin = boolVal
  },

  [CHANGE_UPLOADER](state,boolVal){
    state.isShowUploaderImg = boolVal
  },

  [LOADING_VAGUE](state,number){
    state.commentArticleFlag = number
  },

  [LOADING_VAGUE_FLAG](state,flag){
    state.vagueFlag = flag
  },

  [COPY_VAGUE_VALUE](state,{vague,num}){
    if(num === 0){
      state.singleScenic = vague
      state.userCommetArticle = state.singleScenic.lists
      if(state.userCommetArticle.length>0)
        state.userCommentUser =  state.userCommetArticle[0].userCommentUsers
    }
    if(num === 1){
      state.studyDetail = vague
      state.userCommentStudy = state.studyDetail.userCommentArticles
      if(state.userCommentStudy.length>0)
        state.userCommentUser =  state.userCommentStudy[0].userCommentUsers
    }

  },






  [CHANGE_SHOWSTATE](state,boolVal){
    state.isShowSearchOrSortMenu = boolVal
  },

  [CHANGE_UPLOADING](state,number){
    state.pullUpLoading = number
  },

  [CHANGE_LOADING_COUNT](state,number){
    state.loadingCount = number
  },

  [CHANGE_DOWNLOADING](state,boolVal){
    state.pullDownLoading = boolVal

  },

  [STUDY_PULLDOWN](state,boolVal){
    state.studyPullDown = boolVal
  },

  [EXECUTE_METHOD](state,boolVal){
    state.executeMethod = boolVal
  },

  [PAGENUMM](state,num){
    state.pageNum = num
  },

  [SHOW_STATE](state,Bool){
    state.showState = Bool
  },

  [STUDY_DETAIL](state,index){
    state.studyDetail = state.studyArr[index]
    state.userCommentStudy = state.studyDetail.userCommentArticles
    if( state.userCommentStudy>0)
      state.userCommentUser =  state.userCommentStudy[0].userCommentUsers
  },
  [STUDY_USERCOMMENTUSER](state,result){
    state.userCommentUser = result
  },

  [CLEAR_ARR](state,arr){
    state.vagueSearchArr = arr
  },
  [CHANGE_LAUGH](state,boolVal){
    state.laughFlag = boolVal
  },
  [CLEAR_ARRIMGS](state){
    state.uploadImgs = []
  },

  [UPLOAD_IMG](state,Img){

    let imgStr = Img.result
    let arr = Img.result.split(" ")
    for(let i = 0; i < arr.length-1; i++ ){
      state.uploadImgs +=  arr[i]+" "
    }

    state.uploadFinish = false
    if(Img !== ''){
      state.uploadImg = Img.result
      state.uploadFinish = true
    }
  },





  /*图片上传*/
  set_img_upload_cache (state, arg) {
    state.img_upload_cache = arg
    state.img_upload_flag =  state.img_upload_cache.length

  },
  // set_img_paths (state, arg) {
  //   state.img_paths = arg
  // },
  // set_img_status (state, arg) {
  //   state.img_status = arg
  // }
}
