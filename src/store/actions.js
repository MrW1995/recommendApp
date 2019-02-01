import {
  recevieScenics
} from '../api/index'

import {
  RECEIVE_SCENIC,
} from './mutations-types'
export default {
  /*异步请求的方法*/
  async receiveAb({state,commit}) {
    let numberFlag = 0
    let searchSort = 'none'
    if(state.scenics && state.pullUpLoading){
      numberFlag = 1
      searchSort = 'header'
    }
    if(state.scenics && state.pullDownLoading){
      numberFlag = 2
      searchSort = 'footer'
    }
    const result = await recevieScenics(searchSort);

    if(result.code===0){
      const scenics = result.data
      commit(RECEIVE_SCENIC,{scenics,numberFlag})
    }
  },

}
