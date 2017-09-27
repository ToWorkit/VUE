import { getters } from './getters'
import { actions } from './actions'
import { mutations } from './mutations'
// 声明state
const state = {
 movelist: {
  subjects: [] // 电影列表
 },// 子组件要遍历subjects，将其赋值为空数组，防止开始时因为无数据，遍历报错
 city: '', // 城市
 loadmore: true, // 加载更多
 page: 1 // 页码
}
// 导出模块
export default {
 state,
 getters,
 actions,
 mutations
}
