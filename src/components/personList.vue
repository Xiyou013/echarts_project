<template>
  <div class="addbtn">
    <el-button
      type="primary"
      size="small"
      class="add-btn"
      @click="addPerson(false)"
      >新增</el-button
    >
  </div>
  <!-- {{ test }}
  <input type="text" v-model="test" />
  <el-select v-model="test" placeholder="请选择属性">
    <el-option
      v-for="(item, index) in listTest"
      :key="index"
      :label="item.name"
      :value="item.type"
    />
  </el-select> -->
  <el-table :data="persondata.personList" stripe style="width: 100%">
    <el-table-column prop="name" label="姓名" width="180" />
    <el-table-column
      prop="type"
      label="类型"
      width="180"
      :formatter="formatAttribute"
    />
    <el-table-column prop="" label="操作">
      <template #default="scope">
        <el-button
          type="primary"
          size="small"
          @click="addPerson(true, scope.row)"
          >编辑</el-button
        >
        <el-button type="info" size="small" plain @click="onDetails"
          >查看</el-button
        >
        <el-button
          type="danger"
          size="small"
          @click="onDelete(scope.row, scope.$index)"
          >删除</el-button
        >
      </template>
    </el-table-column>
  </el-table>
  <AddDialog
    :dialogVisible="dialogFormVisible"
    @changeDialog="changeDialog"
    @changeIsEdit="changeIsEdit"
    :isEdit="isEdit"
    :rowData="rowData"
  ></AddDialog>
  <DetailDrawer
    :drawer="drawerDetail"
    @changeDrawer="changeDrawer"
  ></DetailDrawer>
</template>

<script setup>
import { onMounted, reactive, ref, watch } from "@vue/runtime-core";
import AddDialog from "@/components/addDialog.vue";
import DetailDrawer from "@/components/detailDrawer.vue";
// import { reactive } from '@vue/reactivity';
import btnRestore from "@/utils/btnRestore";
import { getPersonList, getTypeList } from '@/api/echarts.js'

const props = defineProps({
  searchFrom: {
    type: Object,
    default: () => {},
  },
})

let drawerDetail = reactive({
  drawerDetail: false,
});
let dialogFormVisible = reactive({
  dialogFormVisible: false,
});

let isEdit = reactive({
  isEdit: false,
});

let rowData = ref(null);

let persondata = reactive({
  personList: [],
});

let test = ref(null);
// const listTest = [
//   {}
// ]


watch(props.searchFrom, (newValue, oldValue) => {
  if (newValue.isSearch) {
    console.log("---searchFrom---", newValue, oldValue);
    // searchList(newValue);
    test.value = props.searchFrom.name;
    console.log("---watch.test---:", test.value);
  }
  if (newValue.name == "" && newValue.attribute == "") {
    // persondata.personList = state.list;
  }
  if (newValue || oldValue) return;
});

function addPerson(value, row) {
  dialogFormVisible.dialogFormVisible = true;
  isEdit.isEdit = value;
  if (value && row) {
    rowData.value = row;
  } else {
    // id.value = null
  }
  console.log("---addPerson.dialogFormVisible---", dialogFormVisible);
  btnRestore(event);
}

// function searchList(element) {
//   persondata.personList = state.list.filter((item) => {
//     // console.log('---item---',item)
//     // console.log('---element---',element)
//     if (element.name && element.attribute) {
//       return element.name === item.name && element.attribute === item.type;
//     } else {
//       return element.name === item.name || element.attribute === item.type;
//     }
//   });
// }
function changeDialog(value) {
  dialogFormVisible.dialogFormVisible = value[1];
  persondata.personList = value[0]
  // isEdit.isEdit = value;
  //   id.value = null
    console.log("---changeDialog.value---", value);
}
function changeIsEdit(value) {
  isEdit.isEdit = value;
}
function changeDrawer() {
  drawerDetail.drawerDetail = false;
}
function onDetails() {
  drawerDetail.drawerDetail = true;
  console.log("---onDetails.drawerDetail---", drawerDetail);
  btnRestore(event);
}
function onDelete(row, index) {
  console.log("---onDelete.row---", row, index);
  persondata.personList.splice(index, 1);
  // store.commit("changeList", persondata.personList);
  // console.log(
  //   "---persondata.personList and state.list---",
  //   persondata.personList,
  //   state.list
  // );
  btnRestore(event);
}
let attributeList = ref([])
const getTypeData = () => {
  getTypeList().then((res) => {
    console.log('res:::', res);
    attributeList.value = res.data.data
  })
}
function formatAttribute(row) {
  let personType;
  attributeList.value.forEach((element) => {
    if (element.type === row.type) {
      personType = element.name;
    }
  });
  return personType;
}

const getPersonData = () => {
  getPersonList().then((res) => {
    console.log('res:::', res);
    persondata.personList = res.data.data
  })
}

onMounted(() => {
  getPersonData()
  getTypeData()
});
</script>

<style lang="less" scoped>
.add-btn {
  width: 65px;
  letter-spacing: 3px;
  position: relative;
  left: 15px;
  top: -10px;
}
</style>