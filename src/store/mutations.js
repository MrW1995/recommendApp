/*
* 该文件的主要作用是用于修改state的状态
* */
import {
  RECEIVE_SCENIC,
  CHANGE_DISPLAY,
  CHANGE_PUBLISH,
  CHANGE_REPLY,
  COMMENT_CONTENT,
}from './mutations-types'
export default {
  /*异步修改state的方法*/
  [RECEIVE_SCENIC](state,{scenics}){
    state.scenics = scenics
  },


  /*同步修改state的方法*/
  [CHANGE_DISPLAY](state,boolVal){
    state.isShowScenicDetail = boolVal
  },

  [CHANGE_PUBLISH](state,boolVal){
    state.isShowPublishScenic = boolVal
  },

  [COMMENT_CONTENT](state,boolVal){
    state.isShowScenicComment = boolVal
  },

  [CHANGE_REPLY](state,boolVal){
    state.isShowReplyComment = boolVal
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
