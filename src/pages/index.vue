<template>
  <div>
    <Dialog
      :width="500"
      :dialogVisible="state.dialogVisible"
      :title="state.isAdd ? '新增' : '编辑'"
      @closeDialog="closeDialog"
    >
      <Form
        ref="refForm"
        :formColumns="state.dialogColumns"
        :inline="false"
        @imgSuccess="imgSuccess"
        @imgRemove="imgRemove"
        @beforeUpload="beforeUpload"
        @formEvent="diaFormEvent"
        @inputChange="inputChange"
      />
    </Dialog>
    <MTable
      :columns="columns"
      :formColumns="formColumns"
      :tableData="state.tableData"
      :pageInfo="state.pageInfo"
      :btnByStateMap="btnByStateMap"
      :tableIndex="true"
      btnByStateMapAt="state"
      @formEvent="formEvent"
      @tableBtnEvent="tableBtnEvent"
      @pageSizeEvent="pageSizeEvent"
      @pageEvent="pageEvent"
      @resetSearch="resetSearch"
      @tableInput="tableInput"
      @tableBlur="tableBlur"
      @switchChange="switchChange"
    />
  </div>
</template>

<script setup>
import { ref, reactive, onMounted, h } from "vue";
import { MTable, Dialog, Form } from "../dist/index.js";
import {
  columns,
  formColumns,
  btnByStateMap,
  dialogColumns,
} from "./config.js";
import { ElMessageBox } from "element-plus";
import axios from "axios";

const refForm = ref(null);

const state = reactive({
  // 0=>显示所有; 1=>通过; 2=>取消; 3=>禁用  tableData: [],
  pageInfo: {
    total: 0,
    pageSize: 5,
    pageNum: 1,
  },
  lastFilter: {},
  dialogVisible: false,
  dialogColumns,
  isAdd: true,
});

onMounted(() => {
  getList({});
});

const getList = async (params) => {
  const _params = {
    pageNum: state.pageInfo.pageNum,
    pageSize: state.pageInfo.pageSize,
    ...state.lastFilter,
    ...params,
  };
  try {
    const { data } = await axios.post("/api/getList", _params);
    state.tableData = data.data.list.map((item) => ({
      ...item,
      name: `昵称: ${item.name}\n用户名: ${item.name}`,
    }));
    state.pageInfo.total = data.data.total;
  } catch (error) {
    console.error("Error fetching list:", error);
  }
};

const formEvent = (e) => {
  // form=>操作栏form, btnInfo=》操作栏按钮信息
  const { form, btnInfo } = e;
  const actions = {
    0: () => {
      state.lastFilter = form;
      getList({ ...form, pageNum: 1 });
    },
    1: () => {
      state.isAdd = true;
      state.dialogVisible = true;
      state.dialogColumns[2].fileList = [];
    },
  };
  actions[btnInfo.btnId]?.();
};

const tableBtnEvent = (e) => {
  // btnIdx=>table栏，按钮对应的下标
  // colIdx=>table栏，当前列的索引
  // $index=>table栏，当前行下标
  // row=>table栏，当前行数据
  const {
    btn,
    scope: { $index, row },
  } = e;
  const actions = {
    0: () => rowDetails(btn, row),
    1: () => {
      state.isAdd = false;
      dialogFormDefaultValByRow(row);
      state.dialogVisible = true;
    },
    2: () => {},
    3: () => rowDetails(btn, row),
  };
  actions[btn.btnId]?.();
};

const dialogFormDefaultValByRow = (row) => {
  state.dialogColumns.forEach((item) => {
    if (item.prop && row.hasOwnProperty(item.prop)) {
      item.defaultVal = row[item.prop];
    }
  });
  state.dialogColumns[2].fileList = [{ url: row.imageUrl }];
};

const pageSizeEvent = (pageSize) => getList({ pageSize });

const pageEvent = (pageNum) => getList({ pageNum });

const resetSearch = (resetForm) => {
  state.lastFilter = {};
  getList({ pageNum: 1, pageSize: 5, ...resetForm });
};

const tableInput = (val, row) => {};

const tableBlur = (val, row) => {};

const imgSuccess = (res) => {
  // res=>接口返回的数据
  const defaultRes = {
    name: "图片",
    url: "https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100",
  };
  state.dialogColumns[2].fileList.push(defaultRes);
};

const imgRemove = (uploadFile, uploadFiles) => {
  state.changeDialogColumns[2].fileList = uploadFiles
}

const diaFormEvent = (e) => {
  const { btnInfo, formEl } = e;
  const actions = {
    0: () => (state.dialogVisible = false),
    1: () => {
      if (!formEl) return;
      formEl.value.validate((valid) => {
        if (valid) {
          state.dialogVisible = false;
        } else {
          console.log("error submit!");
        }
      });
    },
  };
  actions[btnInfo.btnId]?.();
};

const switchChange = (bln, row) => rowDetails(bln, row);

const rowDetails = (btnOrBln, row) => {
  const isBln = typeof btnOrBln === "boolean";
  ElMessageBox({
    title: isBln ? "switch" : btnOrBln.label,
    message: h("p", null, [
      h("span", null, isBln ? "当前值是：" : "当前按钮下标是："),
      h("span", { style: "color: teal" }, isBln ? btnOrBln : btnOrBln.btnId),
      h("br"),
      h("span", null, "当前row是："),
      h("i", { style: "color: teal" }, JSON.stringify(row)),
    ]),
  });
};

const closeDialog = () => {
  state.dialogVisible = false;
  state.dialogColumns[2].fileList = [];
  state.dialogColumns.forEach((item) => (item.defaultVal = null));
  // 清空默认值及及必填提示
  if (refForm.value) refForm.value.resetModelForm();
};

const inputChange = (sour, e) => {}

const beforeUpload = (rawFile, sour) => {
  if (rawFile.size / 1024 / 1024 > 1) {
    ElMessageBox({
      title: "upload",
      message: h("p", null, [
        h("span", "当前图片大小不能超过："),
        h("span", { style: "color: teal" }, '1mb'),
      ]),
    });
    return false
  }
}

</script>

<style>
.el-table .cell {
  white-space: pre-line;
}
</style>
