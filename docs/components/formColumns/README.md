
<span style="color:red;">formColumns 属性</span>

| 属性 | 说明 | 类型 | 示例 | Default | 备注 |
|--------|------|------|------|------|------|
| prop | 选中项绑定值 | string |prop: "state"
| label | 选中项 label | string / number / boolean |label: "状态", |
| filterType | 组件类型 | string | filterType: "select"| 当前组件有`input` `date` `select` `btn` |
| defaultVal | 选中项默认值 | string / number / boolean |defaultVal: 0
| option | 当 `filterType='select'`时，下拉框选项 | array |option: [{ label: "全部", value: 0 }]
| width | 宽度 | string |width: "140"
| btnArr | 当 `filterType='btn'`时， 按钮组 | array | btnArr: [{ btnId: 0, label: "查询", color: "primary" }]
| prependIcon | 当 filterType='input'时，开启 input 前面 icon 插槽 | icon |
| prependTxt | 当 filterType='input'时，开启 input 前面 txt 插槽 | string |
| appendIcon | 当 filterType='input'时，开启 input 后面 icon 插槽 | `element-plus/icons-vue`组件 | import { `Search` } from "@element-plus/icons-vue"; appendIcon: shallowRef(`Search`)
| appendTxt | 当 filterType='input'时，开启 input 后面 txt 插槽 | string | appendTxt: '查询'
| rules | 表单验证规则 | object | rules: {required: true,message: 'msg',trigger: 'blur'}
| type | 类型 | string 等 <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types">原生 input 类型</a> | type='textarea'
| disabled | 是否禁用 | boolean | disabled: true
| size | 输入框尺寸，只在 type 不为 'textarea' 时有效 | enum | size: "large"
| placeholder | 输入框占位文本 | string |
| actionUrl | 当`filterType: "upload"`, upload上传地址 | string | actionUrl: 'actionUrl'
| listType | 当`filterType: "upload"` 文件列表的类型 | string | listType: 'picture-card' | listType: 'text'
| limit | 当`filterType: "upload"`, 允许上传文件的最大数量 | number | limit: 1 | 1
| fileList | 当`filterType: "upload"`, 默认上传文件 | array | [{name: 'name.jpeg',url: 'url'}]
| headers | 当`filterType: "upload"`, 设置上传的请求头部 | object |
