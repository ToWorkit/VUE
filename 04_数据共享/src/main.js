// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'
import Vuex from 'vuex'
Vue.use(VueResource)

Vue.config.productionTip = false
Vue.use(Vuex)

// 仓库
const store = new Vuex.Store({
  // 状态数据
  state: {
    score: 0, // 积分
    price: 560 // 初始价格
  },
  mutations: {
    // 得到积分
    getScore (state, obj) {
      state.score = obj.score
    },
    // 得到最终价格: 原价格 - 优惠价
    getPrice (state, obj) {
      state.price -= obj.coupon
    }
  },
  // 异步操作
  actions: {
    // 查询积分
    findscoreSync (context) {
      return new Promise((resolve, reject) => {
        let urlScore = '/static/score.json'
        Vue.http.get(urlScore).then((scoreResult) => {
          let myscore = scoreResult.body.data[0].score
          // 更新state的score
          context.commit('getScore', {score: myscore})
          resolve() // 需要等待commit完成后再resolve
        })
      })
    },
    // 查询价格必须先拿到积分
    async findpriceSync (context) {
      console.log(context) // vuex
      await context.dispatch('findscoreSync')
      console.log(`该会员的积分是${store.state.score}`)
      let urlPrice = '/static/price.json'
      Vue.http.get(urlPrice).then((priceResult) => {
        let couponPrice = priceResult.body.data[0].price
        // 最终调用执行mutations, 更新state的price
        context.commit('getPrice', {coupon: couponPrice})
      })
    }
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App }
})
