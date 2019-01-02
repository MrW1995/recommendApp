import {
  recevieScenics
} from '../api/index'

import {
  RECEIVE_SCENIC
} from './mutations-types'
export default {

  async receiveAb({commit}) {
    const result = await recevieScenics();
    if(result.code===0){
      const scenics = result.data
      commit(RECEIVE_SCENIC,{scenics})
    }
  }

}
