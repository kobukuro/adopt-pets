// store為global object，存放global variable以及function等，讓所有components使用
import Vue from 'vue'
import Vuex from 'vuex'

import state from './state'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'

Vue.use(Vuex)

export default new Vuex.Store({
  state,
  mutations,
  actions,
  // getters用來取state時，需要做一些運算的結果，但又不會影響到原本state的值
  getters,
  modules: {
  }
})
