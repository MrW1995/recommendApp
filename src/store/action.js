/*
* 通过mutations简介更改state的状态， 并且包含多个对象
* */
import {
  recevieScenics
} from '../api/index'

import {
  RECEIVE_SCENIC
} from './mutations-types'
export default {

  receiveAb({commit}) {
    console.log("1223")
    const result = recevieScenics();

    if(result.code===0){
      const scenics = result.data
      commit(RECEIVE_SCENIC,{scenics})
    }
  }

}
