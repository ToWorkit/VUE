// 价格模块
import Vue from 'vue'
// 引入积分模块
import score from './moduleScore'
// 声明 state对象
const state = {
  price: 560 // 初始价格
}
// 声明 mutations
const mutations = {
  // 最终价格 原价格减去优惠价格
  getPrice (state, obj) {
    state.price -= obj.coupon
  }
}
// 声明 actions
const actions = {
  // 查询价格需要先获取到积分
  async findpriceSync (context) {
    await context.dispatch('findscoreSync')
    console.log(`会员积分${score.state.score}`)
    let urlPrice = '/static/price.json'
    Vue.http.get(urlPrice).then((priceResult) => {
      // 优惠后的价格
      let couponPrice = priceResult.body.data[0].price
      // 最终调用执行mutations, 更新state的price
      context.commit('getPrice', {coupon: couponPrice})
    })
  }
}
// 导出价格模块
export default {
  state,
  mutations,
  actions
}
