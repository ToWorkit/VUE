<!-- 根据状态值token，判断访问权限 -->
<!--模板部分-->
<template>
 <div class="container">
  <h1>登录</h1>
  <Loading v-show="isShowLoading"></Loading>
  <div>
   <input v-model="username" class="myinput" type="text" placeholder="请输入用户名"/><br>
   <input v-model="password" class="myinput"type="password" placeholder="请输入密码"/><br>
   <button class="mybtn" @click="login">提交</button>
  </div>
 </div>
</template>
<!--js部分-->
<script>
/*
注意
1.载荷的使用方法。
2.如果异步赋值token时间过长怎么办？
如果token赋值尚未完成，页面就跳转了，那我们得到的token值肯定就有问题了。
那么有什么办法可以阻止这种情况的发生呢？
Loading效果
其实我们可以使用loading效果来解决——强制用户等赋值完成后，再继续下面的操作。
loading可以是一张gif图片，也可以用css3来实现。
无论哪种方式，都需要实现背景遮罩的效果。
 */
import Loading from './loading.vue'
export default {
 name:'Login',
 components:{
   Loading
 },
 // 使用计算属性是为了当state发生变化时 isShowLoading 也跟着变化(同步更新)
 computed:{
  isShowLoading(){
   return this.$store.state.isShowLoading;
  }
 },
 data(){
  return {
   username:'',
   password:''
  };
 },
 methods:{
  login(){
   this.$store.dispatch({type:'setToken',userMsg:{username:this.username,password:this.password}});//更新state

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
