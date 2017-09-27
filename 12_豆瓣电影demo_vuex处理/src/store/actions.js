import Vue from 'vue'
import $http from 'vue-resource'
Vue.use($http)
let vm = new Vue()

export const actions = {
// 异步获取电影列表
 getMovelist({commit, state}, preload){
  /*
  1.豆瓣api的分页计算方法。
豆瓣api并没有设置page这样的参数，而是计算偏移量start。这个参数的计算方法是：
（页码-1）*每页条数
   */
  var startPage = (preload.page - 1) * 12// 计算页码
  vm.$http.get('/api/movie/in_theaters?city=' + state.city + '&start=' + startPage + '&count=12').then((res) => {
   if (res.body.subjects.length > 0) { // 当返回的数据不为空时，赋值到电影列表容器中
    commit('get_move_list', {list: res.body})
   } else {
    commit('havemore') // 当无数据时，让加载更多按钮消失
   }
  })
 },
 // 控制页码
 getPage({commit, state}, page) {
  // console.log(page)  此处未处理
  commit('pageStatus', {page})
 }
}
