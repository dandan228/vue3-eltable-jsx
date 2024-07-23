<template>
  <div>
    <Dialog
      :dialogVisible="state.dialogVisible"
      title="对话框"
      width="500"
      @close="state.dialogVisible = false"
    >
      <Form :labelWidth="80" :formColumns="state.formColumns" :inline="false" />
    </Dialog>
    <el-button @click="state.dialogVisible = true">打开对话框</el-button>
  </div>
</template>

<script setup>
import { Dialog, Form } from "../../../src/dist/index";
import { reactive } from "vue";

const state = reactive({
  dialogVisible: false,
  formColumns: [
    {
      prop: "name",
      label: "昵称",
      filterType: "input",
      rules: {
        required: true,
        message: "昵称不能为空",
        trigger: "blur",
      },
    },
    {
      prop: "state",
      label: "状态",
      filterType: "select",
      defaultVal: 0,
      width: "140",
      options: [
        { label: "全部", value: 0 },
        { label: "通过", value: 1 },
      ],
    },
    {
      filterType: "btn",
      btnArr: [
        { btnId: 0, label: "取消", color: "primary" },
        { btnId: 1, label: "确定", color: "success" },
      ],
    },
  ],
});
</script>
