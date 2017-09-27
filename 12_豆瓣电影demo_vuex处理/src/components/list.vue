<template>
 <div class="container">
  <h1>电影列表</h1>
  <!--选择城市组件-->
  <Selectcity></Selectcity>
  <!--电影列表组件-->
  <Movies :moviedata="moveList"></Movies>
 </div>

</template>
<script>
import Movies from './movies.vue';
import Selectcity from './selectcity.vue';
export default{
 name: 'List',

 mounted(){
// 开始时,加载第一屏电影列表
  this.$store.dispatch('getMovelist', {page: 1});
 },
 computed: {
  moveList(){
 // 返回getter处理过的数据
   return this.$store.getters.movelist;
  }
 },
 components: {Movies, Selectcity} // 电影列表组件和城市选择组件

}
</script>
<!--样式部分-->
<style scoped>
.container {
width: 100%;
}
</style>
