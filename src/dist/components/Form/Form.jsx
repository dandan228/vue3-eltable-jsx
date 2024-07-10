import {
  ElForm,
  ElFormItem,
  ElInput,
  ElButton,
  ElSwitch,
  ElDatePicker,
  ElSelect,
  ElOption,
  ElUpload,
  ElIcon,
  ElRadioGroup,
  ElRadio,
} from "element-plus";
import { Plus, Search } from "@element-plus/icons-vue";
import { defineComponent, reactive } from "vue";
import { isArrayProperty } from "../../utils/judgeType";
import "./Form.css";

const shortcuts = [
  {
    text: "Last week",
    value: () => {
      const end = new Date();
      const start = new Date();
      start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
      return [start, end];
    },
  },
  {
    text: "Last month",
    value: () => {
      const end = new Date();
      const start = new Date();
      start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
      return [start, end];
    },
  },
  {
    text: "Last 3 months",
    value: () => {
      const end = new Date();
      const start = new Date();
      start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
      return [start, end];
    },
  },
];

export const Form = defineComponent({
  name: "FormComponent",
  props: {
    formColumns: {
      type: Array,
      required: true,
    },
    inline: {
      type: Boolean,
      default: true,
    },
    labelWidth: {
      type: Number,
      default: 0,
    },
    actionUrl: {
      type: String,
      default: "",
    },
    labelPosition: {
      type: String,
      default: "right",
    },
  },
  setup(props, { emit, expose }) {
    const { formColumns, inline, labelPosition, labelWidth, actionUrl } = props;

    const initForm = formColumns.reduce((acc, item) => {
      if (item.prop) {
        // 当 item.defaultVal 为 number 0 时，不给赋值，所以加个判断
        acc[item.prop] = item.defaultVal !== undefined ? item.defaultVal : "";
      }
      return acc;
    }, {});

    const state = reactive({ modelForm: initForm });

    const formEvent = (btnInfo) => {
      emit("formEvent", { form: state.modelForm, btnInfo });
    };

    const resetSearch = () => {
      state.modelForm = {};
      emit("resetSearch", state.modelForm);
    };

    const onSuccess = (e) => emit("onSuccess", e);

    const radioChange = (e) => emit("radioChange", e);

    const inputBtnSearch = (val) => emit("inputBtnSearch", val);

    const resetModelForm = () => {
      state.modelForm = {};
    };

    expose({ resetModelForm });

    const renderFormItem = (s, index) => {
      const inputField = (
        <ElInput v-model={state.modelForm[s.prop]}>
          {{
            append: s.appendBtn
              ? () => (
                  <ElButton
                    onClick={() => {
                      inputBtnSearch(state.modelForm[s.prop]);
                    }}
                    icon={Search}
                  />
                )
              : null,
          }}
        </ElInput>
      );

      const dateField = (
        <ElDatePicker
          v-model={state.modelForm[s.prop]}
          type="daterange"
          unlink-panels
          range-separator="To"
          start-placeholder="Start date"
          end-placeholder="End date"
          shortcuts={shortcuts}
          format="YYYY/MM/DD"
          value-format="YYYY-MM-DD"
        />
      );

      const selectField = (
        <ElSelect
          v-model={state.modelForm[s.prop]}
          style={{ width: s.width ? `${s.width}px` : "240px" }}
        >
          {isArrayProperty(s, "option") &&
            s.option.map((opt) => (
              <ElOption key={opt.value} value={opt.value} label={opt.label} />
            ))}
        </ElSelect>
      );

      const switchField = <ElSwitch v-model={state.modelForm[s.prop]} />;

      const uploadField = (
        <ElUpload
          className="avatar-uploader"
          action={actionUrl}
          onSuccess={onSuccess}
        >
          <ElIcon>
            <Plus />
          </ElIcon>
        </ElUpload>
      );

      const radioField = (
        <ElRadioGroup v-model={state.modelForm[s.prop]} onChange={radioChange}>
          {s.radioArr?.map((r) => (
            <ElRadio value={r.value} size={r.size} key={r.value}>
              {r.label}
            </ElRadio>
          ))}
        </ElRadioGroup>
      );

      const buttonField = s.btnArr
        ? s.btnArr.map((btn, btnIdx) => (
            <ElButton
              onClick={() =>
                btn.label === "重置" ? resetSearch() : formEvent(btn)
              }
              key={btnIdx}
              type={btn.color}
            >
              {btn.label}
            </ElButton>
          ))
        : null;

      const fieldTypeMap = {
        input: inputField,
        date: dateField,
        select: selectField,
        switch: switchField,
        upload: uploadField,
        radio: radioField,
        btn: buttonField,
      };

      return (
        <ElFormItem label={s.filterType === "btn" ? "" : s.label} key={index}>
          {fieldTypeMap[s.filterType]}
        </ElFormItem>
      );
    };

    return () => (
      <ElForm
        model={state.modelForm}
        inline={inline}
        label-position={labelPosition}
        label-width={labelWidth}
      >
        {formColumns.map((s, index) => renderFormItem(s, index))}
      </ElForm>
    );
  },
});
