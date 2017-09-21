<!-- 无限制访问 -->
<template>
  <div class="container">
    <h1>首页</h1>
    <button class="mybtn" @click="loginout">退出登录</button>
  </div>
</template>
<script>
  export default {
    name: 'Index',
    methods: {
      loginout() {
        // 更新state
        this.$store.commit('loginout', null);
        alert('已退出登录')
      }
    }
  }
</script>
<!--样式部分-->
<style scoped>
.container{
 color:blueviolet;
}

.mybtn{
 margin-top:20px;
 width:70%;
 height:50px;
 line-height:50px;
 background:blueviolet;
 color:#fff;
 border:0;
 border-radius: 20px;
}
</style>
