<template>
  <MTable
    :columns="columns"
    :searchForm="searchForm"
    :tableData="state.tableData"
    :pageInfo="state.pageInfo"
    :btnByStateMap="btnByStateMap"
    btnByStateMapAt="state"
    @formEvent="formEvent"
    @tableBtnEvent="tableBtnEvent"
    @pageSizeEvent="pageSizeEvent"
    @pageEvent="pageEvent"
    @resetSearch="resetSearch"
    @tableInput="tableInput"
    @tableBlur="tableBlur"
  />
</template>
<script>
name: "Index";
</script>
<script setup>
import { reactive } from "vue";
import MTable from "../components/mTable.jsx";
import { columns, searchForm, btnByStateMap } from "./config.js";
import axiox from "axios";

const state = reactive({
  tableData: [],
  total: 0,
  pageInfo: {
    total: 0,
    pageSize: 5,
    page: 1,
  },
  // 保存当前筛选参数
  lastFilter: {},
});

const fetchTableData = async (params) => {
  axiox.post("/api/getList", params).then((res) => {
    const { data } = res;
    state.tableData = data.data.list;
    state.pageInfo.total = data.data.total;
  });
};

// 初始化数据
fetchTableData({});

const updateTableData = () => {
  fetchTableData({
    page: state.pageInfo.page,
    pageSize: state.pageInfo.pageSize,
    ...state.lastFilter,
  });
};

const formEvent = (e) => {
  // search=>操作栏form, btnInfo=》操作栏按钮信息
  const { search, btnInfo } = e;
  console.log("search-------", search);
  state.pageInfo.page = 1;
  // 保存当前筛选参数
  state.lastFilter = search;
  updateTableData();
};

const tableBtnEvent = (e) => {
  // btnIdx=>table栏，按钮对应的下标
  // colIdx=>table栏，当前列的索引
  // $index=>table栏，当前行下标
  // row=>table栏，当前行数据
  const {
    btnIdx,
    colIdx,
    scope: { $index, row },
  } = e;
  console.log("tableBtnEvent", e);
};

const pageSizeEvent = (pageSize) => {
  console.log("pageSizeEvent", pageSize);
  // pageSize=>页容量
  state.pageInfo.pageSize = pageSize;
  updateTableData();
};
const pageEvent = (page) => {
  console.log("pageEvent", page);
  // pageSize=>当前页
  state.pageInfo.page = page;
  updateTableData();
};

const resetSearch = (resetForm) => {
  state.pageInfo.page = 1; // 重置页码为1
  state.pageInfo.pageSize = 5; // 重置页容量为5
  state.lastFilter = resetForm;
  updateTableData();
};

const tableInput = (val, row) => {
  // val=>当前值
  // row=>当前这一行数据
};

const tableBlur = (val, row) => {};
</script>
