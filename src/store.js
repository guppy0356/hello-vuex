import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './store/mutations'
import getters from './lib/getters'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0
  },
  getters,
  mutations,
  actions: {
    increment({commit}) {
      commit('increment')
    },
    decrement({commit}) {
      commit('decrement')
    },
  }
})
