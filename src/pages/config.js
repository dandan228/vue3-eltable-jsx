import { h } from "vue";

export const tableData = [
    // 0=>显示所有; 1=>通过; 2=>取消; 3=>禁用
    { date: "date", name: "John", state: 0, btn: "按钮1" },
    { date: "date1", name: "Jane", state: 1, btn: "按钮2" },
    { date: "date1", name: "Jane", state: 2, btn: "按钮3" },
    { date: "da2te1", name: "Jan23e", state: 3, btn: "按钮4" },
];

export const searchColumns = [
    {
        prop: 'date',
        label: 'Date',
        filterType: 'date',
    },
    {
        prop: 'name',
        label: '昵称',
        filterType: 'input',
    },
    {
        prop: 'state',
        label: '状态',
        filterType: 'select',
        defaultVal: 0,
        width: '140',
        option: [
            { label: '全部', value: 0 },
            { label: '通过', value: 1 },
            { label: '取消', value: 2 },
            { label: '禁用', value: 3 },
        ]
    },
    {
        btnId: 0,
        label: '查询',
        filterType: 'btn',
        color: 'success'
    },
    {
        btnId: 1,
        label: '查询1',
        filterType: 'btn',
        color: 'success'
    },
    {
        btnId: 2,
        label: '重置',
        filterType: 'btn',
        color: 'primary'
    },
]

export const columns = [
    {
        prop: "date",
        label: "Date",
        width: "280",
    },
    {
        prop: "name",
        label: "昵称",
        width: "180",
    },
    {
        prop: "state",
        label: "状态",
        width: "180",
        dict: [
            { label: '全部', value: 0 },
            { label: '通过', value: 1 },
            { label: '取消', value: 2 },
            { label: '禁用', value: 3 },
        ]
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
        width: '150',
        imgWidth: "80",
    },
    {
        label: "操作",
        tableType: "btn",
        btnArr: [
            { btnId: 0, label: "通过", color: "primary" },
            { btnId: 1, label: "取消", color: "danger" },
            { btnId: 2, label: "禁用", color: "danger", disabled: true },
        ],
    },
];

// 根据状态不通，显示不同的按钮，0=》table里的props的值
export const btnByStateMap = {
    0: [
        { label: "通过", color: "primary" },
        { label: "取消", color: "danger" },
        { label: "禁用", color: "danger", disabled: true },
    ],
    1: [{ label: "通过", color: "primary" }],
    2: [{ label: "取消", color: "danger" }],
    3: [{ label: "禁用", color: "danger", disabled: true }],
};
