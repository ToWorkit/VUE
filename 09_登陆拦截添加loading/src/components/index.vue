<!-- 无访问限制 -->
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
        // 更新登录状态
        this.$store.commit('loginout', null);
      }
    }
  }
</script>
