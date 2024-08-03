## 基础使用

> 注意：第二次打不开，需要手动添加事件（@closeDialog="state.passDialogVisible = false"）

> 当关闭弹框，需要清空Form表单值时，绑定ref，调用组件内部的回调方法resetModelForm即可清空

<DialogDemo />

```js
<template>
  <div>
    <Dialog
      :dialogVisible="state.dialogVisible"
      title="对话框"
      width="500"
      @close="closeDialog"
    >
      <Form
        ref="refForm"
        :labelWidth="80"
        :formColumns="state.formColumns"
        :inline="false"
      />
    </Dialog>
    <el-button @click="state.dialogVisible = true">打开对话框</el-button>
  </div>
</template>

<script setup>
import { Dialog, Form } from "../../../src/dist/index";
import { reactive, ref } from "vue";

const refForm = ref(null);

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
      option: [
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

const closeDialog = () => {
  state.dialogVisible = false
  if (refForm.value) {
    refForm.value.resetModelForm();
  }
};
</script>


```

<!--
```js
import { defineComponent } from "vue";
import { Dialog, Form } from "el-table-jsx";

export default defineComponent({
  setup(props, { emit }) {
    return () => (
      <div>
        <Dialog
          dialogVisible={true}
          title={"对话框"}
          width={500}
        >
          <Form
            labelWidth={80}
            formColumns={[
                {
                    prop: "name",
                    label: "昵称",
                    filterType: "input",
                    rules: {
                        required: true,
                        message: 'domain can not be null',
                        trigger: 'blur',
                    }
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
                    ],
                },
                {
                    filterType: "btn",
                    btnArr: [
                        { btnId: 0, label: "取消", color: "primary" },
                        { btnId: 1, label: "确定", color: "success" },
                    ],
                },
            ]}
            inline={false}
          />
        </Dialog>
      </div>
    );
  },
});

``` -->

## 事件

| 属性名        | 说明              | 出参 |
| ------------- | ----------------- | ---- |
| onCloseDialog | Dialog 关闭的回调 |      |

## 属性

| 属性名        | 说明           | 默认值 | 类型    |
| ------------- | -------------- | ------ | ------- |
| dialogVisible | 是否显示对话框 | false  | boolean |
| title         | title          |        | string  |
| width         | width          |        | number  |
