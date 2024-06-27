export const _data = [
    // 0=>显示所有; 1=>通过; 2=>取消; 3=>禁用
    { date: "date", name: "John", state: 0, btn: "按钮1" },
    { date: "date1", name: "Jane", state: 1, btn: "按钮2" },
    { date: "date1", name: "Jane", state: 2, btn: "按钮3" },
    { date: "da2te1", name: "Jan23e", state: 3, btn: "按钮4" },
];

export const _columns = [
    {
        prop: "date",
        label: "Date",
        width: "180",
    },
    {
        prop: "name",
        label: "Name",
        width: "180",
        tableType: "input",
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

export const _filterForm = [
    {
        prop: 'date',
        label: 'Date',
        filterType: 'date',
    },
    {
        prop: 'name',
        label: 'name',
        filterType: 'input',
    },
    {
        prop: 'city',
        label: '城市',
        filterType: 'select',
    },
    {
        label: '查询',
        filterType: 'btn',
        color: 'primary'
    },
]
