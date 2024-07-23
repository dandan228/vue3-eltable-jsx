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