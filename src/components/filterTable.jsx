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

  const initForm = filterForm.reduce((acc, item) => {
    if (item.prop) {
      acc[item.prop] = item.defaultVal;
    }
    return acc;
  }, {});

  const state = reactive({
    modelForm: initForm,
  });

  const handleFilterTable = () => {
    props.onHandleFilterTable(state.modelForm);
  };
  const resetFilterTable = () => {
    state.modelForm = {};
    props.resetFilterTable(state.modelForm);
  };

  return (
    <ElForm model={state.modelForm} inline>
      {filterForm.map((v, index) => (
        <ElFormItem label={v.filterType === "btn" ? "" : v.label} key={index}>
          {v.filterType === "input" && <ElInput v-model={state.modelForm[v.prop]} />}
          {v.filterType === "date" && (
            <ElDatePicker
              format="YYYY/MM/DD"
              value-format="YYYY-MM-DD"
              type="datetime"
              v-model={state.modelForm[v.prop]}
            />
          )}
          {v.filterType === "select" && (
            <ElSelect v-model={state.modelForm[v.prop]} style={{ width: "200px" }}>
              {v.option.map((s, i) => (
                <ElOption
                  key={s.value}
                  value={s.value}
                  label={s.label}
                ></ElOption>
              ))}
              {console.log(v.defaultVal)}
            </ElSelect>
          )}
          {v.filterType === "switch" && (
            <ElSwitch v-model={state.modelForm[v.prop]} />
          )}
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
