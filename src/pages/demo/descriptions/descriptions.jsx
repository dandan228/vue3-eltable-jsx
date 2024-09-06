import { defineComponent, reactive, onMounted } from "vue";
import { Descriptions } from "../../../dist/index.js";
import { desInfo } from "./config.js";

export default defineComponent({
  setup(props, { emit }) {
    const state = reactive({
      data: {},
      key: 1,
      desInfo: {}
    })

    onMounted(() => {
      state.data = {tip: 666}
      state.desInfo = desInfo(state.data)
      state.key = 2
    })

    const desRightClick = (item) => {
      console.log("desRightClick", item);
    };

    const selectChange = (sour, val) => {};

    return () => (
      <Descriptions
        desInfo={state.desInfo}
        column={4}
        key={state.key}
        onDesRightClick={desRightClick}
        onInputChange={selectChange}
      ></Descriptions>
    );
  },
});
