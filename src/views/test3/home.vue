<template>
  <div class="home-nav">
    <div class="title"><span>echarts图表测试</span></div>
    <!-- <div class="nav">
      <div
        class="nav-btn"
        :class="isIndex == index ? 'btn1' : ''"
        v-for="(item, index) in navArr"
        :key="index"
        @click="chackNav(item, index)"
      >
        {{ item.name }}
      </div>
    </div> -->
  </div>
  <Context :navId='navId'></Context>
</template>

<script>
import { ref } from '@vue/reactivity';
import Context from "./context/index.vue";
export default {
  name: "home-app",
  components: { Context },
  setup() {
    let navArr = [
      { id: 1, name: "导航一" },
      { id: 2, name: "导航二" },
      { id: 3, name: "导航三" },
    ];
    let isIndex = ref(0);
    let navId = ref(1)

    function chackNav(item, index) {
      isIndex.value = index;
      navId.value = item.id;
    //   console.log("---item---", item,isIndex,navId);
    }

    return {
      navArr,
      isIndex,
      navId,
      chackNav,
    };
  },
};
</script>

<style lang="less" scoped>
// .home-body{
//     width: 100%;

// }
.home-nav {
  width: 100%;
  height: 150px;
  //   background-color: cornflowerblue;
}
.title {
  width: 100%;
  height: 100px;
  text-align: center;
  line-height: 100px;
  font-size: 35px;
  font-weight: bold;
  letter-spacing: 5px;
}
.nav {
  width: 100%;
  height: 30px;
  display: flex;
  border-bottom: 2px solid #e0e0e0;
  .nav-btn {
    width: 150px;
    height: 30px;
    // background-color: #f1f3f4;
    text-align: center;
    line-height: 30px;
    // box-sizing: border-box;
    font-size: 14px;
  }
  .nav-btn:hover {
    background-color: #e0e0e0;
  }
  .btn1 {
    border-bottom: 2px solid cornflowerblue;
  }
}
</style>