export const formColumns = [
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
            { btnId: 2, label: "重置", color: "warning" },
        ],
    },
];

export const dialogColumns = [
    {
        prop: "date",
        label: "Date",
        filterType: "date",
    },
    {
        prop: "name",
        label: "昵称",
        filterType: "input",
        appendTxt: '查询',
        rules: {
            required: true,
            message: 'domain can not be null',
            trigger: 'blur',
        },
    },
    {
        prop: "pic",
        label: "上传图片",
        filterType: "upload",
        limit: 1,
        actionUrl: ''
    },
    {
        prop: "radio",
        label: "单选框",
        filterType: "radio",
        defaultVal: 1,
        radioArr: [
            {
                value: 0,
                label: "单选框1",
                size: "large",
            },
            {
                value: 1,
                label: "单选框2",
                size: "small",
            },
        ],
    },
    {
        prop: "checkbox",
        label: "多选框",
        filterType: "checkbox",
        defaultVal: [0],
        checkboxArr: [
            {
                value: 0,
                label: "多选框1",
                size: "large",
            },
            {
                value: 1,
                label: "多选框2",
                size: "small",
            },
        ],
    },
    {
        prop: "state",
        label: "状态",
        filterType: "select",
        defaultVal: 0,
        width: "440",
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
            { btnId: 0, label: "取消", color: "" },
            { btnId: 1, label: "确定", color: "primary" },
        ],
    },
];

export const columns = [
    {
        prop: "date",
        label: "Date",
        width: "280",
        sortable: true,
    },
    {
        prop: "name",
        label: "昵称/用户名",
        width: "220",
        color: "blue",
    },
    {
        prop: "state",
        label: "状态",
        width: "180",
        dict: {
            tag: true,
            dictMap: [
                { label: "全部", value: 0, color: "primary", size: "large" },
                { label: "通过", value: 1, color: "success", size: "" },
                { label: "取消", value: 2, color: "info", size: "small" },
                { label: "禁用", value: 3, color: "danger", size: "small" },
            ],
        },
    },
    {
        prop: "input",
        label: "input",
        width: "180",
        tableType: "input",
    },
    {
        prop: "isTrue",
        label: "开关",
        tableType: "switch",
        width: "80",
    },
    {
        prop: "imageUrl",
        label: "图片",
        tableType: "img",
        width: "150",
        imgWidth: "80",
    },
    {
        label: "操作",
        tableType: "btn",
        btnArr: [
            { btnId: 0, label: "通过", color: "primary" },
            { btnId: 1, label: "取消", color: "danger" },
            { btnId: 2, label: "禁用", color: "danger", disabled: true },
            { btnId: 3, label: "编辑", color: "success" },
        ],
    },
];

// 根据状态不通，显示不同的按钮，0=》table里的props的值
export const btnByStateMap = {
    0: [
        { btnId: 0, label: "通过", color: "primary" },
        { btnId: 1, label: "编辑", color: "success" },
        { btnId: 2, label: "禁用", color: "warning", disabled: true },
        { btnId: 3, btnId: 3, label: "取消", color: "danger" },
    ],
    1: [
        { btnId: 0, label: "通过", color: "primary" },
        { btnId: 1, label: "编辑", color: "success" },
    ],
    2: [
        { btnId: 3, label: "取消", color: "danger" },
        { btnId: 1, label: "编辑", color: "success" },
    ],
    3: [
        { btnId: 1, label: "编辑", color: "success" },
        { btnId: 2, label: "禁用", color: "warning", disabled: true },
    ],
};

export const _tableData = [
    {
        "date": [
            "2024-05-02",
            "2024-05-03"
        ],
        "name": "Betty Anderson",
        "state": 3,
        "btn": "按钮3",
        "isTrue": false,
        "imageUrl": "http://dummyimage.com/200x100/797df2&text=el-table-jsx"
    },
    {
        "date": [
            "2024-05-02",
            "2024-05-03"
        ],
        "name": "Daniel Young",
        "state": 3,
        "btn": "按钮2",
        "isTrue": false,
        "imageUrl": "http://dummyimage.com/200x100/a1f279&text=el-table-jsx"
    },
    {
        "date": [
            "2024-05-02",
            "2024-05-03"
        ],
        "name": "Susan Perez",
        "state": 2,
        "btn": "按钮3",
        "isTrue": false,
        "imageUrl": "http://dummyimage.com/200x100/f279c4&text=el-table-jsx"
    },
    {
        "date": [
            "2024-05-02",
            "2024-05-03"
        ],
        "name": "Scott Gonzalez",
        "state": 0,
        "btn": "按钮2",
        "isTrue": false,
        "imageUrl": "http://dummyimage.com/200x100/79e7f2&text=el-table-jsx"
    },
    {
        "date": [
            "2024-05-02",
            "2024-05-03"
        ],
        "name": "Karen Hernandez",
        "state": 0,
        "btn": "按钮2",
        "isTrue": false,
        "imageUrl": "http://dummyimage.com/200x100/f2d979&text=el-table-jsx"
    }
]
