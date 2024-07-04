#### 为什么用*el-table-jsx*
>使用jsx编写，search，table, 分页组件，对于常见的搜索栏需要保留上次参数，table里的操作按钮需要根据状态显示不同的按钮及是否禁用，都可以通过配置来轻易解决，还支持template，jsx引用组件

**<span style="color:blue;">1. 先说说背景</span>**
   
   - 后台大多数都是table表单，重复性的工作，根本提不起精神，就差睡着了
   - 之前也封装了一个table组件，用的是template写法（[https://juejin.cn/post/7260783336217329724](https://)），但是当需求越复杂，用template就不灵活

**<span style="color:blue;">2. 上预览图，第一版就是目前看到的这些功能，要是有空，后续继续完善</span>**
![示例图片](./public/image.png)

**<span style="color:blue;">3. 目录机构</span>**
  ```
   ├── src/
   │   ├── dist/
   │   │   ├── components/          
   │   │   │   ├── mTable.jsx       # 合并Search，table,paginate
   │   │   │   ├── Search.jsx       # 表单操作栏
   │   │   │   ├── paginate.jsx     # 分页
   │   │   │   ├── table.jsx        # table
   │   │   └── index.js             # 导出组件
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

1.1 vite.config.js引入插件

```html
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

export default defineConfig({
  plugins: [vue(), vueJsx()],
})

```
2. 引入组件（具体用法，可以看src/pages/index.jsx, 或者src/pages/index.vue）
```js
// 这是template用法
<template>
  <MTable
    :columns="columns"
    :data="state.tableData"
    :pageInfo="{
      total: 0,
      page: 1,
      pageSize: 10,
    }"
  />
</template>

// MTable= Search + Table + Pagination
import { MTable, Search, Table, Pagination } from "el-table-jsx";



// 这是jsx用法
return () => (
      <MTable
        columns={columns}
        searchColumns={searchColumns}
        tableData={state.tableData}
        pageInfo={state.pageInfo}
        btnByStateMap={btnByStateMap}
        btnByStateMapAt={"state"}
        tableMultiple
        onFormEvent={formEvent}
        onTableBtnEvent={tableBtnEvent}
        onPageSizeEvent={pageSizeEvent}
        onPageEvent={pageEvent}
        onResetSearch={resetSearch}
        onTableInput={tableInput}
        onTableBlur={tableBlur}
        onSelectCheckbox={selectCheckbox}
        onSwitchChange={switchChange}
      />
    );
```
3. 当单独使用`table`组件，table里需要使用input，switch,按钮时，需要单独引入插槽，如下
![示例图片](./public/cc.jpg)


**<span style="color:blue;">6. Api</span>**
>切记：当用template用法时，事件前缀不需要加on

 <span style="color:red;">searchForm表格操作栏</span>

`事件`
| 事件名   | 说明 | 出参 |
|--------|------|------|
| onFormEvent   | searchForm按钮事件   | e: {search, btnInfo}   |
| onResetSearch   | 重置搜索   | resetForm |

`属性`
| 属性名   | 说明 | 出参 |
|--------|------|------|
| searchColumns   | searchColumns   |  |

<span style="color:red;">table</span>

`事件`
| 事件名   | 说明 | 出参 |
|--------|------|------|
| onTableBtnEvent   | 操作栏按钮事件   | e: {btnIdx, colIdx, $index, row}   |
| onTableInput   | input事件   | val， row |
| onSwitchChange   | switch事件   | bln, row |
| onSelectionChange   | table多选事件   | row |

`属性`
| 属性名   | 说明 | 出参 |
|--------|------|------|
| tableData   | table源数据   |  |
| columns   | columns   |  |
| tableMultiple   | 多选   |  |
| btnByStateMapAt   |  columns属性key  |  |
| btnByStateMap   | 根据状态columns属性key，显示不同的按钮   |  |

<span style="color:red;">分页</span>

`事件`
| 事件名   | 说明 | 出参 |
|--------|------|------|
| onPageSizeEvent   | 页容量事件   | pageSize   |
| onPageEvent   | 当前页事件   | page |

`属性`

| 属性名   | 说明 | 出参 |
|--------|------|------|
| pageInfo   | 分页信息   |  |