## MTable 表格

> MTable 组件可以满足多数后台系统
> 你可以把 MTable 组件当成 Form 组件使用，因为 MTable 集成了 Form 组件，table 组件，分页组件
> 当 table 组件交互比较复杂事，可以单独引入 table 组件，table 里需要使用 input，switch,按钮时，需要单独引入插槽，如下

## 基础使用

<MTableDemo />
```js
<template>
  <MTable
    :formColumns="formColumns"
    :columns="columns"
    :tableData="tableData"
    :pageInfo="pageInfo"
  />
</template>

<script setup>
import { MTable } from "el-table-jsx";

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
```

## 事件

| 事件名            | 说明                                                                                              | 出参                          |
| ----------------- | ------------------------------------------------------------------------------------------------- | ----------------------------- |
| onFormEvent       | Form 表单事件                                                                                     | e: {form, btnInfo}            |
| onResetSearch     | 重置搜索                                                                                          | Formb 表单默认值              |
| onRadioChange     | 单选框                                                                                            | e                             |
| inputBtnSearch    | input 右边插槽按钮事件                                                                            | val                           |
| resetModelForm    | 使用 ref 来调用子组件的 resetModelForm 方法`FormRef.value.resetModelForm()`，以达到清空数据的效果 |                               |
| onTableBtnEvent   | 操作栏按钮事件                                                                                    | e: {btn, colIdx, $index, row} |
| onTableInput      | input 事件                                                                                        | val， row                     |
| onSwitchChange    | switch 事件                                                                                       | bln, row                      |
| onSelectionChange | table 多选事件                                                                                    | row                           |
| onSortChange      | table 表头排序事件                                                                                | sort                          |
| rowItemEvent      | table 里的 a 标签                                                                                 | row                           |
| onRadioChange     | 单选框                                                                                            | e                             |
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
