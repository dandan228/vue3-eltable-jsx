<template>
    <Pagination
      :pageInfo="pageInfo"
    />
  </template>
  
  <script setup>
  import { Pagination } from "../../../src/dist/index";

  const pageInfo = {
    total: 0,
    pageSize: 10,
    pageNum: 1,
  };
  </script>
  