/*
* 该文件的主要作用是用于修改state的状态
* */
import {
  RECEIVE_SCENIC,
  CHANGE_BOOLEAN
}from './mutations-types'
export default {
  /*同步修改state的方法*/
  [RECEIVE_SCENIC](state,{scenics}){
    state.scenics = scenics
  },

}
