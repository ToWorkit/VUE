export const mutations = {
// 组装电影列表
 get_move_list(state, obj){
  console.log(obj.list)
  for (var subject of obj.list.subjects) {
   state.movelist['subjects'].push(subject)// push表示累加数据
  }

 },
// 清空电影列表，在切换城市时使用
 clear_move_list(state){
  state.movelist['subjects'] = []
 },
// 城市切换
 changecity(state, preload){
  state.city = preload.city
 },
// 是否有加载更多的按钮
 havemore(state){
  state.loadmore = false
 }
}
