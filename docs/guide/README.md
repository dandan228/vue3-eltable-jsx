---
sidebar: auto
---


## 安装依赖

::: code-tabs#shell

@tab:active npm

```bash
npm i -D el-table-jsx @vitejs/plugin-vue-jsx
```

@tab yarn

```bash
yarn add -D el-table-jsx @vitejs/plugin-vue-jsx
```

:::


## vite.config.js 引入插件

```js
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";

export default defineConfig({
  plugins: [vue(), vueJsx()],
});
```

## 引入组件

### template用法
```js
// template用法
<template>
  <MTable :columns="columns" :tableData="tableData" />
</template>
<script setup>
import { MTable } from 'el-table-jsx'

const columns = [
  {
    prop: "date",
    label: "Date",
    width: "280",
    sortable: true,
  },
  {
    prop: "name",
    label: "昵称",
    width: "180",
    color: "blue",
  },
]

const tableData = [
  {
    data: '2020-09-01',
    name: '张三'
  },
  {
    data: '2020-09-02',
    name: '李四'
  }
]
</script>
```

### jsx用法
```js
// jsx用法
import { defineComponent, reactive } from "vue";
import { MTable } from "el-table-jsx";

const columns = [
  {
    prop: "date",
    label: "Date",
    width: "280",
    sortable: true,
  },
  {
    prop: "name",
    label: "昵称",
    width: "180",
    color: "blue",
  },
];

const tableData = [
  {
    date: "2020-09-01",
    name: "张三",
  },
  {
    date: "2020-09-02",
    name: "李四",
  },
];

defineComponent({
  name: "TableComponent",
  setup() {
    const state = reactive({
      columns,
      tableData,
    });

    return () => <MTable columns={state.columns} tableData={state.tableData} />;
  },
});
```
