/*
* 该文件的主要作用是用于修改state的状态
* */
import {
  RECEIVE_SCENIC
}from './mutations-types'
export default {
  ['RECEIVE_SCENIC'](state,{scenics}){
      state.scenics = scenics
  }
}
