<template>
  <MTable
    :formColumns="formColumns"
    :columns="columns"
    :tableData="tableData"
    :pageInfo="pageInfo"
  />
</template>

<script setup>
import { MTable } from "../../../src/dist/index";

const formColumns = [
  {
    prop: "date",
    label: "Date",
    filterType: "date",
  },
  {
    prop: "name",
    label: "昵称",
    filterType: "input",
  },
  {
    prop: "state",
    label: "状态",
    filterType: "select",
    defaultVal: 0,
    width: "140",
    option: [
      { label: "全部", value: 0 },
      { label: "通过", value: 1 },
      { label: "取消", value: 2 },
      { label: "禁用", value: 3 },
    ],
  },
  {
    filterType: "btn",
    btnArr: [
      { btnId: 0, label: "查询", color: "primary" },
      { btnId: 1, label: "新增", color: "success" },
      { btnId: 2, label: "重置", color: "warning", disabled: true },
    ],
  },
];

const columns = [
  {
    prop: "date",
    label: "Date",
    sortable: true,
    width: "150",
  },
  {
    prop: "state",
    label: "状态",
    width: "150",
  },
  {
    label: "操作",
    tableType: "btn",
    width: "250",
    btnArr: [
      { btnId: 0, label: "通过", color: "primary" },
      { btnId: 2, label: "禁用", color: "danger", disabled: true },
    ],
  },
];

const tableData = [
  {
    date: "2027-07-14",
    state: "0",
  },
  {
    date: "2027-07-14",
    state: "1",
  },
];

const pageInfo = {
  total: 0,
  pageSize: 10,
  pageNum: 1,
};
</script>
<style>
.el-table__header,
.el-table__body {
  margin: 0;
}
.theme-default-content {
  max-width: none !important;
}
</style>
