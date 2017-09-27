<template>
 <div>
  <select class="city" @change="selectCity">
   <option value="">请选择城市</option>
   <option v-model="item.name" v-for="item in citys">{{item.name}}</option>
  </select>
 </div>
</template>
<script>
// 选择城市组件
export default{
 name: 'Selectcity',
 data () {
  return {
   citys: [
    {name: '北京'},
    {name: '上海'},
    {name: '西安'}
   ]
     }
 },
 methods: {
  selectCity(eve){
// 当切换城市时，需要做以下几步：
   console.log(eve.target.value);

// 修改state中的city值
   this.$store.commit('changecity', {city: eve.target.value});

// 置空电影列表
   this.$store.commit('clear_move_list');

// 重新请求电影列表数据
   this.$store.dispatch('getMovelist', {page: 1});
  }
 }
}
</script>
<style scoped>
.city {
 width: 200px;
 height: 30px;
 margin: 30px;
}
</style>
