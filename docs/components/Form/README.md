## 基础使用

<FormDemo />

```js
<template>
    <Form
      :formColumns="formColumns"
    />
  </template>
  
  <script setup>
  import { Form } from "el-table-jsx";
  
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
  </script>
  
```
<!-- 
```js
import { defineComponent } from "vue";
import { MTable } from "el-table-jsx";

export default defineComponent({
  setup(props, { emit }) {
    return () => (
      <MTable
        formColumns={[
          {
            prop: "date",
            label: "Date",
            filterType: "date",
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
        ]}
      ></MTable>
    );
  },
});

``` -->

## 事件
| 事件名 | 说明 | 出参 |
|--------|------|------|
| onFormEvent | Form 表单事件 | e: {form, btnInfo} |
| onResetSearch | 重置搜索 | Formb 表单默认值 |
| onRadioChange | 单选框 | sour, e |
| onCheckboxChange | 多选框 | sour, e |
| onInputChange | 单选框 | sour, e |
| inputBtnSearch | input 右边插槽按钮事件 | sour, val, modelForm |
| imgSuccess | 文件上传成功时的钩子 | 接口返回的值(res), sour |
| imgRemove | 文件列表移除文件时的钩子 | uploadFile, uploadFiles, sour |
| imgPreview | 文件列表移除文件时的钩子 | uploadFile |
| beforeUpload | 上传文件之前的钩子，参数为上传的文件， 若返回false或者返回 Promise 且被 reject，则停止上传。 | rawFile, sour |
| inputBtnSearch | input 右边插槽按钮事件 |  |
| resetModelForm | 使用 ref 来调用子组件的 resetModelForm 方法`FormRef.value.resetModelForm()`，以达到清空数据的效果 | |

## 属性
| 属性名 | 说明 | 默认值 | 类型 |
|--------|------|------|------|
| formColumns | formColumns | |
| inline | 行内表单模式 | true | boolean |
| labelWidth | 标签的长度，例如 '50'。 作为 Form 直接子元素的 form-item 会继承该值。 可以使用 auto | | number |
| labelPosition | 表单域标签的位置， 当设置为 left 或 right 时，则也需要设置 label-width 属性 | right | string |
| shortcuts | 设置快捷选项，需要传入数组对象 | 不传默认展示 last week, last month, last 3 month | object |
| multiple | filterType为 select 设置 multiple 属性即可启用多选 | false | boolean |