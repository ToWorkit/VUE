import Vue from 'vue'
import Vuex from 'vuex'
import score from './modules/moduleScore'
import price from './modules/modulePrice'
Vue.use(Vuex)
// 合成模块
export default new Vuex.Store({
  modules: {
    score,
    price
  }
})
