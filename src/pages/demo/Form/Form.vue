<template>
  <Form :formColumns="formColumns"></Form>
</template>

<script setup>
import { Form } from "../../../dist/index.js";
import { Search } from "@element-plus/icons-vue";

const formColumns = [
  {
    prop: "date",
    label: "input",
    filterType: "input",
    type: "textarea",
  },
  {
    filterType: "btn",
    btnArr: [
      { btnId: 0, label: "查询", color: "primary", icon: Search },
      { btnId: 1, label: "禁用", color: "warning", disabled: true },
    ],
  },
];
</script>
