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
      // 当item.defaultVal为number 0 时， 不给赋值，所以加个判断
      acc[item.prop] = item.defaultVal !== undefined ? item.defaultVal : '';
    }
    return acc;
  }, {});

  const state = reactive({
    modelForm: initForm,
  });

  const handleFilterTable = (v) => {
    const _filterForm = v
    props.onHandleFilterTable(state.modelForm, _filterForm);
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
            </ElSelect>
          )}
          {v.filterType === "switch" && (
            <ElSwitch v-model={state.modelForm[v.prop]} />
          )}
          {v.filterType === "btn" && v.label !== "重置" && (
            <ElButton type={v.color} onClick={() => handleFilterTable(v, index)}>
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
