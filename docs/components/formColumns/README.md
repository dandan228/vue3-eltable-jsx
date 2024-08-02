
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
| prependIcon | 当 filterType='input'时，开启 input 前面 icon 插槽 | icon |
| prependTxt | 当 filterType='input'时，开启 input 前面 txt 插槽 | string |
| appendIcon | 当 filterType='input'时，开启 input 后面 icon 插槽 | boolean |
| appendTxt | 当 filterType='input'时，开启 input 后面 txt 插槽 | string |
| rules | 表单验证规则 | object |
| type | 类型 | string 等 <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types">原生 input 类型</a> |
| disabled | 是否禁用 | boolean |
| size | 输入框尺寸，只在 type 不为 'textarea' 时有效 | enum |
| placeholder | 输入框占位文本 | string |
| actionUrl | 当filterType: "upload", upload上传地址 | string |
| listType | 当filterType: 文件列表的类型 | string |
| limit | 当filterType: "upload", 允许上传文件的最大数量 | number | 1
| fileList | 当filterType: "upload", 默认上传文件 | array |
| headers | 当filterType: "upload", 设置上传的请求头部 | object |

**formColumns 属性示例**

```js
export const formColumns = [
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
];
```