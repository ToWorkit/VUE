<template>
 <div class="container">
  <h1>详情页面</h1>
  <div>电影ID：<span style="color:dodgerblue;">{{id}}</span></div>
 </div>
</template>

<script>
export default{
 name:"Detail",
 data(){
  return {
   id:null
  };
 },
 mounted(){
  this.id = this.$route.query.id;// 接收到的参数
 }
}
</script>
<!--样式部分-->
<style scoped>
.container {
 color: green;
 background: #f2f2f2;
 width: 100%;
 height: 300px;
 line-height: 100px;
}
</style>
