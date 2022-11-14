<template>
  <div class="left">
    <div class="second_menu" :class="isIndex === index ? 'btn1' : ''" v-for="(item, index) in menuList" :key="item.id"
      @click="toPage(item, index)">
      {{ item.title }}
    </div>
  </div>
</template>

<script setup>
// import router from '@/router/index'
// import { list } from "@/utils/enum";
// import useSecondMenu from "@/utils/secondMenu";
import { getMeauList } from '@/api/echarts.js'
import { onMounted, ref } from 'vue';
const emits = defineEmits(['getPath'])

let menuList = ref([])
let isIndex = ref(0)
const getMeauData = () => {
  getMeauList().then((res) => {
    console.log('res::;', res);
    menuList.value = res.data.data
    console.log(menuList.value);
    toPage(menuList.value[0],0)
  }).catch((err) => {
    console.log(err);
  })
}

const toPage = (item, index) => {
  console.log(item, index);
  isIndex.value = index
  emits('getPath', item.path)
}

onMounted(() => {
  getMeauData()
})

</script>

<style lang="less" scoped>
.left {
  width: 230px;
  height: 100%;
  //   background-color: cadetblue;
}
.second_menu {
  width: 100%;
  height: 50px;
  // background-color: burlywood;
  margin: 5px 0px;
  text-align: center;
  line-height: 50px;
}
.second_menu:hover {
  background-color: rgba(100, 149, 237, 0.5);
  color: #fff;
}
.btn1 {
  background-color: #6495ED;
  color: #fff;
}
</style>