
## 为什么用*el-table-jsx*

> 当后台模块都需重复开发时，利用基于 Vue 3 和 Element Plus 的`JSX`封装组件，您只需专注于配置，无需处理内部逻辑。无论是表格`table`、表单`form`，还是对话框`dialog`等组件，统一管理和快速开发都变得异常简便！

### 先说说背景

- 后台大多数都是 table 表单，重复性的工作，根本提不起精神，就差睡着了
- 之前也封装了一个 table 组件，用的是 template 写法（[https://juejin.cn/post/7260783336217329724](https://)），但是当需求越复杂，用 template 就不灵活


### 目录机构

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