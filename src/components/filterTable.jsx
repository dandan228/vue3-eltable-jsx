import {
  ElForm,
  ElFormItem,
  ElInput,
  ElButton,
  ElSwitch,
  ElDatePicker,
  ElSelect,
  ElOption,
} from "element-plus";
import { defineComponent, reactive } from "vue";

export const FilterTable = (props, { slots }) => {
  const { filterForm } = props;

  const state = reactive({
    form: {}
  });

  const handleFilterTable = () => {
    props.onHandleFilterTable(state.form);
  };
  const resetFilterTable = () => {
    state.form = {}
    props.resetFilterTable(state.form);
  };

  return (
    <ElForm model={state.form} inline>
      {filterForm.map((v, index) => (
        <ElFormItem label={v.filterType === "btn" ? "" : v.label} key={index}>
          {v.filterType === "input" && <ElInput v-model={state.form[v.prop]} />}
          {v.filterType === "date" && (
            <ElDatePicker format="YYYY/MM/DD" value-format="YYYY-MM-DD" type="datetime" v-model={state.form[v.prop]} />
          )}
          {v.filterType === "select" && (
            <ElSelect v-model={state.form[v.prop]}>
              <ElOption value="1">1</ElOption>
              <ElOption value="2">2</ElOption>
            </ElSelect>
          )}
          {v.filterType === "switch" && <ElSwitch v-model={state.form[v.prop]} />}
          {v.filterType === "btn" && v.label !== "重置" && (
            <ElButton type={v.color} onClick={handleFilterTable}>
              {v.label}
            </ElButton>
          )}
          {v.filterType === "btn" && v.label === "重置" && (
            <ElButton type={v.color} onClick={resetFilterTable}>
              {v.label}
            </ElButton>
          )}
        </ElFormItem>
      ))}
    </ElForm>
  );
};
