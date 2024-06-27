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

  const form = reactive({});

  const handleFilterTable = () => {
    props.onHandleFilterTable(form);
  };

  return (
    <ElForm model={form} inline>
      {filterForm.map((v, index) => (
        <ElFormItem label={v.filterType === "btn" ? "" : v.label} key={index}>
          {v.filterType === "input" && <ElInput v-model={form[v.prop]} />}
          {v.filterType === "date" && (
            <ElDatePicker format="YYYY/MM/DD" value-format="YYYY-MM-DD" type="datetime" v-model={form[v.prop]} />
          )}
          {v.filterType === "select" && (
            <ElSelect v-model={form[v.prop]}>
              <ElOption value="1">1</ElOption>
              <ElOption value="2">2</ElOption>
            </ElSelect>
          )}
          {v.filterType === "switch" && <ElSwitch v-model={form[v.prop]} />}
          {v.filterType === "btn" && (
            <ElButton type={v.color} onClick={handleFilterTable}>
              {v.label}
            </ElButton>
          )}
        </ElFormItem>
      ))}
    </ElForm>
  );
};
