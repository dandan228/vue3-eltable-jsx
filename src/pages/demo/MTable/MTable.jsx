import { defineComponent } from "vue";
import { MTable } from "../../../dist/index.js";

export default defineComponent({
  setup(props, { emit }) {
    return () => (
      <MTable pageInfo={{ pageSize: 10, pageNum: 1, total: 10 }}></MTable>
    );
  },
});
