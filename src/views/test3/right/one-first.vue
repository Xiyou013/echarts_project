<template>
  <div class="one-first">
     未改造完成 -->
    <div class="search">
      <el-form
        :inline="true"
        ref="ruleFormRef"
        :model="searchFrom"
        label-suffix=":"
        class="demo-form-inline"
      >
        <el-form-item label="姓名" prop="name">
          <el-input v-model="searchFrom.name" placeholder="请输入姓名" />
        </el-form-item>
        <el-form-item label="属性" prop="attribute">
          <el-select v-model="searchFrom.attribute" placeholder="请选择属性">
            <el-option
              v-for="(item, index) in attributeList"
              :key="index"
              :label="item.name"
              :value="item.type"
            />
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">搜索</el-button>
          <el-button @click="resetForm(ruleFormRef)">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div>
      <PersonList :searchFrom="searchFrom"></PersonList>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from "@vue/reactivity";
import PersonList from "@/components/personList.vue";
import btnRestore from '@/utils/btnRestore'
import { onMounted } from "vue";
import { getTypeList } from '@/api/echarts.js'
const ruleFormRef = ref(null);
let searchFrom = reactive({
  name: "", //姓名
  attribute: "", //属性
  isSearch: false,
});
let attributeList = ref([])

function onSubmit(event) {
  searchFrom.isSearch = true;

  //解决element-button点击样式不复原
  // let target = event.target;
  // console.log("123:", event);
  // if (target.nodeName == "I" || target.nodeName == "SPAN") {
  //   target = event.target.parentNode;
  // }
  // target.blur();

  btnRestore(event);

  console.log("---onSubmit.searchFrom---", searchFrom);
}
function resetForm(formEl) {
  if (!formEl) return;
  searchFrom.isSearch = false;
  formEl.resetFields();
  console.log("---resetForm.searchFrom---", searchFrom);
  btnRestore(event);
}

const getTypeData = () => {
  getTypeList().then((res) => {
    console.log('res:::', res);
    attributeList.value = res.data.data
  })
}

onMounted(() => {
  getTypeData()
})
</script>

<style lang="less" scoped>
.one-first {
  width: 100%;
  height: 100%;
  border-radius: 8px;
  background-color: #fff;
}
.search {
  height: 100px;
  // background-color: burlywood;
  text-align: center;
  line-height: 100px;
}
</style>