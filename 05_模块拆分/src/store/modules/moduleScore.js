// 积分模块
import Vue from 'vue'
// 声明 state对象
const state = {score: 0}
// 声明 mutations
const mutations = {
  getScore (state, obj) {
    state.score = obj.score
  }
}
// 声明 actions
const actions = {
  findscoreSync (context) {
    // 返回 promise
    return new Promise((resolve, reject) => {
      let urlScore = '/static/score.json'
      Vue.http.get(urlScore).then((scoreResult) => {
        // 获取数据
        let myScore = scoreResult.body.data[0].score
        // 更新 state的 score
        context.commit('getScore', {score: myScore})
        // resolve 放到commit 之后
        resolve()
      })
    })
  }
}

// 导出积分模块
export default {
  state,
  mutations,
  actions
}
