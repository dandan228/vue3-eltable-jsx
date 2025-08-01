import { Search } from "@element-plus/icons-vue";
import { shallowRef } from "vue"
import dayjs from 'dayjs'

export const tableData = [
    // 0=>显示所有; 1=>通过; 2=>取消; 3=>禁用
    { date: "date", name: "John", state: 0, btn: "按钮1" },
    { date: "date1", name: "Jane", state: 1, btn: "按钮2" },
    { date: "date1", name: "Jane", state: 2, btn: "按钮3" },
    { date: "da2te1", name: "Jan23e", state: 3, btn: "按钮4" },
];

function getLastMonthSameDayOrEnd() {
    const today = dayjs();
    const lastMonth = today.subtract(1, 'month');
    const daysInLastMonth = lastMonth.daysInMonth();
    const targetDay = Math.min(today.date(), daysInLastMonth);
    return lastMonth.date(targetDay).startOf('day');
}

export const formColumns = [
    {
        prop: "date",
        label: "Date",
        filterType: "date",
        dateType: 'datetimerange',
        dateFormat: 'YYYY-MM-DD HH:mm:ss',
        defaultVal: [
            getLastMonthSameDayOrEnd().format('YYYY-MM-DD HH:mm:ss'),
            dayjs().endOf('day').format('YYYY-MM-DD HH:mm:ss')
        ],
        disabledDate: (time) => {
            const start = getLastMonthSameDayOrEnd();
            const end = dayjs().endOf('day');
            return dayjs(time).isBefore(start) || dayjs(time).isAfter(end);
        },
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
        appendIcon: shallowRef(Search),
        rules: {
            required: true,
            message: 'name can not be null',
            trigger: 'blur',
        },
        vIf: true
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
