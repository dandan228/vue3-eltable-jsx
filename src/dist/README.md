#### 为什么用*el-table-jsx*

> 当后台模块都需重复开发时，利用基于 Vue 3 和 Element Plus 的`JSX`封装组件，您只需专注于配置，无需处理内部逻辑。无论是表格`table`、表单`form`，还是对话框`dialog`等组件，统一管理和快速开发都变得异常简便！

**<span style="color:blue;">1. 先说说背景</span>**

- 后台大多数都是 table 表单，重复性的工作，根本提不起精神，就差睡着了
- 之前也封装了一个 table 组件，用的是 template 写法（[https://juejin.cn/post/7260783336217329724](https://)），但是当需求越复杂，用 template 就不灵活

**<span style="color:blue;">2. 上预览图，我将会持续更新</span>**
![示例图片](./public/image.png)

**<span style="color:blue;">3. 目录机构</span>**

```
 ├── src/
 │   ├── dist/
 │   │   ├── components/
 │   │   │   ├── MTable.jsx       # 合并所有组件
 │   │   │   ├── Form.jsx       # form表单
 │   │   │   ├── Paginate.jsx     # 分页
 │   │   │   ├── Table.jsx        # table
 │   │   │   ├── Dialog.jsx       # Dialog
 │   │   │   ├── index.js         # 导出组件
 │   ├── pages/
 │   │   ├── config.js            # 数据配置项
 │   │   ├── index.jsx            # 使用jsx引入table组件
 │   │   └── index.vue            # 使用template引入table组件
 │   ├── mock.jsx                 # mock数据
 │   └── App.jsx

```

**<span style="color:blue;">4. 重点看下`config.js`文件配置</span>**
![示例图片](./public/info.png)

**<span style="color:blue;">5. 使用方法</span>**

1. 安装依赖

```js
npm i el-table-jsx @vitejs/plugin-vue-jsx
```

1.1 vite.config.js 引入插件

```js
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";

export default defineConfig({
  plugins: [vue(), vueJsx()],
});
```

2. 引入组件（具体用法，可以看 src/pages/index.jsx, 或者 src/pages/index.vue）

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

3. `MTable`组件可以满足多数后台系统
- 你可以把MTable组件当成Form组件使用，因为MTable集成了Form组件，table组件，分页组件
- 当table组件交互比较复杂事，可以单独引入`table`组件，table 里需要使用 input，switch,按钮时，需要单独引入插槽，如下
   ![示例图片](./public/cc.jpg)

**<span style="color:blue;">6. Api</span>**

> 切记：当用 template 用法时，事件前缀不需要加 on

<span style="color:red;">MTable </span>
`事件`
| 事件名 | 说明 | 出参 |
|--------|------|------|
| onFormEvent | Form 表单事件 | e: {form, btnInfo} |
| onResetSearch | 重置搜索 | Formb 表单默认值 |
| onRadioChange | 单选框 | e |
| inputBtnSearch | input 右边插槽按钮事件 | val |
| resetModelForm | 使用 ref 来调用子组件的 resetModelForm 方法`FormRef.value.resetModelForm()`，以达到清空数据的效果 | |
| onTableBtnEvent | 操作栏按钮事件 | e: {btn, colIdx, $index, row} |
| onTableInput | input 事件 | val， row |
| onSwitchChange | switch 事件 | bln, row |
| onSelectionChange | table 多选事件 | row |
| onSortChange | table 表头排序事件 | sort |
| rowItemEvent | table 里的 a 标签 | row |
| onRadioChange | 单选框 | e |
| inputBtnSearch | input 右边插槽按钮事件 | val |
| onPageSizeEvent | 页容量事件 | pageSize |
| onPageEvent | 当前页事件 | pageNum |

`属性`
| 属性名 | 说明 | 默认值 | 类型 |
|--------|------|------|------|
| formColumns | formColumns | |
| inline | 行内表单模式 | true | boolean |
| labelWidth | 标签的长度，例如 '50'。 作为 Form 直接子元素的 form-item 会继承该值。 可以使用 auto | | number |
| labelPosition | 表单域标签的位置， 当设置为 left 或 right 时，则也需要设置 label-width 属性 | right | string |
| tableData | table 源数据 | [] | array |
| columns | columns | [] | array |
| tableMultiple | 多选 | false | boolean |
| btnByStateMapAt | columns 属性 key | | string |
| btnByStateMap | 根据状态 columns 属性 key，显示不同的按钮 | {} | object |
| defaultSort | 表头默认排序(是个对象) | {} | object |
| pageInfo | 分页信息 |        | object |
| shortcuts | 设置快捷选项，需要传入数组对象 | 不传默认展示last week, last month, last 3 month | object |

<span style="color:red;">Form</span>

`事件`
| 事件名 | 说明 | 出参 |
|--------|------|------|
| onFormEvent | Form 表单事件 | e: {form, btnInfo} |
| onResetSearch | 重置搜索 | Formb 表单默认值 |
| onRadioChange | 单选框 | e |
| inputBtnSearch | input 右边插槽按钮事件 | val |
| resetModelForm | 使用 ref 来调用子组件的 resetModelForm 方法`FormRef.value.resetModelForm()`，以达到清空数据的效果 | |

`属性`
| 属性名 | 说明 | 默认值 | 类型 |
|--------|------|------|------|
| formColumns | formColumns | |
| inline | 行内表单模式 | true | boolean |
| labelWidth | 标签的长度，例如 '50'。 作为 Form 直接子元素的 form-item 会继承该值。 可以使用 auto | | number |
| labelPosition | 表单域标签的位置， 当设置为 left 或 right 时，则也需要设置 label-width 属性 | right | string |
| shortcuts | 设置快捷选项，需要传入数组对象 | 不传默认展示last week, last month, last 3 month | object |

<span style="color:red;">table</span>

`事件`
| 事件名 | 说明 | 出参 |
|--------|------|------|
| onTableBtnEvent | 操作栏按钮事件 | e: {btn, colIdx, $index, row} |
| onTableInput | input 事件 | val， row |
| onSwitchChange | switch 事件 | bln, row |
| onSelectionChange | table 多选事件 | row |
| onSortChange | table 表头排序事件 | sort |
| rowItemEvent | table 里的 a 标签 | row |
| onRadioChange | 单选框 | e |
| inputBtnSearch | input 右边插槽按钮事件 | val |

`属性`
| 属性名 | 说明 | 默认值 | 类型 |
|--------|------|------|------|
| tableData | table 源数据 | [] | array |
| columns | columns | [] | array |
| tableMultiple | 多选 | false | boolean |
| btnByStateMapAt | columns 属性 key | | string |
| btnByStateMap | 根据状态 columns 属性 key，显示不同的按钮 | {} | object |
| defaultSort | 表头默认排序(是个对象) | {} | object |

<span style="color:red;">分页</span>

`事件`
| 事件名 | 说明 | 出参 |
|--------|------|------|
| onPageSizeEvent | 页容量事件 | pageSize |
| onPageEvent | 当前页事件 | pageNum |

`属性`

| 属性名   | 说明     | 默认值 | 类型   |
| -------- | -------- | ------ | ------ |
| pageInfo | 分页信息 |        | object |

<span style="color:red;">dialog</span>

> 注意：当使用 dialog 时，需要加上事件 onCloseDialog={() => {state.dialogVisible = false;}}， 否则第二次打不开弹窗

`事件`

| 属性名        | 说明              | 出参 |
| ------------- | ----------------- | ---- |
| onCloseDialog | Dialog 关闭的回调 |      |

`属性`

| 属性名        | 说明           | 默认值 | 类型    |
| ------------- | -------------- | ------ | ------- |
| dialogVisible | 是否显示对话框 | false  | boolean |
| title         | title          |        | string  |
| width         | width          |        | number  |



<span style="color:red;">formColumns 属性</span>
| 属性 | 说明 | 类型 | Default | 备注 |
|--------|------|------|------|------|
| prop | 选中项绑定值 | string |
| label | 选中项 label | string / number / boolean | |
| filterType | 组件类型 | string | | 当前组件有`input` `date` `select` `btn` |
| defaultVal | 选中项默认值 | string / number / boolean |
| option | 当 filterType='select'时，下拉框选项 | array |
| width | 宽度 | string |
| btnArr | 按钮组 | array |
| appendBtn | 当 filterType='input'时，开启 input 右边插槽按钮 | boolean |
| rules | 表单验证规则 | object |
| type | 类型 | string 等 <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types">原生 input 类型</a> |
| disabled | 是否禁用 | boolean |
| size | 输入框尺寸，只在 type 不为 'textarea' 时有效 | enum |
| placeholder | 输入框占位文本 | string |

**formColumns 属性示例**

```js
export const formColumns = [
  {
    prop: "state",
    label: "状态",
    filterType: "select",
    defaultVal: 0,
    width: "140",
    appendBtn: true,
    option: [
      { label: "全部", value: 0 },
      { label: "通过", value: 1 },
      { label: "取消", value: 2 },
      { label: "禁用", value: 3 },
    ],
  },
];
```

<span style="color:red;">columns 属性</span>
| 属性 | 说明 | 类型 | Default | 备注 |
|--------|------|------|------|------|
| prop | 选中项绑定值 | string |
| label | 选中项 label | string / number / boolean | |
| tableType | 组件类型 | string || 当前组件有`input` `switch` `img` `btn` |
| width | 宽度 | string |
| height | 高度 | string |
| btnArr | 按钮组 | array |
| sortable | 表头排序 | boolean |
| color | 字体颜色 | string |
| dict | 字典转义 | object |
| imgWidth | 图片宽度 | string |

**columns 属性示例**

```js
export const columns = [
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
    dict: {
      tag: true, // 启用标签
      dictMap: [
        { label: "全部", value: 0, color: "primary", size: "large" },
        { label: "取消", value: 2, color: "info", size: "small" },
      ],
    },
    btnArr: {
      label: "操作",
      tableType: "btn",
      btnArr: [
        { btnId: 0, label: "通过", color: "primary" },
        { btnId: 2, label: "禁用", color: "danger", disabled: true },
      ],
    },
  },
];
```
