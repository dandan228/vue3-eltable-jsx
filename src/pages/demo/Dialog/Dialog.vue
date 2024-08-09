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
    filterType: "upload",
    actionUrl: "",
    limit: 2,
    fileList: [
      { url: "https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100" },
    ],
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
