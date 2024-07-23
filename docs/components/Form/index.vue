<template>
    <Form
      :formColumns="formColumns"
    />
  </template>
  
  <script setup>
  import { Form } from "../../../src/dist/index";
  
  const formColumns = [
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
        { btnId: 2, label: "重置", color: "warning", disabled: true },
      ],
    },
  ];
  </script>
  