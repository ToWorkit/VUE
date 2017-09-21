<template>
 <div class="loading">
  <div class="spinner">
   <div class="bounce1"></div>
   <div class="bounce2"></div>
   <div class="bounce3"></div>
  </div>
 </div>
</template>
<style scoped>
/*loading*/
.loading{
 width:100%;
}
.spinner {
 text-align: center;
 position: fixed;
 top: 0;
 right: 0;
 bottom: 0;
 left: 0;
 overflow: hidden;
 outline: 0;
 -webkit-overflow-scrolling: touch;
 background-color: rgb(0, 0, 0);
 /*滤镜*/
 filter: alpha(opacity=60);
 background-color: rgba(0, 0, 0, 0.6);
 z-index: 9999;
}
.spinner > div {
 width: 30px;
 height: 30px;
 background-color:#FFB600;
 border-radius: 100%;
 display: inline-block;
 -webkit-animation: bouncedelay 1.4s infinite ease-in-out;
 animation: bouncedelay 1.4s infinite ease-in-out;
/* Prevent first frame from flickering when animation starts */
 -webkit-animation-fill-mode: both;
 animation-fill-mode: both;
 margin-top:300px;
}

.spinner .bounce1 {
 -webkit-animation-delay: -0.32s;
 animation-delay: -0.32s;
}

.spinner .bounce2 {
 -webkit-animation-delay: -0.16s;
 animation-delay: -0.16s;
}

@-webkit-keyframes bouncedelay {
 0%, 80%, 100% { -webkit-transform: scale(0.0) }
 40% { -webkit-transform: scale(1.0) }
}

@keyframes bouncedelay {
 0%, 80%, 100% {
  transform: scale(0.0);
  -webkit-transform: scale(0.0);
 }
 40% {
  transform: scale(1.0);
  -webkit-transform: scale(1.0);
 }
}
</style>
