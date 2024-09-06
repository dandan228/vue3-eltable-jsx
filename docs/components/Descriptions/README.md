## 基础使用

<DescriptionsDemo />

::: code-tabs#shell

@tab Descriptions.vue

```vue
<template>
<template>
  <Descriptions
    :desInfo="state.desInfo"
    :column="4"
    :key="state.key"
    @desRightClick="desRightClick"
    @selectChange="selectChange"
  ></Descriptions>
</template>

<script setup>
import { reactive, onMounted, h } from "vue";
import { ElMessageBox } from "element-plus";
import { Descriptions } from "../../../src/dist/index";
import { desInfo } from "./config.js";

const state = reactive({
  data: {},
  key: 1,
  desInfo: {},
});

onMounted(() => {
  state.data = { tip: 666 };
  state.desInfo = desInfo(state.data);
  state.key = 2;
});

const desRightClick = (item) => {
  ElMessageBox({
    title: "修改",
    message: h("p", null, [
      h("span", null, "当前源是："),
      h("i", { style: "color: teal" }, JSON.stringify(item)),
    ]),
  });
};

const selectChange = (sour, val) => {
  ElMessageBox({
    title: "select",
    message: h("p", null, [
      h("span", "当前值是："),
      h("span", { style: "color: teal" }, val),
      h("br"),
      h("span", null, "当前row是："),
      h("i", { style: "color: teal" }, JSON.stringify(sour)),
    ]),
  });
};
</script>


```

@tab config.js

```bash

import { QuestionFilled } from "@element-plus/icons-vue";
import { markRaw } from 'vue';

export const desInfo = data => {
    return {
        title: '概要消息',
        desArr: [
            {
                label: '提示',
                val: data.tip,
                btn: {
                    type: "primary",
                    link: true,
                    txt: "修改"
                },
                tooltipInfo: {
                    icon: markRaw(QuestionFilled),
                    content: '提示'
                },
                componentType: 'select',
                option: [
                    { label: "全部", value: 0 },
                    { label: "通过", value: 1 },
                    { label: "取消", value: 2 },
                    { label: "禁用", value: 3 },
                ],
                defaultVal: 0,
            },
            {
                label: '提示',
                val: '2',
                btn: {
                    type: "primary",
                    link: true,
                    txt: "修改"
                },
            },
            {
                label: '提示',
                val: '3',
            },
            {
                label: '提示',
                val: '4',
            },
            {
                label: '提示',
                val: '5',
            },
        ]
    };
};

```

:::

<!-- 
```js
import { defineComponent } from "vue";
import { Descriptions } from "el-table-jsx";
import { QuestionFilled } from "@element-plus/icons-vue";

export default defineComponent({
  setup(props, { emit }) {
    const desRightClick = (item) => {
      console.log("desRightClick", item);
    };

    return () => (
      <Descriptions
        title={"描述信息"}
        width={500}
        desInfo={{
          title: "概要消息",
          desArr: [
            {
              label: "提示",
              val: "1",
              btn: {
                type: "primary",
                link: true,
                txt: "修改",
              },
              tooltipInfo: {
                icon: QuestionFilled,
                content: "提示",
              },
            },
            {
              label: "提示",
              val: "2",
              btn: {
                type: "primary",
                link: true,
                txt: "修改",
              },
            },
            {
              label: "提示",
              val: "3",
            },
            {
              label: "提示",
              val: "4",
            },
            {
              label: "提示",
              val: "5",
            },
          ],
        }}
        column={2}
        onDesRightClick={desRightClick}
      ></Descriptions>
    );
  },
});

``` -->

## 事件

| 属性名        | 说明          | 出参 |
| ------------- | ------------- | ---- |
| desRightClick | desRightClick |      |
| selectChange | selectChange |  sour, e    |

## 属性

| 属性名  | 说明                          | 默认值 | 类型   |
| ------- | ----------------------------- | ------ | ------ |
| desInfo | Descriptions 配置             | {}     | object |
| column  | 一行 Descriptions Item 的数量 | 3      | number |