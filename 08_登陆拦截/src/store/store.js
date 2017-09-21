import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    token: null
  },
  mutations: {
    login: (state, data) => {
      // 本地缓存token
      window.localStorage.setItem('token', data);
      state.token = data;
    },
    loginout: (state) => {
      // 退出删除
      window.localStorage.removeItem('token')
      state.token = null
    }
  }
})

export default store
