<template>
 <div class="container">
<!--遍历数据-->
  <div v-for="(movie,index) in moviedata.subjects" class="movelist">
   <ul class="movelist-ul">
    <li>
     <a @click="goDetail(movie.id)">
      <img :src="movie.images.large" alt="">
      <div>{{movie.title}}</div>
      <div>豆瓣评分：<span style="color:red;">{{movie.rating.average}}</span></div>
     </a>
    </li>
   </ul>
  </div>
  <!-- 加载更多组件 -->
  <!-- 设置自定义事件用来重新设置子组件传过来的page， 第二个版本需改为vuex传递 -->
  <!-- <Loadmore :page="page" @trans="getPage"></Loadmore> -->
  <Loadmore :page="page"></Loadmore>
 </div>
</template>
<script>
import Loadmore from './loadmore.vue';
export default{
 props: {
  moviedata: Object // 指定接收的数据类型
 },
 data(){
  return {
   page: ''
  }
 },
 created() {
  this.page = this.$store.state.movemodule.page;
 },
 methods:{
  goDetail(id){
// 路由传递参数，跳转到详情页面
   this.$router.push({path: '/detail', query: {id: id}})
  },
  // 自定义事件 接收子组件更改后的数据
/*  getPage(page) {
    this.page = page
  }*/
 },
 components: { Loadmore } // 加载更多组件
}
</script>
<style scoped>
.container {
 width: 960px;
 margin: 0 auto;
}

.movelist {
 width: 300px;
 height: 500px;
 margin-left: 10px;
 float: left;

}

.movelist-ul {
 list-style: none;
 width: 300px;
 height: 500px;
 margin: 0;
 padding: 0;
}

.movelist li a {
 width: 300px;
 height: 500px;
 display: block;
 text-decoration: none;
 color: #000;

}

.movelist li a img {
 width: 300px;
 height: 450px;
}

.movelist li a div {
 text-align: left;
}

</style>
