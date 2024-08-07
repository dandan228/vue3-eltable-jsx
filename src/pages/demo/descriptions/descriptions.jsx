import { defineComponent, reactive, onMounted } from "vue";
import { Descriptions } from "../../../dist/index.js";
import { desInfo } from "./config.js";

export default defineComponent({
  setup(props, { emit }) {
    const desRightClick = (item) => {
      console.log("desRightClick", item);
    };

    const state = reactive({
      data: {},
      key: 1
    })

    onMounted(() => {
      setTimeout(() => {
        state.data = {tip: 666}
        state.key = 2
      }, 1000);
    })

    return () => (
      <Descriptions
        desInfo={desInfo(state.data)}
        column={4}
        key={state.key}
        onDesRightClick={desRightClick}
      ></Descriptions>
    );
  },
});
