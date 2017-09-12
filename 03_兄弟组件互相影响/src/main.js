import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'
import Vuex from 'vuex'
Vue.use(VueResource)

Vue.config.productionTip = false

Vue.use(Vuex)
// 声明仓库
const store = new Vuex.Store({
  // 声明状态数据
  state: {
    count: 0, // 计数器
    // 模拟数据
    goods: [
      {
        id: '01',
        name: '苹果',
        isok: false
      },
      {
        id: '02',
        name: '梨',
        isok: true
      },
      {
        id: '03',
        name: '西瓜',
        isok: true
      }
    ]
  },
  // 数据筛选
  getters: {
    filterGoods: (state) => {
      return state.goods.filter(item => item.isok)
    }
  },
  // 声明操作
  // 同步增加
  mutations: {
    increment (state, obj) {
      state.count += obj.amount
    }
  },
  // 异步增加
  actions: {
    incrementAsync (context, obj) {
      setTimeout(() => {
        context.commit('increment', obj)
      }, 1000)
    }
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})

