<template>
  <Descriptions
    :desInfo="state.desInfo"
    :column="4"
    :key="state.key"
    @desRightClick="desRightClick"
    @selectChange="selectChange"
  ></Descriptions>
</template>

<script setup>
import { reactive, onMounted, h } from "vue";
import { ElMessageBox } from "element-plus";
import { Descriptions } from "../../../src/dist/index";
import { desInfo } from "./config.js";

const state = reactive({
  data: {},
  key: 1,
  desInfo: {},
});

onMounted(() => {
  state.data = { tip: 666 };
  state.desInfo = desInfo(state.data);
  state.key = 2;
});

const desRightClick = (item) => {
  ElMessageBox({
    title: "修改",
    message: h("p", null, [
      h("span", null, "当前源是："),
      h("i", { style: "color: teal" }, JSON.stringify(item)),
    ]),
  });
};

const selectChange = (sour, val) => {
  ElMessageBox({
    title: "select",
    message: h("p", null, [
      h("span", "当前值是："),
      h("span", { style: "color: teal" }, val),
      h("br"),
      h("span", null, "当前row是："),
      h("i", { style: "color: teal" }, JSON.stringify(sour)),
    ]),
  });
};
</script>
