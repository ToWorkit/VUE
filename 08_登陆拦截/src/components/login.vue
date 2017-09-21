<!-- 根据状态值token，判断访问权限 -->
<template>
  <div class="container">
    <h1>登录</h1>
    <div>
      <input type="text" v-model="username" class="myinput" placeholder="请输入用户名" /><br>
      <input type="password" v-model="password" class="myinput" placeholder="请输入密码" /><br>
      <button class="mybtn" @click="login">登录</button>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'Login',
    data() {
      return {
        username: '',
        password: ''
      }
    },
    methods: {
      login() {
        // 理应是接口数据
        let token = `${this.username} ${this.password}`;
        console.log(token);
        // 更新state
        this.$store.commit('login', token);
        console.log('token -->', this.$store.state.token);
      }
    }
  }
</script>
<!--样式部分-->
<style scoped>
.container{
 color:cornflowerblue;
}
.myinput{
 width:80%;
 height:50px;
 line-height:50px;
 border:1px solid #ccc;
 border-radius: 20px;
 padding-left:20px;
 margin-top:20px;
}
.mybtn{
 margin-top:20px;
 width:70%;
 height:50px;
 line-height:50px;
 background:cadetblue;
 color:#fff;
 border:0;
 border-radius: 20px;
}
</style>
