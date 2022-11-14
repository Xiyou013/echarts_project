<template>
  <div class="right-body">
    <span @click="toOne">111</span>  |   <span @click="toTwo">222</span>
    <router-view></router-view>
  </div>
</template>

<script>
import router from '@/router/index'
export default {
    name:'right-body',
    setup(){
      function toOne(){
        router.push({path:'/one-first'})
      }
      function toTwo(){
        router.push({path:'/two-first'})
      }
      return {
        toOne,
        toTwo
      }
    }
}
</script>

<style lang="less" scoped>
.right-body{
    width: calc(100% - 230px);
    height: 100%;
    background-color: darksalmon;
}
</style>