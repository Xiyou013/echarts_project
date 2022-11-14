<template>
  <el-drawer
    v-model="drawerDetail"
    title="人物详情"
    :close-on-click-modal="false"
    :before-close="handleClose"
    size='600px'
  >
    <span>Hi there!</span>
  </el-drawer>
</template>

<script>
import { reactive, toRefs, watch } from "vue";

export default {
  name: "detailDrawer",
  props: {
    drawer: {
      type: Boolean,
      default: false,
    },
  },
  setup(props,context) {
    let drawerDetail = reactive({
      drawerDetail: false,
    });

    watch(
      () => props.drawer,
      (newValue, oldValue) => {
        console.log("---drawer---", newValue, oldValue);
        drawerDetail.drawerDetail = newValue;
        if (newValue || oldValue) return;
      }
    );

    const handleClose = () => {
      drawerDetail.drawerDetail = false
      context.emit("changeDrawer");
    };

    return {
      ...toRefs(drawerDetail),
      handleClose,
    };
  },
};
</script>

<style lang="less" scoped>
</style>