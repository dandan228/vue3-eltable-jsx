<template>
    <Table
      :columns="state.columns"
      :data="state.tableData"
    />
  </template>
  
  <script setup>
  import { reactive } from "vue";
  import { Table } from "../../../src/dist/index";
  
  const state = reactive({
    columns: [
      {
        prop: "date",
        label: "Date",
        sortable: true,
        width: "150",
      },
      {
        prop: "name",
        label: "昵称",
        width: "150",
      },
      {
        prop: "state",
        label: "状态",
        width: "150",
        tableType: "switch",
      },
      {
        label: "操作",
        tableType: "btn",
        width: "250",
        btnArr: [
          { btnId: 0, label: "通过", color: "primary" },
          { btnId: 2, label: "禁用", color: "danger", disabled: true },
        ],
      },
    ],
    tableData: [
      {
        date: '2024-05-02',
        name: '张三',
        state: 1,
      }
    ]
  });
  </script>
  