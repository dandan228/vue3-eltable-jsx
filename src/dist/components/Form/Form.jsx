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
import { Plus } from "@element-plus/icons-vue";
import { defineComponent, reactive, ref } from "vue";
import { isArrayProperty } from "../../utils/judgeType";
import "./Form.css";

export const Form = defineComponent({
  name: "FormComponent",
  props: {
    formColumns: {
      type: Array,
      required: true,
      default: () => [],
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
    shortcuts: {
      type: Array,
      default: () => [
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
      ],
    },
  },
  setup(props, { emit, expose }) {
    const {
      formColumns,
      inline,
      labelPosition,
      labelWidth,
      actionUrl,
      shortcuts,
    } = props;

    const initForm = formColumns.reduce((acc, item) => {
      if (item.prop) {
        // 当 item.defaultVal 为 number 0 时，不给赋值，所以加个判断
        acc[item.prop] = item.defaultVal !== undefined ? item.defaultVal : "";
      }
      return acc;
    }, {});

    const state = reactive({ modelForm: initForm });

    const formEvent = (btnInfo, formEl) => {
      if (!formEl) return;
      formEl.value.validate((valid) => {
        if (valid) {
          console.log("submit!");
        } else {
          console.log("error submit!");
        }
      });

      emit("formEvent", { form: state.modelForm, btnInfo });
    };

    const resetSearch = () => {
      state.modelForm = {};
      emit("resetSearch", state.modelForm);
    };

    const onSuccess = (e) => emit("onSuccess", e);

    const radioChange = (val, e) => {
      emit("radioChange", val, e);
    };

    const inputBtnSearch = (val) => emit("inputBtnSearch", val);

    const resetModelForm = () => {
      state.modelForm = {};
    };

    expose({ resetModelForm });

    const inputSlot = (icon, text, click, prop) => {
      if (icon) {
        return () => (
          <ElButton
            onClick={() => {
              click(state.modelForm[prop]);
            }}
            icon={icon}
          />
        );
      } else if (text) {
        return () => (
          <span
            onClick={() => {
              click(state.modelForm[prop]);
            }}
            style={{ cursor: "pointer" }}
          >
            {text}
          </span>
        );
      } else {
        return null;
      }
    };

    const renderFormItem = (s, index) => {
      const inputField = (
        <ElInput
          v-model={state.modelForm[s.prop]}
          disabled={s.disabled}
          type={s.type}
          size={s.size}
          rows={s.rows}
          placeholder={s.placeholder}
          v-slots={{
            prepend: inputSlot(
              s.prependIcon,
              s.prependTxt,
              inputBtnSearch,
              s.prop
            ),
            append: inputSlot(
              s.appendIcon,
              s.appendTxt,
              inputBtnSearch,
              s.prop
            ),
          }}
        ></ElInput>
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
        <ElRadioGroup v-model={state.modelForm[s.prop]} onChange={(e)=>{radioChange(s, e)}}>
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
              icon={btn.icon}
              disabled={btn.disabled}
              onClick={() =>
                btn.label === "重置" ? resetSearch() : formEvent(btn, formRef)
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
        <ElFormItem
          label={s.filterType === "btn" ? "" : s.label}
          key={index}
          rules={s.rules}
          prop={s.prop}
        >
          {fieldTypeMap[s.filterType]}
        </ElFormItem>
      );
    };

    const formRef = ref(null);

    return () => (
      <ElForm
        ref={formRef}
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
