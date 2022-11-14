<template>
  <div class="context">
    <left-body @getPath='getPath'> </left-body>
    <div class="right-body">
      <router-view></router-view>
    </div>
  </div>
</template>

<script setup>
import LeftBody from "../left/indexPage.vue";
// import {list} from '@/utils/secondMenu'
import router from '@/router/index'
// import RightBody from "../right/index.vue";

    function getPath(value){
        console.log('---getPath---:',value)
        router.push({path:value})
    }

</script>

<style lang="less" scoped>
.context {
  position: absolute;
  top: 132px;
  bottom: 0;
  left: 0;
  right: 0;
  //   background-color: burlywood;
  display: flex;
}
.right-body {
  width: calc(100% - 230px);
  height: 100%;
  background-color: #F1F3F4;
  padding: 15px;
  box-sizing: border-box;
}
</style>