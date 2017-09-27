import Vue from 'vue'
import Vuex from 'vuex'
import movemodule from './module'
Vue.use(Vuex)
export default new Vuex.Store({
  modules: {
    movemodule
  }
})
