/*
* 这是vuex状态管理器的核心配置文件
* */

import Vue from 'vue'
import Vuex from 'vuex'

import state from './state'
import action from './action'
import mutations from './mutations'
import getters from './getters'
Vue.use(Vuex)

export default new Vuex.Store({
  state,
  action,
  mutations,
  getters
})
