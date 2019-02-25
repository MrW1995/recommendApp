/*
* 该文件的主要作用是用于修改state的状态
* */
import {
  RECEIVE_SCENIC,
  CHANGE_LOGIN,
  CHANGE_UPLOADER,

  CHANGE_PERSONAL,
  CHANGE_SHOWSTATE,
  CHANGE_UPLOADING,
  CHANGE_DOWNLOADING,
}from './mutations-types'
export default {
  /*异步修改state的方法*/
  [RECEIVE_SCENIC](state,{scenics,numberFlag}){
    state.scenics = scenics
    if(numberFlag === 1)
      state.pullUpLoading = false
    if(numberFlag === 2)
      state.pullDownLoading = false
  },

  /*同步修改state的方法*/

  [CHANGE_LOGIN](state,boolVal){
    state.isShowUserLogin = boolVal
  },

  [CHANGE_UPLOADER](state,boolVal){
    state.isShowUploaderImg = boolVal
  },



  [CHANGE_PERSONAL](state,boolVal){
    state.isUserPersonalInfo = boolVal
  },

  [CHANGE_SHOWSTATE](state,boolVal){
    state.isShowSearchOrSortMenu = boolVal
  },

  [CHANGE_UPLOADING](state,boolVal){
    state.pullUpLoading = boolVal
  },

  [CHANGE_DOWNLOADING](state,boolVal){
    state.pullDownLoading = boolVal

  },



  /*图片上传*/
  set_img_upload_cache (state, arg) {
    state.img_upload_cache = arg
  },
  set_img_paths (state, arg) {
    state.img_paths = arg
  },
  set_img_status (state, arg) {
    state.img_status = arg
  }
}
