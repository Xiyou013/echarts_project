<template>
  <div>
    <el-dialog
      v-model="dialogFormVisible.dialogFormVisible"
      :title="isEdit.isEdit ? `编辑人物信息` : `新增人物信息`"
      modal
      :close-on-click-modal="false"
      :before-close="Cancel"
    >
      <el-form :model="form" label-suffix=":" :rules="rules" ref="formRef">
        <el-form-item label="姓名" label-width="150px" prop="name">
          <el-input
            v-model="form.name"
            placeholder="请输入姓名"
            style="width: 250px"
          />
        </el-form-item>
        <el-form-item label="属性" label-width="150px" prop="type">
          <el-select
            v-model="form.type"
            placeholder="请选择属性"
            style="width: 250px"
          >
            <el-option
              v-for="(item, index) in attributeList"
              :key="index"
              :label="item.name"
              :value="item.type"
            />
          </el-select>
        </el-form-item>
      </el-form>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="Cancel">取消</el-button>
          <el-button type="primary" @click="Confirm">确定</el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script setup>
import { onMounted, reactive, ref, watch } from "@vue/runtime-core";
import { getTypeList, getPersonList } from '@/api/echarts.js'

const props = defineProps({
  dialogVisible: {
    type: Object,
    default: () => { },
  },
  isEdit: {
    type: Object,
    default: () => { },
  },
  rowData: {
    type: Object,
    default: () => { },
  },
})
const emits = defineEmits(['changeDialog','changeIsEdit'])

// let state = reactive(store.state.Original_god);
// console.log(state.list);
let attributeList = ref([])
let persondata = ref([])
let personList = ref([])
const rules = {
  name: [{ required: true, message: "请输入姓名" }],
  type: [{ required: true, message: "请选择属性" }],
};
const formRef = ref(null);

let dialogFormVisible = reactive({
  dialogFormVisible: false,
});
let form = ref({
    name: "",
    type: "",
});
// console.log("---props---", props.dialogVisible);
watch(props.dialogVisible, (newValue, oldValue) => {
  // console.log("---dialogVisible---", newValue, oldValue);
  dialogFormVisible.dialogFormVisible = newValue.dialogFormVisible;
  // console.log("---dialogFormVisible---", dialogFormVisible);
  if (newValue || oldValue) return;
});
watch([() => props.rowData, props.isEdit], (newValue, oldValue) => {
  console.log("---rowData and isEdit---", newValue, oldValue);
  console.log("---newValue1111111---", newValue[1].isEdit, form.value);

  if (newValue[1].isEdit) {
    getRowData(props.rowData);
    console.log("---form---", form.value);
  } else {
    form.value = { name: "", type: "" };
    console.log("---newValue2222222---", newValue[1].isEdit, form.value);
  }
  if (newValue || oldValue) return;
});
function Cancel() {
  dialogFormVisible.dialogFormVisible = false;
  if (!props.isEdit.isEdit) {
    console.log("---!isEdit1111---", !props.isEdit.isEdit);
    form.value = { name: "", type: "" };

    formRef.value.resetFields();
    // form.form = {}
  } else {
    console.log("---!changeDialog11111---", !props.isEdit.isEdit);
    emits("changeIsEdit",!props.isEdit.isEdit);
  }
  emits("changeDialog", [personList.value, false]);
}
function Confirm() {
  formRef.value.validate((valid) => {
    if (valid) {
      console.log("Confirm", !props.isEdit.isEdit);
      if (!props.isEdit.isEdit) {
        addData();
      } else {
        // editData();
      }
    }
  });
}
function addData() {
  personList.value = [...persondata.value];
  console.log('---form and personList---',form.value,personList.value,personList.value.length);
  personList.value.push({ id: personList.value.length + 1, ...form.value });
  // console.log('---personList---',personList,personList.length);
  // store.commit("changeList", personList);
  // console.log("---count---", state.list);
  dialogFormVisible.dialogFormVisible = false;
  emits("changeDialog", [personList.value,false]);
  formRef.value.resetFields();
}
// function editData() {
//   console.log("---id and from ---", props.id, form.form);
//   let personList = state.list;
//   let index = personList.map((item) => item.id).indexOf(props.id);
//   console.log(
//     "---form and personList---",
//     form,
//     personList,
//     props.id,
//     index
//   );
//   personList.splice(index, 1, form.form);
//   // console.log('---personList---',personList,personList.length);
//   store.commit("changeList", personList);
//   // console.log("---count---", state.list);
//   dialogFormVisible.dialogFormVisible = false;
//   emits.emit("changeDialog", false);
// }
const getRowData = (row)=> {
  form.value = { ...row };
  console.log("---form111111---", form.value);
}


const getTypeData = () => {
  getTypeList().then((res) => {
    console.log('res:::', res);
    attributeList.value = res.data.data
  })
}
const getPersonData = () => {
  getPersonList().then((res) => {
    console.log('res:::', res);
    persondata.value = res.data.data
  })
}
onMounted(() => {
  getTypeData()
  getPersonData()
});
</script>

<style lang="less" scoped>
</style>