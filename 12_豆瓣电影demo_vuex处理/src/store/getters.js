// 数据处理
export const getters = {
// getters相当于computed计算属性;
// 而state相当于data，可以这样对比着记忆。
// 功能：将豆瓣评分除以1后返回
 movelist(state){
  for (let subject of state.movelist.subjects) {
   subject.rating.average = subject.rating.average / 1
  }
  return state.movelist
 }
}
