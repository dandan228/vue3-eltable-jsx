<template>
  <div>
    <Dialog
      :dialogVisible="state.dialogVisible"
      @closeDialog="state.dialogVisible = false"
    >
      <Form></Form>
    </Dialog>
    <MTable
      :columns="columns"
      :formColumns="formColumns"
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
  </div>
</template>
<script>
name: "Index";
</script>
<script setup>
import { reactive } from "vue";
import { MTable, Dialog, Form } from "../dist/index.js";
import { columns, formColumns, btnByStateMap } from "./config.js";
import axiox from "axios";

const state = reactive({
  tableData: [],
  total: 0,
  pageInfo: {
    total: 0,
    pageSize: 5,
    pageNum: 1,
  },
  // 保存当前筛选参数
  lastFilter: {},
  dialogVisible: false,
});

const fetchTableData = async (params) => {
  axiox.post("/api/getList", params).then((res) => {
    const { data } = res;
    state.tableData = data.data.list;
    state.tableData.forEach(item => {
          item.name = `昵称: ${item.name}\n用户名: ${item.name}`
        })
    state.pageInfo.total = data.data.total;
  });
};

// 初始化数据
fetchTableData({});

const updateTableData = () => {
  fetchTableData({
    pageNum: state.pageInfo.pageNum,
    pageSize: state.pageInfo.pageSize,
    ...state.lastFilter,
  });
};

const formEvent = (e) => {
  // form=>操作栏form, btnInfo=》操作栏按钮信息
  const { form, btnInfo } = e;
  // console.log("form", form);
  // console.log("btnInfo", btnInfo);

  const eventsMap = {
    0: () => {
      // 保存当前筛选参数
      state.lastFilter = form;
      state.pageInfo.pageNum = 1;
      updateTableData();
    },
    1: () => {
      state.dialogVisible = true;
    },
  };

  eventsMap[btnInfo.btnId]();
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
const pageEvent = (pageNum) => {
  console.log("pageEvent", pageNum);
  // pageSize=>当前页
  state.pageInfo.pageNum = pageNum;
  updateTableData();
};

const resetSearch = (resetForm) => {
  state.pageInfo.pageNum = 1; // 重置页码为1
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
<style>
.el-table .cell {
  white-space: pre-line;
}
</style>
