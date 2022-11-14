<template>
  <div class="homePage">首页</div>
</template>

<script setup>
import { getlistData } from '@/api/echarts'
import { onMounted } from 'vue';

const getListData = () => {
  console.log('11111');
  getlistData().then((res) => {
    console.log('res:::', res);
  })
}

onMounted(() => {
  getListData()
})
</script>

<style>
.homePage {
  font-size: 30px;
}
</style>