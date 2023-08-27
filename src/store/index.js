import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    gastos:[]
  },
  getters: {
  },
  mutations: {
    SET_GASTOS(state,gasto){
      state.gastos.push(gasto)
    }
  },
  actions: {
    set_gastos({commit},gasto){
      console.log('test',gasto)
      commit('SET_GASTOS',gasto)
    }
  },
  modules: {
  }
})
