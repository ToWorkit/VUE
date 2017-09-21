/*http://mp.weixin.qq.com/s?__biz=MzIzMTU4MzMzOQ==&mid=2247485420&idx=1&sn=73e4fb06405341ebbbc34cb12b6f38c6&chksm=e8a0bce8dfd735fe4603eba972748849e81636ae20645289e137e7f380c7d871f34af6a5f08f&mpshare=1&scene=23&srcid=09207We0vLdBISaizIZ8z7VR#rd*/
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    // loading 的状态
    isShowLoading: false,
    token: null
  },
  mutations: {
    showLoading(state) {
      state.isShowLoading = true;
    },
    hideLoading(state) {
      state.isShowLoading = false
    },
    login: (state, obj) => {
      // 从载荷获取token， 本地缓存
      window.localStorage.setItem('token', obj.token)
      // 从载荷获取token
      state.token = obj.token;
    },
    loginout: (state) => {
      // 本地删除token
      window.localStorage.removeItem('token');
      state.token = null
    }
  },
  actions: {
    setToken({commit}, payload) {
      let username = payload.userMsg.username,
          password = payload.userMsg.password;
      console.log('username ---->', username);
      console.log('password ---->', password);
      // 模仿异步交互
      // 显示loading
      commit('showLoading');
      setTimeout(() => {
        // 更新状态state
        commit('login', {token: `${username}----${password}`})
        // 隐藏loading
        commit('hideLoading')
      }, 2000)
    }
  }
})
export default store
