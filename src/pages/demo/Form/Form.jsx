import { defineComponent } from "vue";
import { Form } from "../../../dist/index.js";

export default defineComponent({
  setup(props, { emit }) {
    return () => (
      <Form
        formColumns={[
          {
            prop: "date",
            label: "input",
            filterType: "select",
            type: 'textarea',
            option: [
              {
                value: 1,
                label: 1
              },
              {
                value: 2,
                label: 2
              }
            ]
          },
          {
            filterType: "btn",
            btnArr: [
              { btnId: 0, label: "查询", color: "primary" },
              { btnId: 1, label: "新增", color: "success" },
              { btnId: 2, label: "重置", color: "warning", disabled: true },
            ],
          },
        ]}
      ></Form>
    );
  },
});
