## MTable 表格

> MTable 组件可以满足多数后台系统
> 你可以把 MTable 组件当成 Form 组件使用，因为 MTable 集成了 Form 组件，table 组件，分页组件
> 当 table 组件交互比较复杂事，可以单独引入 table 组件，table 里需要使用 input，switch,按钮时，需要单独引入插槽，如下

## 基础使用

<MTableDemo />

::: code-tabs#shell

@tab MTable.vue

```vue
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
        @formEvent="diaFormEvent"
      />
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
      @switchChange="switchChange"
    />
  </div>
</template>

<script setup>
import { ref, reactive, onMounted, h } from "vue";
import { MTable, Dialog, Form } from "el-table-jsx";
import {
  columns,
  formColumns,
  btnByStateMap,
  dialogColumns,
  _tableData,
} from "./config.js";
import { ElMessageBox } from "element-plus";

const refForm = ref(null);

const state = reactive({
  // 0=>显示所有; 1=>通过; 2=>取消; 3=>禁用
  tableData: [],
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
    // let { data } = await axios.post("/api/getList", _params);
    state.tableData = _tableData.map((item) => ({
      ...item,
      name: `昵称: ${item.name}\n用户名: ${item.name}`,
    }));

    state.pageInfo.total = _tableData.length;
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
      state.dialogColumns.forEach((item) => (item.defaultVal = null));
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
  if (refForm.value) refForm.value.resetModelForm();
};
</script>

<style>
.el-table .cell {
  white-space: pre-line;
}
</style>
```

@tab config.js

```bash
export const formColumns = [
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
            { btnId: 2, label: "重置", color: "warning" },
        ],
    },
];

export const dialogColumns = [
    {
        prop: "date",
        label: "Date",
        filterType: "date",
    },
    {
        prop: "name",
        label: "昵称",
        filterType: "input",
        appendTxt: '查询',
        rules: {
            required: true,
            message: 'domain can not be null',
            trigger: 'blur',
        },
    },
    {
        prop: "pic",
        label: "上传图片",
        filterType: "upload",
        limit: 1,
        actionUrl: ''
    },
    {
        prop: "radio",
        label: "单选框",
        filterType: "radio",
        defaultVal: 1,
        radioArr: [
            {
                value: 0,
                label: "单选框1",
                size: "large",
            },
            {
                value: 1,
                label: "单选框2",
                size: "small",
            },
        ],
    },
    {
        prop: "state",
        label: "状态",
        filterType: "select",
        defaultVal: 0,
        width: "440",
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
            { btnId: 0, label: "取消", color: "" },
            { btnId: 1, label: "确定", color: "primary" },
        ],
    },
];

export const columns = [
    {
        prop: "date",
        label: "Date",
        width: "280",
        sortable: true,
    },
    {
        prop: "name",
        label: "昵称/用户名",
        width: "220",
        color: "blue",
    },
    {
        prop: "state",
        label: "状态",
        width: "180",
        dict: {
            tag: true,
            dictMap: [
                { label: "全部", value: 0, color: "primary", size: "large" },
                { label: "通过", value: 1, color: "success", size: "" },
                { label: "取消", value: 2, color: "info", size: "small" },
                { label: "禁用", value: 3, color: "danger", size: "small" },
            ],
        },
    },
    {
        prop: "input",
        label: "input",
        width: "180",
        tableType: "input",
    },
    {
        prop: "isTrue",
        label: "开关",
        tableType: "switch",
        width: "80",
    },
    {
        prop: "imageUrl",
        label: "图片",
        tableType: "img",
        width: "150",
        imgWidth: "80",
    },
    {
        label: "操作",
        tableType: "btn",
        btnArr: [
            { btnId: 0, label: "通过", color: "primary" },
            { btnId: 1, label: "取消", color: "danger" },
            { btnId: 2, label: "禁用", color: "danger", disabled: true },
            { btnId: 3, label: "编辑", color: "success" },
        ],
    },
];

// 根据状态不通，显示不同的按钮，0=》table里的props的值
export const btnByStateMap = {
    0: [
        { btnId: 0, label: "通过", color: "primary" },
        { btnId: 1, label: "编辑", color: "success" },
        { btnId: 2, label: "禁用", color: "warning", disabled: true },
        { btnId: 3, btnId: 3, label: "取消", color: "danger" },
    ],
    1: [
        { btnId: 0, label: "通过", color: "primary" },
        { btnId: 1, label: "编辑", color: "success" },
    ],
    2: [
        { btnId: 3, label: "取消", color: "danger" },
        { btnId: 1, label: "编辑", color: "success" },
    ],
    3: [
        { btnId: 1, label: "编辑", color: "success" },
        { btnId: 2, label: "禁用", color: "warning", disabled: true },
    ],
};

export const _tableData = [
    {
        "date": [
            "2024-05-02",
            "2024-05-03"
        ],
        "name": "Betty Anderson",
        "state": 3,
        "btn": "按钮3",
        "isTrue": false,
        "imageUrl": "http://dummyimage.com/200x100/797df2&text=el-table-jsx"
    },
    {
        "date": [
            "2024-05-02",
            "2024-05-03"
        ],
        "name": "Daniel Young",
        "state": 3,
        "btn": "按钮2",
        "isTrue": false,
        "imageUrl": "http://dummyimage.com/200x100/a1f279&text=el-table-jsx"
    },
    {
        "date": [
            "2024-05-02",
            "2024-05-03"
        ],
        "name": "Susan Perez",
        "state": 2,
        "btn": "按钮3",
        "isTrue": false,
        "imageUrl": "http://dummyimage.com/200x100/f279c4&text=el-table-jsx"
    },
    {
        "date": [
            "2024-05-02",
            "2024-05-03"
        ],
        "name": "Scott Gonzalez",
        "state": 0,
        "btn": "按钮2",
        "isTrue": false,
        "imageUrl": "http://dummyimage.com/200x100/79e7f2&text=el-table-jsx"
    },
    {
        "date": [
            "2024-05-02",
            "2024-05-03"
        ],
        "name": "Karen Hernandez",
        "state": 0,
        "btn": "按钮2",
        "isTrue": false,
        "imageUrl": "http://dummyimage.com/200x100/f2d979&text=el-table-jsx"
    }
]

```

:::

## 事件

| 事件名            | 说明                                                                                              | 出参                          |
| ----------------- | ------------------------------------------------------------------------------------------------- | ----------------------------- |
| onFormEvent       | Form 表单事件                                                                                     | e: {form, btnInfo}            |
| onResetSearch     | 重置搜索                                                                                          | Formb 表单默认值              |
| inputBtnSearch    | input 右边插槽按钮事件                                                                            | val                           |
| resetModelForm    | 使用 ref 来调用子组件的 resetModelForm 方法`FormRef.value.resetModelForm()`，以达到清空数据的效果 |                               |
| onTableBtnEvent   | 操作栏按钮事件                                                                                    | e: {btn, colIdx, $index, row} |
| onTableInput      | input 事件                                                                                        | val， row                     |
| onSwitchChange    | switch 事件                                                                                       | bln, row                      |
| onSelectionChange | table 多选事件                                                                                    | row                           |
| onSortChange      | table 表头排序事件                                                                                | sort                          |
| rowItemEvent      | table 里的 a 标签                                                                                 | row                           |
| onRadioChange     | 单选框                                                                                            | sour, e                         |
| onInputChange     | input事件                                                                                            | sour, e                         |
| inputBtnSearch    | input 右边插槽按钮事件                                                                            | val                           |
| onPageSizeEvent   | 页容量事件                                                                                        | pageSize                      |
| onPageEvent       | 当前页事件                                                                                        | pageNum                       |

## 属性

| 属性名          | 说明                                                                                | 默认值                                           | 类型    |
| --------------- | ----------------------------------------------------------------------------------- | ------------------------------------------------ | ------- |
| formColumns     | formColumns                                                                         |                                                  |
| inline          | 行内表单模式                                                                        | true                                             | boolean |
| labelWidth      | 标签的长度，例如 '50'。 作为 Form 直接子元素的 form-item 会继承该值。 可以使用 auto |                                                  | number  |
| labelPosition   | 表单域标签的位置， 当设置为 left 或 right 时，则也需要设置 label-width 属性         | right                                            | string  |
| tableData       | table 源数据                                                                        | []                                               | array   |
| columns         | columns                                                                             | []                                               | array   |
| tableMultiple   | 多选                                                                                | false                                            | boolean |
| btnByStateMapAt | columns 属性 key                                                                    |                                                  | string  |
| btnByStateMap   | 根据状态 columns 属性 key，显示不同的按钮                                           | {}                                               | object  |
| defaultSort     | 表头默认排序(是个对象)                                                              | {}                                               | object  |
| pageInfo        | 分页信息                                                                            |                                                  | object  |
| shortcuts       | 设置快捷选项，需要传入数组对象                                                      | 不传默认展示 last week, last month, last 3 month | object  |
| tableIndex      | 设置 tableIndex 属性为 true 即可显示从 1 开始的索引号                               | false                                            | boolean |
