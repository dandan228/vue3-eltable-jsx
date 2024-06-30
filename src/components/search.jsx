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
import { reactive } from "vue";

export const Search = (props, { slots }) => {
  const { filterForm } = props;

  const initForm = filterForm.reduce((acc, item) => {
    if (item.prop) {
      // 当item.defaultVal为number 0 时， 不给赋值，所以加个判断
      acc[item.prop] = item.defaultVal !== undefined ? item.defaultVal : "";
    }
    return acc;
  }, {});

  const state = reactive({
    modelForm: initForm,
  });

  const formEvent = (s) => {
    const searchForm = s;
    props.onformEvent(state.modelForm, searchForm);
  };
  const resetSearch = () => {
    state.modelForm = {};
    props.resetSearch(state.modelForm);
  };

  return (
    <ElForm model={state.modelForm} inline>
      {filterForm.map((s, index) => (
        <ElFormItem label={s.filterType === "btn" ? "" : s.label} key={index}>
          {s.filterType === "input" && (
            <ElInput v-model={state.modelForm[s.prop]} />
          )}
          {s.filterType === "date" && (
            <ElDatePicker
              format="YYYY/MM/DD"
              value-format="YYYY-MM-DD"
              type="datetime"
              v-model={state.modelForm[s.prop]}
            />
          )}
          {s.filterType === "select" && (
            <ElSelect
              v-model={state.modelForm[s.prop]}
              style={{ width: "200px" }}
            >
              {s.option.map((s, i) => (
                <ElOption
                  key={s.value}
                  value={s.value}
                  label={s.label}
                ></ElOption>
              ))}
            </ElSelect>
          )}
          {s.filterType === "switch" && (
            <ElSwitch v-model={state.modelForm[s.prop]} />
          )}
          {s.filterType === "btn" && s.label !== "重置" && (
            <ElButton type={s.color} onClick={() => formEvent(s, index)}>
              {s.label}
            </ElButton>
          )}
          {s.filterType === "btn" && s.label === "重置" && (
            <ElButton type={s.color} onClick={resetSearch}>
              {s.label}
            </ElButton>
          )}
        </ElFormItem>
      ))}
    </ElForm>
  );
};
