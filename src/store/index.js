import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    gastos:[],
    resultados:[],
    
  },
  getters: {
  },
  mutations: {
    SET_GASTOS(state,gasto){
      state.gastos.push(gasto)
    },
    ACEPTAR_GASTO(state,gasto){
      state.resultados.push(gasto)
    },
    RECHAZAR_GASTO(state,gasto){
      state.resultados.push(gasto)

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
