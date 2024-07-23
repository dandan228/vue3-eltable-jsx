<template>
  <Descriptions
    :desInfo="desInfo"
    :column="4"
    @desRightClick="desRightClick"
  ></Descriptions>
</template>

<script setup>
import { Descriptions } from "../../../src/dist/index";
import { QuestionFilled } from "@element-plus/icons-vue";

const desInfo = {
  title: "概要消息",
  desArr: [
    {
      label: "提示",
      val: "1",
      btn: {
        type: "primary",
        link: true,
        txt: "修改",
      },
      tooltipInfo: {
        icon: QuestionFilled,
        content: "提示",
      },
    },
    {
      label: "提示",
      val: "2",
      btn: {
        type: "primary",
        link: true,
        txt: "修改",
      },
    },
    {
      label: "提示",
      val: "3",
    },
    {
      label: "提示",
      val: "4",
    },
    {
      label: "提示",
      val: "5",
    },
  ],
};

const desRightClick = (item) => {
  console.log("desRightClick", item);
};
</script>
