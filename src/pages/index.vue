<template>
  <MTable
    :columns="_columns"
    :filterForm="_filterForm"
    :tableData="state.tableData"
    :pageInfo="state.pageInfo"
    :formatBtnObj="_formatBtnObj"
    @handleFilterTable="handleFilterTable"
    @handleButtonClick="handleButtonClick"
    @handleSizeChange="handleSizeChange"
    @handlePageChange="handlePageChange"
    @resetFilterTable="resetFilterTable"
  />
</template>
<script>
name: "Index";
</script>
<script setup>
import { reactive } from "vue";
import MTable from "../components/mTable.jsx";
import { _columns, _data, _filterForm, _formatBtnObj } from "./config.js";
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

const handleFilterTable = (e) => {
  // search=>操作栏form, btnInfo=》操作栏按钮信息
  const { search, btnInfo } = e;
  console.log("handleFilterTable", e);
  // 保存当前筛选参数
  state.lastFilter = search;
  updateTableData();
};

const handleButtonClick = (e) => {
  // btnIdx=>table栏，按钮对应的下标
  // colIdx=>table栏，当前列的索引
  // $index=>table栏，当前行下标
  // row=>table栏，当前行数据
  const {
    btnIdx,
    colIdx,
    scope: { $index, row },
  } = e;
  console.log("handleButtonClick", e);
};

const handleSizeChange = (pageSize) => {
  console.log("handleSizeChange", pageSize);
  // pageSize=>页容量
  state.pageInfo.pageSize = pageSize;
  updateTableData();
};
const handlePageChange = (page) => {
  console.log("handlePageChange", page);
  // pageSize=>当前页
  state.pageInfo.page = page;
  updateTableData();
};

const resetFilterTable = (resetForm) => {
  state.lastFilter = resetForm;
  updateTableData();
};
</script>
