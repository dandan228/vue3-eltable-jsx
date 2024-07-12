import { defineComponent } from "vue";
import { Descriptions } from "../../../dist/index.js";
import { desInfo } from "./config.js";

export default defineComponent({
  setup(props, { emit }) {
    const desRightClick = (item) => {
      console.log("desRightClick", item);
    };

    return () => (
      <Descriptions
        desInfo={desInfo}
        column={4}
        onDesRightClick={desRightClick}
      ></Descriptions>
    );
  },
});
