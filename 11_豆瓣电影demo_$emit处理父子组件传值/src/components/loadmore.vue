<template>
 <div>
  <div v-show="loadmore" class="loadmore" @click="loadData">加载更多</div>
 </div>
</template>
<script>
export default{
 name:"Loadmore",
 props: {
  page: Number // 指定接收数据类型为Number数字类型
 },
 methods: {
  loadData(){
    var page = this.page
    page++; // 页码自增1
    console.log(page)
    // $emit 触发自定义事件将 page 传递到父组件并修改父组件的 page 的值
    // 属于单向数据流，不可以直接的修改
    this.$emit('trans', page)
    this.$store.dispatch('getMovelist', {page}); // 异步更新电影列表
  }
 },
 computed: {
  loadmore(){
// console.log(this.$store.state);
   return this.$store.state.movemodule.loadmore; // 是否显示加载更多按钮，注意其模块的写法
  }
 }
}
</script>
<style scoped>
.loadmore {
 clear: both;
 width: 200px;
 height: 50px;
 line-height: 50px;
 border: 0;
 border-radius: 20px;
 background: goldenrod;
 color: #fff;
 margin: 0 auto;
 margin-top: 50px;
}
</style>
